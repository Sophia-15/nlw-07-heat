import React, { useContext } from 'react';

import { VscGithubInverted } from 'react-icons/vsc';
import { Container } from './styles';
import { AuthContext } from '../../contexts/AuthContext';

export function LoginBox() {
  const { signInUrl } = useContext(AuthContext);

  return (
    <Container>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href={signInUrl} className="signInWithGithub">
        <VscGithubInverted size={24} />
        Entrar com Github
      </a>
    </Container>
  );
}
