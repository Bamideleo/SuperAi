import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'Modules/Chatbot/Resources/sass/app.scss',
                'Modules/Chatbot/Resources/js/app.js',
            ],
            refresh: ['Modules/Chatbot/Resources/views/**/*.blade.php'],
        }),
        react(),
    ]
});
