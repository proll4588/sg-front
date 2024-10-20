import { BaseComponentProps } from '../../../shared/ui/table/types/base-table-props';

export type Employee = {
  id: number;
  name: string;
  email: string;
  EmploeePosition: {
    id: number;
    title: string;
  };
  User: {
    id: number;
    login: string;
    Role: {
      id: number;
      title: string;
    };
  };
};

export type EmployeesTableProps = BaseComponentProps<Employee>;
