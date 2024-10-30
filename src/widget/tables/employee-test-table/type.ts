import { BaseComponentProps } from '../../../shared/ui/table/types/base-table-props';

export type EmployeeTest = {
  id: number;
  title: string;
  startDate: string;
  endDate?: string | null;
  //  Тот кто начал
  User: {
    id: number;
    login: string;
    Role: {
      title: string;
      id: number;
    };
  };
  //   Участники
  EmplyeeProcessMembers: Array<{
    id: number;
    employeeTestProcessId: number;
    Emplouee: {
      name: string;
      id: number;
      email: string;
      User: {
        id: number;
        login: string;
        Role: {
          title: string;
          id: number;
        };
      };
      EmploeePosition: {
        title: string;
        id: number;
      };
    };
  }>;
  EmployeeTestVariant: {
    title: string;
    id: number;
  };
  EmployeeTest?: Array<{
    startDate: string;
    id: number;
    endDate?: string | null;
    Emplouee: {
      name: string;
      id: number;
      email: string;
    };
  }> | null;
};

export type EmployeeTestTableProps = BaseComponentProps<EmployeeTest>;
