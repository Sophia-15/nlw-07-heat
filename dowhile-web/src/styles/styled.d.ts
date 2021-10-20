import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
      title: string
      logo: string
      colors: {
        background: string
        black1: string
        black3: string
        black4: string
        loginBackground: string
        formBackground: string

        yellow: string
        pink: string

        gray1: string
        gray2: string
        gray3: string

        white: string
    }
  }
}
