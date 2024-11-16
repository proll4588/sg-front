import { FC } from 'react';
import { UiTableActions } from '../../../../shared/ui/table/ui-table-actions';
import { UiButtonAction } from '../../../../shared/ui/table/ui-button-action';

export interface StudentTestProcessTableActionsProps {
  studentTestProcessId: number;
  onFinish: (employeeTestProcessId: number) => void;
}
export const StudentTestProcessTableActions: FC<
  StudentTestProcessTableActionsProps
> = ({ studentTestProcessId, onFinish }) => {
  return (
    <UiTableActions>
      <UiButtonAction
        text='Завершить'
        onClick={() => onFinish(studentTestProcessId)}
      />
    </UiTableActions>
  );
};
