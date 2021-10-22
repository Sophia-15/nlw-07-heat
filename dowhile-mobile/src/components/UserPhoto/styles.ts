import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const LinearGradientBorder = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [theme.colors.PINK, theme.colors.YELLOW],
  start: { x: 0, y: 0.8 },
  end: { x: 0.9, y: 1 },
}))`
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  border-width: 4px ;
  border-color: ${({ theme }) => theme.colors.BLACK_SECONDARY};
`;
