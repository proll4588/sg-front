import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { APP_NAVIGATION_MAP } from './shared/router/constants';

export const App = () => {
  const navigate = useNavigate();

  return (
    <Grid>
      <Typography
        fontWeight={'bold'}
        fontSize={24}
        mb={2}
      >
        Модули
      </Typography>
      {APP_NAVIGATION_MAP.map((item) => (
        <Card>
          <CardActionArea onClick={() => navigate(item.url)}>
            <CardContent sx={{ display: 'flex', gap: 2 }}>
              {item.icon}
              <Typography>{item.title}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Grid>
  );
};
