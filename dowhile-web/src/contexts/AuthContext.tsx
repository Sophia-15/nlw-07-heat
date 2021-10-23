import React, {
  createContext, ReactNode, useEffect, useState,
} from 'react';
import { api } from '../services/api';

interface AuthProviderProps {
  children: ReactNode
}

interface UserProps {
  id: string
  avatar_url: string
  name?: string
  login: string
}

interface AuthUserProps {
  token: string
  user: UserProps
}

interface AuthContextData {
  user: UserProps | null
  signInUrl: string
  signOut: () => void
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [githubUser, setGithubUser] = useState<UserProps | null>(null);

  const signInUrl = 'https://github.com/login/oauth/authorize?scope=user&client_id=6eea9c58d85ef4eb940d';

  async function signInToGithub(githubCode: string) {
    const { data } = await api.post<AuthUserProps>('/authenticate', {
      code: githubCode,
    });

    const { token, user } = data;

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    localStorage.setItem('@dowhile2021:token', token);

    setGithubUser(user);
  }

  function signOut() {
    setGithubUser(null);
    localStorage.removeItem('@dowhile2021:token');
  }

  useEffect(() => {
    async function verifyUserToken() {
      const token = localStorage.getItem('@dowhile2021:token');

      if (token) {
        api.defaults.headers.common.authorization = `Bearer ${token}`;

        const { data } = await api.get<UserProps>('profile');

        setGithubUser(data);
      }
    }
    verifyUserToken();
  }, []);

  useEffect(() => {
    const url = window.location.href;
    const urlHasGithubCode = url.includes('?code=');

    if (urlHasGithubCode) {
      const [urlWithoutGithubCode, githubCode] = url.split('?code=');

      window.history.pushState({}, '', urlWithoutGithubCode);

      signInToGithub(githubCode);
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      signInUrl, user: githubUser, signOut,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}
