import React from 'react';
import { useHistory } from 'react-router-dom';
import { LoginBox } from '../../components/LoginBox';
import { MessageList } from '../../components/MessageList';
import { useAuth } from '../../hooks/useAuth';

import {
  Container,
} from './styles';

interface MessageListSwitchProps {
  toggleTheme: () => void
}

export function Login({ toggleTheme }: MessageListSwitchProps) {
  const { user } = useAuth();
  const history = useHistory();

  if (user) {
    history.push('/choose');
  }

  return (
    <Container>
      <MessageList toggleTheme={toggleTheme} />
      <LoginBox />
    </Container>
  );
}
