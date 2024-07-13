import { Group } from '@mui/icons-material';
import { ReactNode } from 'react';

export const PAGES_URLS = {
  userControl: 'user-control',
};

export interface AppNavigationMapType {
  title: string;
  icon: ReactNode;
  url: string;
  access: number[];
}

export const APP_NAVIGATION_MAP: AppNavigationMapType[] = [
  {
    title: 'Пользователи',
    icon: <Group />,
    url: PAGES_URLS.userControl,
    access: [1],
  },
];
