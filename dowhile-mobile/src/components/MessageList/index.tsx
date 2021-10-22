import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { api } from '../../services/api';
import { Message } from '../Message';

import { Container } from './styles';

interface UserProps {
  name: string
  avatar_url: string
}

interface MessageProps {
  id: string
  text: string
  user: UserProps
}

let messageQueue: MessageProps[] = [];

const socket = io(String(api.defaults.baseURL));
socket.on('new_message', (newMessage) => {
  messageQueue.push(newMessage);
  console.log(newMessage);
});

export function MessageList() {
  const [lastThreeMessages, setLastThreeMessages] = useState<MessageProps[]>([]);

  useEffect(() => {
    async function getLastThreeMessages() {
      const { data } = await api.get<MessageProps[]>('/messages/last3');
      setLastThreeMessages(data.result);
    }

    getLastThreeMessages();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (messageQueue.length > 0) {
        setLastThreeMessages((oldState) => [
          messageQueue[0],
          oldState[0],
          oldState[1],
        ].filter(Boolean));

        messageQueue.shift();
      }
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Container>
      {lastThreeMessages.map((message) => (
        <Message key={message.id} data={message} />
      ))}
    </Container>
  );
}
