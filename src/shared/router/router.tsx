import { createBrowserRouter } from 'react-router-dom';
import { App } from '../../App';
import { UserControlPage } from '../../pages/UserControlPage/UserControlPage';
import { AppLayout } from '../layout/AppLayout';
import { PAGES_URLS } from './constants';
import { Test1Page } from '../../pages/Test1Page/Test1Page';
import { Test2Page } from '../../pages/Test2Page/Test2Page';
import { Test1PageProvider } from '../../pages/Test1Page/context/Test1PageContext';
import { Test2PageProvider } from '../../pages/Test2Page/context/Test2PageContext';
import { Test1Results } from '../../pages/Test1Results/Test1Results';
import { LoadTest3 } from '../../pages/LoadTest3/LoadTest3';
import { EmployeeListPage } from '../../pages/EmployeeListPage/EmployeeListPage';
import { EmployeeTestListPage } from '../../pages/EmployeeTestListPage/EmployeeTestListPage';
import { AvailableEmployeeTestProcesses } from '../../pages/AvailableEmployeeTestProcesses/AvailableEmployeeTestProcesses';
import {
  EmployeeTest,
  StartEmployeeTestPage,
} from '../../pages/EmployeeTest/EmployeeTest';
import { EmployeeTestProcessResultPage } from '../../pages/EmployeeTestProcessResultPage/EmployeeTestProcessResultPage';

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
      {
        path: PAGES_URLS.test1,
        element: (
          <Test1PageProvider>
            <Test1Page />
          </Test1PageProvider>
        ),
      },
      {
        path: PAGES_URLS.test2,
        element: (
          <Test2PageProvider>
            <Test2Page />
          </Test2PageProvider>
        ),
      },
      {
        path: PAGES_URLS.results,
        element: <Test1Results />,
      },
      {
        path: PAGES_URLS.test3,
        element: <LoadTest3 />,
      },
      {
        path: PAGES_URLS.employeeList,
        element: <EmployeeListPage />,
      },
      {
        path: PAGES_URLS.employeeTestProcesses,
        element: <EmployeeTestListPage />,
      },
      {
        path: PAGES_URLS.availableEmployeeTestProcesses,
        element: <AvailableEmployeeTestProcesses />,
      },
      {
        path: PAGES_URLS.employeeTest,
        element: <EmployeeTest />,
      },
      {
        path: PAGES_URLS.startEmployeeTest,
        element: <StartEmployeeTestPage />,
      },
      {
        path: PAGES_URLS.employeeTestResults,
        element: <EmployeeTestProcessResultPage />,
      },
    ],
  },
]);
