import styled from 'styled-components';
import theme from '@/styles/theme';

export const CheckboxWrapper = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 10px;
  width: fit-content;

  & input {
    display: none;
  }
`;

export const CheckboxIconWrapper = styled.div<{ isChecked: boolean }>`
  align-items: center;
  background: ${({ isChecked }) =>
    isChecked ? theme.colors.purple.regular : theme.colors.white.dark};
  border: 1px solid
    ${({ isChecked }) =>
      isChecked ? theme.colors.purple.regular : theme.colors.gray.lighter};
  border-radius: 8px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
  display: flex;
  height: 24px;
  justify-content: center;
  width: 24px;

  & svg {
    display: ${({ isChecked }) => (isChecked ? 'block' : 'none')};
    & path {
      fill: ${theme.colors.white.regular};
    }
  }
`;

export const CheckboxLabel = styled.label`
  align-items: center;
  display: flex;
  height: 24px;
`;
