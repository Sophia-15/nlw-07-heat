import React from 'react';
import { MessageList } from '../../components/MessageList';
import { SendMessageForm } from '../../components/SendMessageForm';

import {
  Container,
} from './styles';

export function Room() {
  return (
    <Container>
      <MessageList />
      <SendMessageForm />
    </Container>
  );
}
