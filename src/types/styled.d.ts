import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    grid: {
      container: string
    }
    border: {
      radius: {
        none: string
        small: string
        medium: string
        large: string
        circle: string
      }
    }
    font: {
      family: {
        inter: string
        roboto: string
        quattrocento: string
      }
      weight: {
        light: number
        normal: number
        semibold: number
        bold: number
      }
      sizes: {
        small: string
        medium: string
        large: string
        xlarge: string
        xxlarge: string
        xxxlarge: string
      }
    }
    colors: {
      primary: {
        main: string
        muted: string
        foreground: string
      }
      secundary: {
        main: string
        muted: string
        foreground: string
      }
      white: string
      zinc: {
        100: string
        300: string
        500: string
      }
      green: string
      pink: string
      black: {
        main: string
        muted: string
        foreground: string
      }
    }
    spacings: {
      xxxsmall: string
      xxsmall: string
      xsmall: string
      small: string
      medium: string
      large: string
      xlarge: string
      xxlarge: string
      xxxlarge: string
    }
    layers: {
      base: number
      menu: number
      overlay: number
      modal: number
      alwaysOnTop: number
    }
    transition: {
      default: string
      fast: string
    }
  }
}
