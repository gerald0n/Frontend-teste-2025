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
        neutral: string
        border: string
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
    breakpoints: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
      xxl: string
    }
    media: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
      xxl: string
    }
  }
}
