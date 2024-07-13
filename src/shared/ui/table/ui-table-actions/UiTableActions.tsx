import { FC } from 'react';

import { UiButtonAction } from '../ui-button-action/UiButtonAction';
import { UiTableActionsProps } from './type';
import { getChildrenCount } from '../../container-actions-form/getChildrenCount';

export const UiTableActions: FC<UiTableActionsProps> = ({ children }) => {
  if (!getChildrenCount(children))
    return (
      <UiButtonAction
        text='Нет доступных действий'
        disable
      />
    );

  return <>{children}</>;
};
