import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      WHITE: string
      WHITE_2: string
      GREEN: string
      PINK: string
      ORANGE: string
      YELLOW: string

      BLACK_PRIMARY: string
      BLACK_SECONDARY: string
      BLACK_TERTIARY: string

      GRAY_PRIMARY: string
      GRAY_SECONDARY: string
      GRAY_TERTIARY: string
      GRAY_QUATERNARY: string
    },

    fonts: {
      REGULAR: string
      BOLD: string
    },
  }
}
