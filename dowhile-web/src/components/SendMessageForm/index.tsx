import React, { FormEvent, useContext, useState } from 'react';
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc';
import { useParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthContext } from '../../contexts/AuthContext';
import { api } from '../../services/api';
import {
  Container, SignOutButton, SendMessageFormHeader, SendMessageFormDoWhile,
} from './styles';

interface MessageParams {
  room_id: string
}

export function SendMessageForm() {
  const { user, signOut } = useContext(AuthContext);
  const [message, setMessage] = useState('');
  const { room_id } = useParams<MessageParams>();

  async function sendMessage(e: FormEvent) {
    e.preventDefault();

    if (!message.trim()) {
      toast.error('Este campo não pode ficar em branco');
      return;
    }

    await api.post(`message/${room_id}`, { message });
    toast.success('Mensagem enviada com sucesso!');
    setMessage('');
  }

  const variants = {
    visible: () => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.4,
      },
    }),
    hidden: { opacity: 0, x: 100 },
  };

  return (
    <Container
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      <SignOutButton type="button" onClick={signOut}>
        <VscSignOut />
      </SignOutButton>

      <SendMessageFormHeader>
        <div className="userImage">
          <img src={user?.avatar_url} alt={user?.name} />
        </div>

        <strong className="userName">{user?.name}</strong>

        <span className="userGithub">
          <VscGithubInverted size={16} />
          {user?.login}
        </span>
      </SendMessageFormHeader>

      <SendMessageFormDoWhile onSubmit={sendMessage}>
        <label htmlFor="message">Mensagem</label>
        <textarea
          name="message"
          id="message"
          placeholder="Qual a sua expectativa para o evento?"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <button type="submit">Enviar mensagem</button>
      </SendMessageFormDoWhile>
      <ToastContainer />
    </Container>
  );
}
