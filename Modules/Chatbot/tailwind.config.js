import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "../../vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "../../storage/framework/views/*.php",
        "./Resources/js/app/**/*.{js,jsx,ts,tsx}",
        "./Resources/views/**/*.blade.php",
    ],
    theme: {
        extend: {
          boxShadow: {
            avatar: '15px 16px 40px -10px rgba(118, 60, 212, 0.60)',
            input: '0px 24px 40px -10px rgba(20, 20, 20, 0.15)',
            aiavatar: '0px 16px 40px -10px rgba(118, 60, 212, 0.6)',
            chatbot: '0px 7px 50px -17px rgba(20, 20, 20, 0.20)'
          },
          fontFamily: {
            sans: ['"Figtree"', ...defaultTheme.fontFamily.sans],
            redhat: ['"Red Hat Display"', 'sans-serif']
          },
          fontSize: {
            xs: ['0.813rem', '1.25rem'], // 13px
            '2xs': ['0.75rem', '1.125rem'], // 12px
            '3xs': ['0.688rem', '0.75'], // 11px
            sm: ['0.875rem', '1.375'], // 14px
            15: ['0.938rem', '1.375rem'], // 15px
            base: ['1rem', '1.5rem'], // 16px
            lg: ['1.125rem', '1.5rem'], // 18px
            xl: ['1.25rem', '1.5rem'] // 20px
          }
        },
        colors: {
          white: '#FFFFFF',
          purple: '#763CD4',
          gold: '#FCCA19',
          pink: '#E22861',
          orange: '#FF774B',
          yellow: '#FCCA19',
          red: '#DF2F2F',
          clr47: '#474746',
          clr43: '#434343',
          clr91: '#9163dd',
          clrE0: '#E0E0E0',
          clrF8: '#F8EFE7',
          gray: {
            1: '#898989',
            2: '#DFDFDF',
            3: '#F3F3F3'
          },
          green: {
            1: '#48B460',
            2: '#3C904F'
          },
          bg: {
            1: '#F6F3F2',
            2: '#F9F7F7'
          },
          dark: {
            1: '#141414', // stroke
            bg: '#292929',
            'shade-1': '#333332',
            'shade-2': '#3A3A39'
          }
        }
      },
    plugins: [],
};
