import React, { FormEvent, useContext, useState } from 'react';
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc';
import { AuthContext } from '../../contexts/AuthContext';
import { api } from '../../services/api';
import {
  Container, SignOutButton, SendMessageFormHeader, SendMessageFormDoWhile,
} from './styles';

export function SendMessageForm() {
  const { user, signOut } = useContext(AuthContext);
  const [message, setMessage] = useState('');

  async function sendMessage(e: FormEvent) {
    e.preventDefault();

    if (!message.trim()) {
      // adicionar toast
      return;
    }

    await api.post('message', { message });

    setMessage('');
  }

  return (
    <Container>
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
    </Container>
  );
}
