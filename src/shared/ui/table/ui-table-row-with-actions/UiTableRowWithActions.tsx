import { TableCell, TableRow } from '@mui/material';
import { FC, useState } from 'react';

import { STYLE_STIKY_CELL } from '../row-actions/constants';
import { UiTableRowWithActionsProps } from './type';
import { CollapsbleActionTab } from '../../collapsble-action-tab';

export const UiTableRowWithActions: FC<UiTableRowWithActionsProps> = ({
  renderActions,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <TableRow {...props}>
      {props.children}

      <TableCell
        align='right'
        ref={setAnchorEl}
        sx={STYLE_STIKY_CELL}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <CollapsbleActionTab
          anchorEl={anchorEl}
          id={Math.random()}
          onClickAway={() => isOpen && setIsOpen(false)}
          onClickContainer={() => isOpen && setIsOpen(false)}
          onClickIconButton={(e) => {
            e.stopPropagation();
            if (isOpen) {
              setIsOpen(false);
            } else {
              setIsOpen(true);
            }
          }}
          isOpen={isOpen}
          renderActions={renderActions}
        />
      </TableCell>
    </TableRow>
  );
};
