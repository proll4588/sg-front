import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
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
  const [loginUser, { loading, error }] = useLazyQuery(LOGIN, {
    fetchPolicy: 'network-only',
  });
  const [isAuth, setIsAuth] = useState(!!tokenController.getToken());

  const login = async (login: string, password: string) => {
    const res = await loginUser({
      variables: {
        login,
        password,
      },
    });

    const { data } = res;

    if (data && data.login && data.login.token) {
      const t = data.login.token;

      tokenController.saveToken(t);
      client.setLink(getLink());
      setIsAuth(true);
    }
  };

  const logout = () => {
    tokenController.clearToken();
    setIsAuth(false);
  };

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
