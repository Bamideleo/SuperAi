<?php

namespace Modules\OpenAI\Services\v2;

class AudioProcessor
{
    /**
     * @var string The path to the audio file.
     */
    protected $path;

    /**
     * Constructor.
     *
     * @param  string  $path
     */
    public function __construct(string $path)
    {
        $this->path = objectStorage()->url($path);
    }

    /**
     * Get the path to the audio file.
     *
     * @return string
     */
    public function getPath()
    {
        return $this->path;
    }

    /**
     * Check if the audio file is valid.
     *
     * @return bool
     *
     * @throws \Exception
     */
    public function isValid()
    {
        $extension = pathinfo($this->path, PATHINFO_EXTENSION);
        if (!in_array($extension, ['mp3', 'wav', 'ogg', 'mpeg', 'flac', 'aac', 'wma','m4a', 'aif', 'aiff'])) {
            return false;
        }

        return true;
    }
}
