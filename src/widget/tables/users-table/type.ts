import { BaseComponentProps } from '../../../shared/ui/table/types/base-table-props';

export interface User {
  id: number;
  login: string;
  Role: Role;
}

export interface Role {
  id: number;
  title: string;
}

export type UsersTableProps = BaseComponentProps<User>;
