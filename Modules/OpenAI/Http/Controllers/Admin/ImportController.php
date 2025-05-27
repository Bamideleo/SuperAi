<?php
/**
 * @package ExportController
 * @author TechVillage <support@techvill.org>
 * @contributor Kabir Ahmed <[kabir.techvill@gmail.com]>
 * @created 18-12-2024
 */
namespace Modules\OpenAI\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\OpenAI\Services\ActorImport\VoiceoverActorProviderFactory;
use Modules\OpenAI\Services\ActorImport\ProviderDiscovery;
use App\Models\User;



class ImportController extends Controller
{
    /**
     * This function is responsible for importing voice over actors
     * from a CSV file. The request must contain the provider name
     * and the CSV file containing the actors.
     *
     * @param Request $request
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function actorImport(Request $request)
    {
        if ($request->isMethod('get')) {
            $data['providers'] = ProviderDiscovery::getProviders();
            return view('openai::admin.import.actor', $data);
        }
        

        try {
            // Resolve the provider and process the data
            $validator = User::importValidation($request->all());
            if ($validator->fails()) {
                return back()->withErrors($validator)->withInput();
            }

            $providerService = VoiceoverActorProviderFactory::make($request->input('provider'));
            $actors = $providerService->processActors(request()->all());

            if (!$actors) {
                return back()->withSuccess(__('File uploaded successfully.'));
            } 

            return back();
            
        } catch (\Exception $e) {
            return back()->withFail($e->getMessage());
        }
    }

    /**
     * Retrieves the API documentation link for the specified provider.
     *
     * This function uses the provider name from the request to resolve
     * the appropriate service and fetches the API documentation link
     * associated with that provider.
     *
     * @return \Illuminate\Http\JsonResponse
     */

    public function attributes()
    {
        $providerService = VoiceoverActorProviderFactory::make(request('provider'));
        return response()->json($providerService->references());
    }
}


