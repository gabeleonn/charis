import styled from 'styled-components';
import theme from '@/styles/theme';

export const HebrewWord = styled.span`
  font-family: ${theme.fontFamily.hebrew};
  font-size: ${theme.sizes.md};
  font-weight: 900;
`;

export const GreekWord = styled.span`
  font-family: ${theme.fontFamily.greek};
  font-size: ${theme.sizes.md};
  font-weight: 900;
`;
