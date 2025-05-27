<?php

return [
    'name' => 'PlagiarismCheck',
    'PLAGIARISMCHECK' => [
        'API_KEY' => env('PLAGIARISMCHECK', 'bNBsl51m8w0uy0ICDh-rB2rL0Wbw3Ewe'),
        'BASE_URL' => 'https://plagiarismcheck.org/api/v1/text',
        'DETECTOR_URL' => 'https://plagiarismcheck.org/api/v1/chat-gpt/'
    ],
];
