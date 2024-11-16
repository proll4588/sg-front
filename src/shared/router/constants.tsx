import { Checklist, FileUpload, Group, Info, Quiz } from '@mui/icons-material';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

export const PAGES_URLS = {
  userList: 'user-list',
  employeeList: 'employee-list',
  //
  testThree: 'test-three/:studentTestId',
  //
  studentList: 'student-list',
  studentTestProcessList: 'student-test-process-list',
  availableStudentTestProcesses: 'available-student-test-processes',
  startStudentTest: 'student-test/start/:processId',
  studentTest: 'student-test/:studentTestId',
  //
  results: 'results',
  employeeTestProcesses: 'employee-test-processes',
  availableEmployeeTestProcesses: 'available-employee-test-processes',
  startEmployeeTest: 'employee-test/start/:processId',
  employeeTest: 'employee-test/:testId',
  employeeTestResults: 'employee-test-results/:processId',
};

export const useNavigateToStartStudentTestPage = () => {
  const navigate = useNavigate();

  return (processId: number) => {
    navigate(`/student-test/start/${processId}`);
  };
};

export const useNavigateToStudentTestPage = () => {
  const navigate = useNavigate();

  return (studentTestId: number) => {
    navigate(`/student-test/${studentTestId}`);
  };
};

export const useNavigateToTestThreePage = () => {
  const navigate = useNavigate();

  return (studentTestId: number) => {
    navigate(`/test-three/${studentTestId}`);
  };
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
    title: 'Пользователи',
    icon: <Group />,
    url: PAGES_URLS.userList,
    access: [Role.Admin],
  },
  {
    title: 'Студенты',
    icon: <Group />,
    url: PAGES_URLS.studentList,
    access: [Role.Admin, Role.Organizer],
  },
  {
    title: 'Сотрудники',
    icon: <Group />,
    access: [Role.Organizer, Role.Admin],
    url: PAGES_URLS.employeeList,
  },
  {
    title: 'Процессы тестирования сотрудников',
    icon: <Checklist />,
    url: PAGES_URLS.availableEmployeeTestProcesses,
    access: [Role.Employee],
  },
  {
    title: 'Процессы тестирования студентов',
    icon: <Checklist />,
    url: PAGES_URLS.availableStudentTestProcesses,
    access: [Role.Student],
  },
  {
    title: 'Процессы тестирования студентов',
    icon: <Checklist />,
    url: PAGES_URLS.studentTestProcessList,
    access: [Role.Admin, Role.Organizer],
  },
  {
    title: 'Процессы тестирования сотрудников',
    icon: <Checklist />,
    url: PAGES_URLS.employeeTestProcesses,
    access: [Role.Admin, Role.Organizer],
  },
  // {
  //   title: 'Результаты (тест 1)',
  //   icon: <Info />,
  //   url: PAGES_URLS.results,
  //   access: [Role.Admin],
  // },
  // {
  //   title: 'Тестирование (Самоорганизация)',
  //   access: [Role.Student],
  //   icon: <Quiz />,
  //   url: PAGES_URLS.test1,
  // },
  // {
  //   title: 'Тестирование (Коммуникация)',
  //   access: [Role.Student],
  //   icon: <Quiz />,
  //   url: PAGES_URLS.test2,
  // },
  // {
  //   title: 'Загрузка результатов 3 теста',
  //   access: [Role.Teacher],
  //   icon: <FileUpload />,
  //   url: PAGES_URLS.test3,
  // },
];
