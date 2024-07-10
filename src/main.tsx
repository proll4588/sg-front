import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import client from './apollo/client.ts';
import { UserProvider, useUser } from './shared/context/UserContext.tsx';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { theme } from './widget/theme.ts';
import { AuthPage } from './assets/AuthPage/AuthPage.tsx';
import { router } from './shared/router/router.tsx';

const AuthLayout = () => {
  const { isAuth } = useUser();

  if (isAuth) return <RouterProvider router={router} />;
  else return <AuthPage />;
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <UserProvider>
        <ThemeProvider theme={theme}>
          <AuthLayout />
        </ThemeProvider>
      </UserProvider>
    </ApolloProvider>
  </React.StrictMode>
);
