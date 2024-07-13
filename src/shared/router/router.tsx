import { createBrowserRouter } from 'react-router-dom';
import { App } from '../../App';
import { UserControlPage } from '../../pages/UserControlPage/UserControlPage';
import { AppLayout } from '../layout/AppLayout';

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
        path: 'user-control',
        element: <UserControlPage />,
      },
    ],
  },
]);
