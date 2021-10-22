import React from 'react';

import {
  Container, Logout, LogoutButton, LougoutContainer,
} from './styles';

import Logo from '../../assets/logo.svg';
import { UserPhoto } from '../UserPhoto';
import { useAuth } from '../../contexts/AuthContext';

export function Header() {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <Logo />

      <LougoutContainer>
        {user && (
        <LogoutButton onPress={signOut}>
          <Logout>Sair</Logout>
        </LogoutButton>
        )}
        <UserPhoto imageUri={user?.avatar_url} />
      </LougoutContainer>

    </Container>
  );
}
