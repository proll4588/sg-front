import {
  Checklist,
  FileUpload,
  Group,
  Info,
  Person,
  Quiz,
} from '@mui/icons-material';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

export const PAGES_URLS = {
  userControl: 'user-control',
  test1: 'test-1',
  test2: 'test-2',
  results: 'results',
  test3: 'test-3',
  employeeList: 'employee-list',
  employeeTestProcesses: 'employee-test-processes',
  availableEmployeeTestProcesses: 'available-employee-test-processes',
  startEmployeeTest: 'employee-test/start/:processId',
  employeeTest: 'employee-test/:testId',
  employeeTestResults: 'employee-test-results/:processId',
};

export const useNavigateToEmployeeTestResultsPage = () => {
  const navigate = useNavigate();

  return (processId: number) => {
    navigate(`/employee-test-results/${processId}`);
  };
};

export const useNavigateToStartEmployeeTestPage = () => {
  const navigate = useNavigate();

  return (processId: number) => {
    navigate(`/employee-test/start/${processId}`);
  };
};

export const useNavigateToEmployeeTestPage = () => {
  const navigate = useNavigate();

  return (testId: number) => {
    navigate(`/employee-test/${testId}`);
  };
};

export interface AppNavigationMapType {
  title: string;
  icon: ReactNode;
  url: string;
  access: Role[];
}

export enum Role {
  Admin = 1,
  Student = 2,
  Teacher = 3,
  Employee = 5,
  Organizer = 6,
}

export const APP_NAVIGATION_MAP: AppNavigationMapType[] = [
  {
    title: 'Процессы тестирования',
    icon: <Checklist />,
    url: PAGES_URLS.availableEmployeeTestProcesses,
    access: [Role.Employee],
  },
  {
    title: 'Процессы тестирования',
    icon: <Checklist />,
    url: PAGES_URLS.employeeTestProcesses,
    access: [Role.Admin, Role.Organizer],
  },
  {
    title: 'Сотрудники',
    icon: <Person />,
    access: [Role.Organizer, Role.Admin],
    url: PAGES_URLS.employeeList,
  },
  {
    title: 'Пользователи',
    icon: <Group />,
    url: PAGES_URLS.userControl,
    access: [Role.Admin],
  },
  {
    title: 'Результаты (тест 1)',
    icon: <Info />,
    url: PAGES_URLS.results,
    access: [Role.Admin],
  },
  {
    title: 'Тестирование (Самоорганизация)',
    access: [Role.Student],
    icon: <Quiz />,
    url: PAGES_URLS.test1,
  },
  {
    title: 'Тестирование (Коммуникация)',
    access: [Role.Student],
    icon: <Quiz />,
    url: PAGES_URLS.test2,
  },
  {
    title: 'Загрузка результатов 3 теста',
    access: [Role.Teacher],
    icon: <FileUpload />,
    url: PAGES_URLS.test3,
  },
];
