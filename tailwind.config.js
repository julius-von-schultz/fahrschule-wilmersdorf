/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    boxShadow: {
      button: '0 12px 12px -12px rgba(51, 48, 0, 0.4)',
      'border-grey-80': 'inset 0 0 0 2px #CCCCCC',
      'border-grey-16': 'inset 0 0 0 2px #292929',
    },
    colors: {
      'transparent': 'transparent',
      'fw-grey-1': '#F4F5F5',
      'fw-grey-2': '#E9EAEC',
      'fw-grey-3': '#DFE0E2',
      'fw-grey-4': '#D4D6D9',
      'fw-grey-5': '#C9CBCF',
      'fw-grey-6': '#BEC1C5',
      'fw-grey-7': '#B3B7BC',
      'fw-grey-8': '#A9ADB2',
      'fw-grey-9': '#9EA2A9',
      'fw-grey-10': '#93989F',
      'fw-grey-11': '#888E96',
      'fw-grey-12': '#7D838C',
      'fw-grey-13': '#737982',
      'fw-grey-14': '#656A71',
      'fw-grey-15': '#60656C',
      'fw-grey-16': '#565B61',
      'fw-grey-17': '#4D5156',
      'fw-grey-18': '#43474C',
      'fw-grey-19': '#3A3D41',
      'fw-grey-20': '#303236',
      'fw-grey-21': '#26282B',
      'fw-grey-22': '#1D1E20',
      'fw-grey-23': '#131416',
      'fw-grey-24': '#0A0A0B',
      'fw-yellow-1': '#f5f37f',
      'fw-yellow-2': '#dbd772',
      'fw-yellow-3': '#c1be64',
      'fw-yellow-4': '#a8a556',
      'fw-blue': '#3858E9',
      'fw-blue-2': '#6C84EF',
      'fw-blue-3': '#91A3F3',
      'fw-blue-4': '#B6C2F7',
      'fw-dark-blue': '#1E2647',
      'fw-dark-blue-1': '#353b59',
      'fw-white': '#FFFFFF',
      'fw-black': '#000000',
    },
    extend: {},
  },
  plugins: [],
  fontFamily: {
    sans: ['AnekMalayalam'],
  },
  fontSize: {
    xs: '.75rem', // 12px
    sm: '.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.25rem', // 20px
    xl: '1.5rem', // 24px
    '2xl': '1.75rem', // 28px
    '3xl': '2rem', // 32px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem', // 48px
    '6xl': '3.5rem', // 56px
    '7xl': '4rem', // 64px
  },
  lineHeight: {
    3: '0.75rem', // 12px
    4: '1rem', // 16px
    5: '1.25rem', // 20px
    6: '1.5rem', // 24px
    7: '1.75rem', // 28px
    8: '2rem', // 32px
    9: '2.25rem', // 36px
    10: '2.5rem', // 40px
    11: '2.75rem', // 44px
    12: '3rem', // 48px
    13: '3.25rem', // 52px
    14: '3.5rem', // 56px
    15: '3.75rem', // 60px
    16: '4rem', // 64px
  },
  opacity: {
    0: '0',
    10: '0.1',
    20: '0.2',
    50: '0.5',
    80: '0.8',
    100: '1',
  },
  screens: {
    sm: '0px',
    md: '768px',
    lg: '1280px',
    xl: '1440px',
    '2xl': '2560px',
  },
}

export class theme {}
