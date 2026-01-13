import { createGlobalStyle } from 'styled-components'

export const Colors = {
  TitleColor: '#E66767',
  BackgroundColor: '#FFF8F2',
  SecondaryBackground: '#FFEBD9',
}

export const Styles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        list-style: none;
      }

      body {
      background-color: ${Colors.BackgroundColor};
    }

    .container {
      max-width: 1024px;
    }


`
