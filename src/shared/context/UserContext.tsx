import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { tokenController } from '../token';
import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_USER, LOGIN } from '../../apollo/fetchs';
import client from '../../apollo/client';
import { getLink } from '../../apollo/link';
import { User } from '../../widget/tables/users-table/type';
import { APP_NAVIGATION_MAP, AppNavigationMapType } from '../router/constants';

interface UserContextType {
  isAuth: boolean;
  login: (login: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  error?: string;
  user: User | null;
  modules: AppNavigationMapType[];
}

const USER_CONTEXT_DEFAULT_VALUE: UserContextType = {
  isAuth: false,
  login: async () => {},
  logout: () => {},
  isLoading: false,
  error: undefined,
  user: null,
  modules: [],
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
  const {
    data: userRes,
    refetch,
    loading: isLoadingUser,
  } = useQuery(GET_USER, { skip: !isAuth });

  useEffect(() => {
    if (isAuth) refetch();
  }, [isAuth]);

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

  const modules = useMemo(() => {
    if (!userRes || !userRes.getUser) return [];
    else
      return APP_NAVIGATION_MAP.filter((el) =>
        el.access.some((el2) => el2 === userRes.getUser!.Role.id)
      );
  }, [userRes?.getUser]);

  return (
    <UserContext.Provider
      value={{
        isAuth,
        login,
        logout,
        isLoading: loading || isLoadingUser,
        error: error?.message,
        user: userRes?.getUser || null,
        modules,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
