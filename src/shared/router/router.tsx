import { createBrowserRouter } from 'react-router-dom';
import { App } from '../../App';
import { UserControlPage } from '../../pages/UserControlPage/UserControlPage';
import { AppLayout } from '../layout/AppLayout';
import { PAGES_URLS } from './constants';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: PAGES_URLS.userControl,
        element: <UserControlPage />,
      },
    ],
  },
]);
