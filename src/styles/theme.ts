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
      muted: 'rgba(121, 43, 249, 0.1)',
      foreground: '#ffffff',
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
  spacings: {
    xxxsmall: '0.8rem',
    xxsmall: '1rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
    xxxlarge: '6.4rem',
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
} as const
