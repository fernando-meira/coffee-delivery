import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
    }

    :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${theme.colors.purple[500]};
    }

    html {
      font-size: 62.5%;
    }

    body,
    input,
    textarea,
    button {
      font-weight: 400;
      font-family: 'Roboto', sans-serif;
      font-size: ${theme.font.base.weight.regular};
    }

    body {
      color: ${theme.colors.base.text};
      background-color: ${theme.colors.base.background};
    }

    button {
      cursor: pointer;
    }
  `}
`;
