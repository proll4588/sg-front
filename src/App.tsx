import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const App = () => {
  const navigate = useNavigate();
  return (
    <Card>
      <CardActionArea onClick={() => navigate('/user-control')}>
        <CardContent>
          <Typography>Управление пользователями</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
