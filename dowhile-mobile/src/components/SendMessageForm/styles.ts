import styled from 'styled-components/native';
import { Button } from '../Button';

export const Container = styled.View`
  width: 100%;
  height: 184px;
  background-color: ${({ theme }) => theme.colors.BLACK_TERTIARY};
  padding-bottom: 26px;
  padding-top: 16px;
  padding: 0 24px; 
`;

export const SendMessageTextInput = styled.TextInput.attrs(({ theme }) => ({
  style: {
    textAlignVertical: 'top',
  },
  keyboardAppearance: 'dark',
  placeholder: 'Qual sua expectativa para o evento?',
  placeholderTextColor: theme.colors.GRAY_PRIMARY,
  multiline: true,
  maxLength: 140,

}))`
  width: 100%;
  height: 88px;
  color: ${({ theme }) => theme.colors.WHITE}
`;

export const SendMessageButton = styled(Button).attrs(({ theme }) => ({
  title: 'ENVIAR MENSAGEM',
  color: theme.colors.WHITE_2,
  backgroundColor: theme.colors.PINK,
}))``;
