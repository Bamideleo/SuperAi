<?php

namespace Modules\OpenAI\Contracts\Resources;


interface VoiceoverActorImportContract {

    public function processActors(array $data);

    /**
     * Get an array of references, each containing a note or a link.
     *
     * @return array An associative array where keys represent reference names, 
     *               and values contain either a note (string) or a link (URL as string).
     *
     * Example:
     * [
     *     'documentation' => 'https://example.com/docs',
     *     'important_note' => 'This feature is experimental.'
     * ]
     */
    public function references(): array;
}
