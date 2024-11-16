import { BaseComponentProps } from '../../../shared/ui/table/types/base-table-props';

export interface Student {
  passbookNumber: number;
  name: string;
  Group: {
    id: number;
    title: string;
  };
}

export type StudentTableProps = BaseComponentProps<Student>;
