<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\Rule;

class CheckMediaFile implements Rule
{
    /**
     * Set error message.
     *
     * @param string $errorMessage
     * @var string
     */
    protected $errorMessage;

    /**
     * Allowed file extention.
     *
     * @var array
     */
    protected $allowFile;

    /**
     * Check maximum file size
     *
     * @var bool
     */
    protected $checkMaxFileSize;


    /**
     * Check file extension
     *
     * @var bool
     */
    protected $checkextension;

    /**
     * Set $allowFile and $checkMaxFileSize.
     *
     * @param  array  $allowFile
     * @param  bool  $checkMaxFileSize
     * @return void
     */
    public function __construct(array $allowedFileTypes = [], bool $checkMaxFileSize = true, bool $checkExtension = true)
    {
        $this->allowedFileTypes = $allowedFileTypes;
        $this->checkMaxFileSize = $checkMaxFileSize;
        $this->checkExtension = $checkExtension;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param string $attribute
     * @param mixed $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        if (!is_array($value) || $attribute !== 'file_id') {
            return true;
        }

        $fileId = is_array($value) ? reset($value) : $value;

        if (empty($fileId)) {
            $this->errorMessage = __('The file is required.');
            return false;
        }

        $file = \App\Models\File::find($fileId);

        if (!$file) {
            $this->errorMessage = __('The file is required.');
            return false;
        }

        if (!in_array($file->object_type, $this->allowedFileTypes)) {
            $this->errorMessage = __('Allowed File Extensions: ') . implode(', ', $this->allowedFileTypes);
            return false;
        }
        
        if ($this->checkMaxFileSize && isset($file->file_size)) {
            $maxFileSize = maxFileSize($file->file_size * 1024);
            if (!$maxFileSize['status']) {
                $this->errorMessage = $maxFileSize['message'];
                return false;
            }
        }

        return true;
    }



    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return $this->errorMessage;
    }
}
