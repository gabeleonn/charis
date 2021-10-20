import styled from 'styled-components';
import theme from '@/styles/theme';

export const ParsingWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & p {
    align-items: center;
    display: flex;
    gap: 5px;
  }
`;

export const ParsingText = styled.span`
  color: ${theme.colors.yellow.regular};
  display: block;
  font-family: ${theme.fontFamily.text};
  font-size: ${theme.sizes.xs};
`;
