import styled from 'styled-components';
import theme from '@/styles/theme';

export const InputWrapper = styled.input`
  background: ${theme.colors.white.dark};
  border: 1px solid ${theme.colors.gray.lighter};
  border-radius: 200px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
  color: ${theme.colors.black.regular};
  height: 48px;
  padding: 8px 24px;
  transition: all 0.2s;

  &:focus {
    border: 1px solid ${theme.colors.purple.regular};
  }

  &:disabled {
    background: ${theme.colors.gray.lighter};
    border: 1px solid ${theme.colors.gray.lighter};
    color: ${theme.colors.gray.darker};
    cursor: not-allowed;
  }
`;
