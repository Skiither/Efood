    import { createGlobalStyle } from 'styled-components'

    // Cores usadas nos seus componentes
    export const cores = {
    corPrincipal: '#E66767',
    corFundo: '#FFF8F2',
    corSecundaria: '#FFEBD9',
        bege: '#F5E6DA',
    rosa: '#E66767',
    branco: '#FFFFFF',
    }

    // Breakpoints, caso você use em styled-components
    export const breakPoints = {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1024px'
    }

    // Container padrão
    export const Container = {
    maxWidth: '1024px',
    }

    // Estilos globais
    export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        list-style: none;
    }

    body {
        background-color: ${cores.corFundo};
    }

    .container {
        max-width: ${Container.maxWidth};
    }
    `
