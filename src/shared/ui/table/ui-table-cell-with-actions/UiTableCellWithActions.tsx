import { Menu, MenuItem, TableCell } from '@mui/material';
import { FC, useRef } from 'react';

import { UiTableCellWithActionsProps } from './type';
import { useViewModal } from '../../../hooks/useViewModal';

export const UiTableCellWithActions: FC<UiTableCellWithActionsProps> = ({
  actions,
  ...props
}) => {
  const { close, isOpen, open } = useViewModal();

  const anchor = useRef(null);

  return (
    <>
      <TableCell
        {...props}
        ref={anchor}
        onContextMenu={(e) => {
          e.preventDefault();
          open();
        }}
      >
        {props.children}
      </TableCell>
      <Menu
        open={isOpen}
        anchorEl={anchor.current}
        anchorOrigin={{ horizontal: 'center', vertical: 'center' }}
        onClose={close}
      >
        {actions.map((action, i) => (
          <MenuItem
            onClick={() => {
              close();
              action.onClick();
            }}
            disabled={action.disabled}
            // disabled
            key={i}
          >
            {action.icon} {action.text}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
