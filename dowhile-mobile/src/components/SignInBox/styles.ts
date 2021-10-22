import styled from 'styled-components/native';
import { Button } from '../Button';

export const Container = styled.View`
  height: 48px;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  padding-bottom: 52px;
`;

export const GithubButton = styled(Button).attrs(({ theme }) => ({
  color: theme.colors.BLACK_PRIMARY,
  backgroundColor: theme.colors.YELLOW,
  title: 'ENTRAR COM GITHUB',
  icon: 'github',
}))``;
