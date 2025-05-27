<?php

namespace Modules\OpenAI\Services\ActorImport;

use Modules\OpenAI\Contracts\Resources\VoiceoverActorImportContract;
use App\Traits\ModelTraits\hasFiles;
use Modules\OpenAI\Entities\Voice;

class ElevenLab implements VoiceoverActorImportContract
{
    use hasFiles;

    public $voice = 'https://elevenlabs.io/docs/product/voices/default-voices';

    /**
     * This function is responsible for importing voice over actors
     * from a CSV file. The request must contain the provider name
     * and the CSV file containing the actors.
     *
     * @param array $data
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function processActors(array $data)
    {

        $path = request()->file('file')->getRealPath();
        
        $csv = [];

        if (is_uploaded_file($path)) {
            $csv = readCSVFile($path, true);
        }

        if (empty($csv)) {
            return back()->withErrors(__('Your CSV has no data to import'));
        }

        $requiredHeader  = ['Name', 'Voice', 'Language', 'Gender', 'Status', 'Audio', 'Image'];
        $header = array_keys($csv[0]);

        // Check if required headers are available or not
        if (! empty(array_diff($requiredHeader, $header))) {
            return back()->withErrors(__('Please Check CSV Header Name.'));
        }
        
        \DB::beginTransaction();
        $voiceNames = array_column($csv, 'Voice');
        $existingVoices = \DB::table('voices')->whereIn('voice_name', $voiceNames)->pluck('voice_name')->toArray();

        try {
            foreach ($csv as $key => $value) {

                $requiredFields = ['Name', 'Voice', 'Language', 'Gender', 'Status', 'Image', 'Audio'];

                foreach ($requiredFields as $field) {
                    if (empty($value[$field])) {
                        throw new \Exception(__(':x is required. Please check for any empty fields.', ['x' => $field]));
                    }
                }

                if (in_array($value['Voice'], $existingVoices)) {
                    throw new \Exception(__("This voice actor, ':x', already exists. Please remove it first, then try again.", ['x' => $value['Voice']]));
                }

                $data = [
                    'name' => $value['Name'],
                    'user_id' => auth()->id(),
                    'voice_name' => $value['Voice'],
                    'language_code' => $value['Language'],
                    'gender' => $value['Gender'],
                    'status' => $value['Status'],
                    'image' => $value['Image'],
                    'providers' => 'ElevenLab',
                    'file_name' => $this->fileUpload($value['Audio']),
                ];
             
                $voice = Voice::create($data);

                if (isset($data['image']) && !empty($data['image'])) {
                    $voice->uploadFilesFromUrl($data['image'], ['isUploaded' => false, 'isOriginalNameRequired' => true, 'thumbnail' => false, 'isSavedInObjectFiles' => true]);
                }
    
            }

            \DB::commit();

        } catch (\Exception $e) {
            \DB::rollBack();
            return back()->withErrors($e->getMessage());
        }
       

    }

    public function fileUpload($audio)
    {
        return (new Voice())->fileUpload($audio);
    }

    /**
     * This function returns the URL of the API documentation of the
     * provider. This is used to open the documentation in a new tab
     * when the user clicks on the question mark icon on the provider
     * select dropdown.
     *
     * @return array
     */
    public function references(): array
    {
        return [
            'documentation' => '',
            'important_note' => _('All actors from ElevenLab have already been added to our voice list. Currently, they do not provide documentation for adding them. If they make it available in the future, we will share it with you.'),
        ];
    }
}

