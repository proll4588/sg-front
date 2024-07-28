import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { APP_NAVIGATION_MAP } from './shared/router/constants';
import { useUser } from './shared/context/UserContext';

export const App = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <Grid
      container
      flexDirection={'column'}
      gap={1}
    >
      <Typography
        fontWeight={'bold'}
        fontSize={24}
        mb={2}
      >
        Модули
      </Typography>
      {APP_NAVIGATION_MAP.filter((el) =>
        el.access.some((el2) => el2 === user?.Role.id)
      ).map((item) => (
        <Card key={item.title}>
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
