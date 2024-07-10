import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Grid,
} from '@mui/material';
import { useUser } from '../context/UserContext';
import { Menu } from '@mui/icons-material';
import { FC, PropsWithChildren } from 'react';

export const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  const { logout } = useUser();

  return (
    <Grid>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
            >
              <Menu />
            </IconButton>
            <Typography
              variant='h6'
              component='div'
              sx={{ flexGrow: 1 }}
            >
              СибГУ
            </Typography>
            <Button
              variant='contained'
              color='error'
              onClick={logout}
            >
              Выйти
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Grid p={2}>{children}</Grid>
    </Grid>
  );
};
