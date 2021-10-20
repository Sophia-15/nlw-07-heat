import React, { useEffect, useState } from 'react';

import { io } from 'socket.io-client';
import styles from './styles.module.scss';

import logo from '../../assets/logo.svg';
import { api } from '../../services/api';

interface UserProps {
  avatar_url: string
  name?: string
}

interface MessageProps {
  id: string
  text: string
  user: UserProps
}

const messageQueue: MessageProps[] = [];

const socket = io('http://localhost:3333');

socket.on('new_message', (newMessage: MessageProps) => {
  console.log(newMessage);
  messageQueue.push(newMessage);
});

export function MessageList() {
  const [lastThreeMessages, setLastThreeMessages] = useState<MessageProps[]>([]);

  useEffect(() => {
    setInterval(() => {
      if (messageQueue.length > 0) {
        setLastThreeMessages((oldState) => [
          messageQueue[0],
          oldState[0],
          oldState[1],
        ].filter(Boolean));

        messageQueue.shift();
      }
    }, 3000);
  }, []);

  useEffect(() => {
    async function getLastThreeMessages() {
      const { data } = await api.get<MessageProps[]>('/messages/last3');
      setLastThreeMessages(data.result);
    }

    getLastThreeMessages();
  }, []);

  return (
    <div className={styles.messageListWrapper}>
      <img src={logo} alt="Logo DoWhile 2021" />

      <ul className={styles.messageList}>
        {lastThreeMessages.length > 0 && lastThreeMessages.map((message) => (
          <li className={styles.message} key={message.id}>
            <p className={styles.messageContent}>
              {message.text}
            </p>

            <div className={styles.messageUser}>
              <div className={styles.userImage}>
                <img src={message.user.avatar_url} alt={message.user.name} />
              </div>
              <span>{message.user.name}</span>
            </div>
          </li>
        ))}

      </ul>
    </div>
  );
}
