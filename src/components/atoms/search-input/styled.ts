import styled from 'styled-components';
import theme from '@/styles/theme';

export const SearchWrapper = styled.div<{ isFocused: boolean }>`
  background: ${theme.colors.white.dark};
  border: 1px solid
    ${({ isFocused }) =>
      isFocused ? theme.colors.purple.regular : theme.colors.gray.lighter};
  border-radius: 200px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
  display: flex;
  height: 48px;
  justify-content: space-between;
  padding: 8px 24px;

  & svg {
    cursor: pointer;
    &:hover {
      & path {
        fill: ${theme.colors.purple.regular};
      }
    }

    & path {
      fill: ${theme.colors.gray.darker};
    }
  }

  & input {
    background: ${theme.colors.white.regular};
    border: 0;
    border-radius: 0;
    box-shadow: none;
    height: auto;
    padding: 0;
    width: 95%;

    &:focus {
      border: 0;
    }
  }
`;
