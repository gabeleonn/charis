import styled from 'styled-components';
import theme from '@/styles/theme';

export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LabelText = styled.label<{ hasHelperText: boolean }>`
  color: ${theme.colors.black.regular};
  font-family: ${theme.fontFamily.text};
  font-size: ${theme.sizes.sm};
  font-weight: 600;
  ${({ hasHelperText }) => !hasHelperText && 'margin-bottom: 16px;'}
`;

export const LabelHelperText = styled.p`
  color: ${theme.colors.purple.regular};
  font-family: ${theme.fontFamily.text};
  font-size: ${theme.sizes.xs};
  margin-bottom: 16px;
`;
