import React, { useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import Switch from 'react-switch';

import { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';
import { Container, MessageListContainer } from './styles';

import { api } from '../../services/api';

import notfound from '../../assets/notfound.svg';

interface MessageListSwitchProps {
  toggleTheme: () => void
}

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

export function MessageList({ toggleTheme }: MessageListSwitchProps) {
  const [lastThreeMessages, setLastThreeMessages] = useState<MessageProps[]>([]);
  const { title, logo, colors } = useContext(ThemeContext);

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
      setLastThreeMessages(data);
    }

    getLastThreeMessages();
  }, []);

  const variants = {
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: i / 4,
      },
    }),
    hidden: { opacity: 0, x: -50 },
  };

  return (
    <Container>
      <header>
        <img src={logo} alt="Logo DoWhile 2021" />
        <Switch
          onChange={toggleTheme}
          checked={title === 'light'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          onColor={colors.pink}
          offColor={colors.yellow}
          offHandleColor={colors.yellow}
          onHandleColor={colors.pink}
        />
      </header>

      <MessageListContainer>
        {lastThreeMessages.length <= 0 ? (
          <>
            <h1>Sem mensagens para exibir</h1>
            <img src={notfound} alt="Sem mensagens para exibir" className="notFoundImage" />
          </>
        ) : lastThreeMessages.map((message, i) => (
          <motion.li
            initial="hidden"
            custom={i}
            animate="visible"
            variants={variants}
            className="message"
            key={message.id}
          >
            <p className="messageContent">
              {message.text}
            </p>

            <div className="messageUser">
              <div className="userImage">
                <img src={message.user.avatar_url} alt={message.user.name} />
              </div>
              <span>{message.user.name}</span>
            </div>
          </motion.li>
        ))}

      </MessageListContainer>
    </Container>
  );
}
