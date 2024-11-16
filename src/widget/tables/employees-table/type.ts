import { BaseComponentProps } from '../../../shared/ui/table/types/base-table-props';

export type Employee = {
  name: string;
  id: number;
  email: string;
  EmployeePosition: {
    id: number;
    title: string;
  };
};

export type EmployeesTableProps = BaseComponentProps<Employee>;
