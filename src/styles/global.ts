import { createGlobalStyle } from 'styled-components';
import theme from './theme';

export default createGlobalStyle`
  * {
    border: 0;
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body, input, button {
    font-family: ${() => theme.fontFamily.normal};
    color: ${() => theme.colors.grey[900]};
    overflow-x: hidden;
  }
  button {
    cursor: pointer;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    color: ${() => theme.colors.purple[500]};
    &:hover {
      color: ${() => theme.colors.purple[900]};
    }
  }
`;