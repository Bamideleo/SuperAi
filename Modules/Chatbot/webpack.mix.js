const dotenvExpand = require('dotenv-expand');
dotenvExpand(require('dotenv').config({ path: '../../.env'/*, debug: true*/}));

const mix = require('laravel-mix');
require('laravel-mix-merge-manifest');

mix.setPublicPath('../../Modules/Chatbot').mergeManifest();

mix.js(__dirname + '/Resources/js/app.js', 'Resources/assets/js/app.js')
    .postCss(__dirname + '/Resources/css/app.css', 'Resources/assets/css/app.css', [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
        require('postcss-nested'),
    ])
    .react();

if (mix.inProduction()) {
    mix.version();
}
