import styled from 'styled-components/native';

import { AntDesign } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity`
  height: 48px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(AntDesign).attrs({
  size: 24,
})`
  margin-right: 21px;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.BOLD};
`;
