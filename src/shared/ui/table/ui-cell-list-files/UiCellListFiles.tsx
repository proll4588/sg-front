import { ExpandMore, FileDownload } from '@mui/icons-material';
import { IconButton, List, ListItem, ListItemText } from '@mui/material';
import { FC, useCallback, useState } from 'react';

import { DOCUMENT_TITLE_COUNT } from './constant';
import { UiCellListFilesProps } from './type';
import { theme } from '../../../../widget/theme';

export const UiCellListFiles: FC<UiCellListFilesProps> = ({
  documents,
  onDownload,
}) => {
  const countFiles = documents ? documents.length - 1 : 0;

  const textCountFiles = `Показать еще ${countFiles} - ${
    DOCUMENT_TITLE_COUNT[countFiles] || 'документов'
  }`;

  const [showFiles, setShowFiles] = useState(1);
  const onChangeShowFiles = useCallback(
    () =>
      documents &&
      setShowFiles((state) => (state !== 1 ? 1 : documents.length)),
    []
  );

  return (
    <List sx={{ maxWidth: 360, padding: 1, minWidth: 200 }}>
      {documents?.slice(0, showFiles).map(({ id, title }) => (
        <ListItem
          key={title}
          disableGutters
          sx={{
            ':hover': {
              color: theme.palette.primary.main,
            },
          }}
          onClick={(e) => {
            e.stopPropagation();
            onDownload({ id, title });
          }}
          secondaryAction={
            <IconButton
              size='small'
              sx={{
                ':hover': {
                  color: theme.palette.primary.main,
                },
              }}
            >
              <FileDownload />
            </IconButton>
          }
        >
          <ListItemText
            primary={`${title}`}
            sx={{ wordBreak: 'break-all' }}
          />
        </ListItem>
      ))}
      {countFiles > 0 && (
        <ListItem
          disableGutters
          color='red'
          onClick={onChangeShowFiles}
          secondaryAction={
            <IconButton
              size='small'
              sx={{ transform: showFiles > 1 ? 'rotate(180deg)' : 'none' }}
            >
              <ExpandMore />
            </IconButton>
          }
        >
          <ListItemText
            primary={showFiles > 1 ? 'Скрыть' : `${textCountFiles}`}
          />
        </ListItem>
      )}
    </List>
  );
};
