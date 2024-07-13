import { Close, Search } from '@mui/icons-material';
import { Box, TextField } from '@mui/material';
import { FC } from 'react';
import { theme } from '../../widget/theme';

export interface UiInputSearchProps {
  onCompliteInput?: (value: string) => void;
  textValue: string;
  changeValue: (value: string) => void;
  onClear?: () => void;
}
export const UiInputSearch: FC<UiInputSearchProps> = ({
  changeValue,
  onCompliteInput,
  textValue,
  onClear,
}) => {
  return (
    <Box display='flex'>
      <SearchIconComponent
        onClick={() => {
          onCompliteInput && onCompliteInput(textValue);
        }}
      />

      <TextField
        value={textValue}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.code === 'Enter' || e.key === 'Enter') {
            onCompliteInput && onCompliteInput(textValue);
          }
        }}
        onChange={(e) => {
          changeValue(e.target.value);
        }}
        sx={{
          width: '100%',

          border: 'none',
          '.MuiInputBase-sizeSmall': {
            border: 'none',
            borderRadius: '0px 10px 10px 0px',
            height: '41.5px',
            mt: '0.5px',
          },
          '.MuiOutlinedInput-notchedOutline': {
            border: 'none',
            borderTop: 'solid 2px',
            borderRight: 'solid 2px',
            borderBottom: 'solid 2px',
            borderColor: theme.palette.primary.main,
          },
          '.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main,
            // borderWidth: 4,
          },
          '.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
            {
              borderColor: theme.palette.primary.main,
              // borderWidth: 4,
            },
        }}
        InputProps={{
          endAdornment: (
            <Close
              sx={{
                cursor: 'pointer',
              }}
              onClick={() => {
                if (textValue.length !== 0) onClear && onClear();
              }}
            />
          ),
        }}
        size='small'
      />
    </Box>
  );
};

interface SearchIconComponentProps {
  onClick: () => void;
}

const SearchIconComponent: FC<SearchIconComponentProps> = ({ onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        background: theme.palette.primary.main,
        borderRadius: ' 10px 0px 0px 10px',
        width: '46px',
        height: '42px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
      }}
    >
      <Search
        sx={{
          fontSize: 34,
          color: 'white',
        }}
      />
    </Box>
  );
};
