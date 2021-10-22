import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

import { Container, GithubButton } from './styles';

export function SignInBox() {
  const { signIn, isSigningIn } = useAuth();

  return (
    <Container>
      <GithubButton onPress={signIn} isLoading={isSigningIn} />
    </Container>
  );
}
