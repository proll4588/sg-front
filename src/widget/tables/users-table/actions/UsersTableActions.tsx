import { FC } from 'react';
import { UiTableActions } from '../../../../shared/ui/table/ui-table-actions';
import { UiButtonAction } from '../../../../shared/ui/table/ui-button-action';
import { theme } from '../../../theme';
import { Delete } from '@mui/icons-material';
import { User } from '../type';

export interface UsersTableActionsProps {
  user: User;
  onDelete: (userId: number) => void;
}
export const UsersTableActions: FC<UsersTableActionsProps> = ({
  onDelete,
  user,
}) => {
  return (
    <UiTableActions>
      <UiButtonAction
        text='Удалить'
        color={theme.palette.error.main}
        icon={<Delete />}
        onClick={() => onDelete(user.id)}
      />
    </UiTableActions>
  );
};
