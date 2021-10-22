import React, {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from 'react';
import * as AuthSessions from 'expo-auth-session';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../services/api';

const USER_STORAGE = '@dowhile2021:user';
const TOKEN_STORAGE = '@dowhile2021:token';

interface UserProps {
  id: string
  avatar_url: string
  name?: string
  login: string
}

interface AuthContextData {
  user: UserProps | null
  isSigningIn: boolean
  signIn: () => void
  signOut: () => void
}

interface AuthProviderProps {
  children: ReactNode
}

interface AuthSessionResponseProps {
  token: string
  user: UserProps
}

interface AuthorizationReponse {
  params: {
    code?: string
    error?: string
  }
  type?: string
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [isSigningIn, setIsSigningIn] = useState(true);
  const [githubUser, setGithubUser] = useState<UserProps | null>(null);

  const CLIENT_ID = '2bcd011ae886f6398327';
  const SCOPE = 'read:user';

  async function signIn() {
    try {
      setIsSigningIn(true);
      const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}`;
      const authSessionReponse = await AuthSessions.startAsync({ authUrl }) as AuthorizationReponse;

      if (authSessionReponse.type === 'success' && authSessionReponse.params.error !== 'access_denied') {
        const { data } = await api.post<AuthSessionResponseProps>('/authenticate', {
          code: authSessionReponse.params.code,
        });
        const { user, token } = data;

        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user));
        await AsyncStorage.setItem(TOKEN_STORAGE, token);

        setGithubUser(user);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSigningIn(false);
    }
  }

  async function signOut() {
    setGithubUser(null);
    await AsyncStorage.removeItem(USER_STORAGE);
    await AsyncStorage.removeItem(TOKEN_STORAGE);
  }

  useEffect(() => {
    async function setUserStorageData() {
      const userStorage = await AsyncStorage.getItem(USER_STORAGE);
      const tokenStorage = await AsyncStorage.getItem(TOKEN_STORAGE);

      if (userStorage && tokenStorage) {
        api.defaults.headers.common.Authorization = `Bearer ${userStorage}`;
        setGithubUser(JSON.parse(userStorage));
      }

      setIsSigningIn(false);
    }

    setUserStorageData();
  }, []);

  return (
    <AuthContext.Provider value={{
      signIn, signOut, user: githubUser, isSigningIn,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
