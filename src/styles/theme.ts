export default {
  grid: {
    container: '144rem',
  },
  border: {
    radius: {
      none: '0',
      small: '0.2rem',
      medium: '0.4rem',
      large: '0.8rem',
      circle: '50%',
    },
  },
  font: {
    family: {
      inter: 'Inter, sans-serif',
      roboto: 'Roboto Condensed, sans-serif',
      quattrocento: 'Quattrocento, serif',
    },
    weight: {
      light: 300,
      normal: 400,
      semibold: 600,
      bold: 700,
    },
    sizes: {
      small: '1.2rem',
      medium: '1.4rem',
      large: '1.6rem',
      xlarge: '1.8rem',
      xxlarge: '2.0rem',
      xxxlarge: '2.4rem',
    },
  },
  colors: {
    primary: {
      main: '#792BF9',
      neutral: '#F1F4FB',
      muted: 'rgba(121, 43, 249, 0.1)',
      foreground: '#ffffff',
      border: '#D4D9EB',
    },
    secundary: {
      main: '#171717',
      muted: 'rgba(23, 23, 23, 0.1)',
      foreground: '#ffffff',
    },
    white: '#ffffff',
    zinc: {
      100: '#e5e5e5',
      300: '#9ca3af',
      500: '#383838',
    },
    green: '#2b932f',
    pink: '#e33f52',
    black: {
      main: '#171717',
      muted: 'rgba(0, 0, 0, 0.5)',
      foreground: '#ffffff',
    },
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
  },
  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1440px',
  },
  media: {
    xs: '@media (min-width: 320px)',
    sm: '@media (min-width: 576px)',
    md: '@media (min-width: 768px)',
    lg: '@media (min-width: 1024px)',
    xl: '@media (min-width: 1280px)',
    xxl: '@media (min-width: 1440px)',
  },
} as const
