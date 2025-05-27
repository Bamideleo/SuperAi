<?php

add_action('after_elevenlabs_addon_activation', function() {
    \File::copyDirectory( base_path('Modules/ElevenLabs/Resources/assets/seeder/') , public_path('uploads/googleAudios/'));
});