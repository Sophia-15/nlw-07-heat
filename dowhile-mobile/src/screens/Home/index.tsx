import React from 'react';
import { Header } from '../../components/Header';
import { MessageList } from '../../components/MessageList';
import { SendMessageForm } from '../../components/SendMessageForm';
import { SignInBox } from '../../components/SignInBox';
import { useAuth } from '../../contexts/AuthContext';

import {
  Container, AvoidKeyboard,
} from './styles';

export function Home() {
  const { user } = useAuth();

  return (
    <AvoidKeyboard>
      <Container>
        <Header />
        <MessageList />

        {user ? <SendMessageForm /> : <SignInBox />}
      </Container>
    </AvoidKeyboard>
  );
}
