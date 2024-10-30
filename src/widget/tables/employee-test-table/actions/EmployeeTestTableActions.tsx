import { FC } from 'react';
import { UiTableActions } from '../../../../shared/ui/table/ui-table-actions';
import { UiButtonAction } from '../../../../shared/ui/table/ui-button-action';

export interface EmployeeTestTableActionsProps {
  employeeTestProcessId: number;
  onFinish: (employeeTestProcessId: number) => void;
}
export const EmployeeTestTableActions: FC<EmployeeTestTableActionsProps> = ({
  employeeTestProcessId,
  onFinish,
}) => {
  return (
    <UiTableActions>
      <UiButtonAction
        text='Завершить'
        onClick={() => onFinish(employeeTestProcessId)}
      />
    </UiTableActions>
  );
};
