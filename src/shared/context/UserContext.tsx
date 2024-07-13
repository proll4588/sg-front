import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import { tokenController } from '../token';
import { useLazyQuery } from '@apollo/client';
import { LOGIN } from '../../apollo/fetchs';
import client from '../../apollo/client';
import { getLink } from '../../apollo/link';

interface UserContextType {
  isAuth: boolean;
  login: (login: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  error?: string;
}

const USER_CONTEXT_DEFAULT_VALUE: UserContextType = {
  isAuth: false,
  login: async () => {},
  logout: () => {},
  isLoading: false,
  error: undefined,
};

export const UserContext = createContext<UserContextType>(
  USER_CONTEXT_DEFAULT_VALUE
);

export const useUser = () => useContext(UserContext);

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const [loginUser, { data, loading, error }] = useLazyQuery(LOGIN);
  const [isAuth, setIsAuth] = useState(!!tokenController.getToken());

  const login = async (login: string, password: string) => {
    await loginUser({
      variables: {
        login,
        password,
      },
    });
  };

  const logout = () => {
    tokenController.clearToken();
    setIsAuth(false);
  };

  useEffect(() => {
    if (data) {
      const t = data.login.token;

      if (!t) return;

      tokenController.saveToken(t);
      client.setLink(getLink());
      setIsAuth(true);
    }
  }, [data]);

  return (
    <UserContext.Provider
      value={{
        isAuth,
        login,
        logout,
        isLoading: loading,
        error: error?.message,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
