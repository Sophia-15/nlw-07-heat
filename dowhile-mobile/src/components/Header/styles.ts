import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const LougoutContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Logout = styled.Text`
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  color: ${({ theme }) => theme.colors.WHITE};
  margin-right: 20px;
`;

export const LogoutButton = styled.TouchableOpacity``;
