import { Group, Quiz } from '@mui/icons-material';
import { ReactNode } from 'react';

export const PAGES_URLS = {
  userControl: 'user-control',
  test1: 'test-1',
  test2: 'test-2',
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
  {
    title: 'Тестирование (Самоорганизация)',
    access: [2],
    icon: <Quiz />,
    url: PAGES_URLS.test1,
  },
  {
    title: 'Тестирование (Коммуникация)',
    access: [2],
    icon: <Quiz />,
    url: PAGES_URLS.test2,
  },
];
