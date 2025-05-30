/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
      "./storage/framework/views/*.php",
      "./resources/views/**/*.blade.php",
      './public/**/*.js',
      './Modules/**/*.blade.php',
      './Modules/**/*.js',
      './Modules/**/**/**/*.php',
      "./node_modules/tw-elements/dist/js/**/*.js",
    ],
  
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
              'color-2C': '#2c2c2c',
              'color-FC': '#FCCA19',
              'color-FF7': '#FFC327',
              'color-F3': '#F3F3F3',
              'color-89': '#898989',
              'color-DF': '#DFDFDF',
              'color-E4': '#E4E4E4',
              'color-F9': '#F9F7F7',
              'color-FF': '#FFF4CE',
              'color-14': '#141414',
              'color-22': '#222222',
              'color-F6': '#F6F3F2',
              'color-E6': '#E60C84',
              'color-E2': '#E22861',
              'color-FFB': '#FF774B',
              'color-76': '#763CD4',
              'color-FF': '#FFF4CE',
              'color-47': '#474746',
              'color-29': '#292929',
              'color-43': '#434241',
              'color-33': '#333332',
              'color-3A': '#3A3A39',
              'color-DFF': '#DF2F2F',
              'color-14R': 'rgba(20, 20, 20, 0.7)',
              'color-FFR': 'rgba(255, 255, 255, 0.7)',

          },
          screens: {
              xxs: "375px",
              xs: "428px",
              sm: "640px",
              md: "768px",
              lgMd: "890px",
              lg: "1024px",
              xl: "1152px",
              "2xl": "1280px",
              "3xl": "1360px",
              "4xl": "1366px",
              "5xl": "1400px",
              "6xl": "1440px",
              "7xl": "1600px",
              "8xl": "1680px",
              "9xl": "1920px",
          },
          fontSize: {
              "10": ['10px', '14px'],
              "12": ['12px', '18px'],
              "13": ['13px', '20px'],
              "14": ['14px', '22px'],
              "15": ['15px', '22px'],
              "16": ['16px', '24px'],
              "18": ['18px', '26px'],
              "20": ['20px', '28px'],
              "22": ['22px', '30px'],
              "24": ['24px', '32px'],
              "28": ['28px', '36px'],
              "32": ['32px', '45px'],
              "36": ['36px', '50px'],
              "48": ['48px', '67px'],
              "80": ['80px', '92px'],
          }
      },
    },
    plugins: [require("tw-elements/dist/plugin"),
    require('@tailwindcss/forms'),
  ]

  }
  