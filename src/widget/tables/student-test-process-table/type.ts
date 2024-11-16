import { BaseComponentProps } from '../../../shared/ui/table/types/base-table-props';

export interface StudentTestProcess {
  id: number;
  title: string;
  dateStart: string;
  dateEnd?: string | null;
  StudentTestVariant: {
    id: number;
    title: string;
  };
}

export type StudentTestProcessTableProps =
  BaseComponentProps<StudentTestProcess>;
