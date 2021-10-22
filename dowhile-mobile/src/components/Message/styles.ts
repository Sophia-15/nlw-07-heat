import styled from 'styled-components/native';
import { MotiView } from 'moti';

export const Container = styled(MotiView).attrs({
  from: { opacity: 0, translateY: -50 },
  animate: { opacity: 1, translateY: 0 },
  transitino: { type: 'timing', duration: 700 },
})`
  width: 100%;
  margin-bottom: 36px;
`;

export const MessageText = styled.Text`
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  color: ${({ theme }) => theme.colors.WHITE};
  line-height: 20px;
  margin-bottom: 12px;
`;

export const UserInfoContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const UserName = styled.Text`
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  color: ${({ theme }) => theme.colors.WHITE};
  margin-left: 16px;
`;
