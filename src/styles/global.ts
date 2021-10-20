import { createGlobalStyle } from 'styled-components';
import theme from './theme';

export default createGlobalStyle`
  * {
    border: 0;
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    line-height: 1.5;
    font-family: ${theme.fontFamily.text}, ${theme.fontFamily.regular};
    color: ${theme.colors.black.regular};
    letter-spacing: 1.05px;
  }

  body, input, button {
    font-family: ${theme.fontFamily.text}, ${theme.fontFamily.regular};
    color: ${theme.colors.black.regular};
  }

  button {
    cursor: pointer;
    height: 48px;
    border: 1px solid ${theme.colors.black.regular};
    border-radius: 200px;
    background: ${theme.colors.black.regular};
    color: ${theme.colors.gray.lighter};
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
    transition: all .2s;
    font-size: ${theme.sizes.xs};

    &:hover {
      filter: brightness(1.5);
    }

    &:disabled {
      background: ${theme.colors.gray.lighter};
      border: 1px solid ${theme.colors.gray.lighter};
      color: ${theme.colors.gray.darker};
      cursor: not-allowed;

      &:hover {
        filter: brightness(1);
      }
    }

    &:active {
      transform: translateY(1px);
      box-shadow: 0px 0.25px 1px rgba(0, 0, 0, 0.16);
    }
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: ${theme.colors.purple.regular};

    &:hover {
      filter: brightness(0.85);
    }
  }

  input {
    padding: 8px 24px;
    height: 48px;
    border: 1px solid ${theme.colors.gray.lighter};
    border-radius: 200px;
    background: ${theme.colors.white.dark};
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
    transition: all .2s;
    color: ${theme.colors.black.regular};

    &:focus {
      border: 1px solid ${theme.colors.purple.regular};
    }

    &:disabled {
      background: ${theme.colors.gray.lighter};
      border: 1px solid ${theme.colors.gray.lighter};
      color: ${theme.colors.gray.darker};
      cursor: not-allowed;
    }
  }

  textarea {
    padding: 16px 24px;
    border: 1px solid ${theme.colors.gray.lighter};
    border-radius: 20px;
    background: ${theme.colors.white.dark};
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
    transition: all .2s;
    color: ${theme.colors.black.regular};
    resize: none;

    &:focus {
      border: 1px solid ${theme.colors.purple.regular};
    }

    &:disabled {
      background: ${theme.colors.gray.lighter};
      border: 1px solid ${theme.colors.gray.lighter};
      color: ${theme.colors.gray.darker};
      cursor: not-allowed;
    }
  }
`;
