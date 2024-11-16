import { HourglassEmpty, Check, Close } from '@mui/icons-material';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Chip,
  CardActions,
  Button,
} from '@mui/material';
import { FC } from 'react';

interface TestProcessCardProps {
  title: string;
  testVariant: string;
  isInProcess: boolean;
  isComplete: boolean;
  onStartTest?: () => void;
  onContinueTest?: () => void;
}

const getChipLabel = (isInProcess: boolean, isComplete: boolean) => {
  if (isInProcess) return 'Тест в процессе';
  if (isComplete) return 'Тест пройден';
  return 'Тест не пройден';
};

const getChipColor = (isInProcess: boolean, isComplete: boolean) => {
  if (isInProcess) return 'warning';
  if (isComplete) return 'success';
  return 'error';
};

const getChipIcon = (isInProcess: boolean, isComplete: boolean) => {
  if (isInProcess) return <HourglassEmpty />;
  if (isComplete) return <Check />;
  return <Close />;
};

export const TestProcessCard: FC<TestProcessCardProps> = ({
  title,
  testVariant,
  isInProcess,
  isComplete,
  onStartTest,
  onContinueTest,
}) => {
  const handleClick = () => {
    if (isInProcess) onContinueTest?.();
    else onStartTest?.();
  };

  return (
    <Card>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Grid sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
          <Typography
            fontWeight={'bold'}
            fontSize={'20px'}
          >
            {title}
          </Typography>
          <Chip
            label={getChipLabel(isInProcess, isComplete)}
            icon={getChipIcon(isInProcess, isComplete)}
            color={getChipColor(isInProcess, isComplete)}
            variant='filled'
            size='small'
          />
        </Grid>

        <Typography>{testVariant}</Typography>
      </CardContent>
      <CardActions>
        {!isComplete && (
          <Button
            fullWidth
            onClick={handleClick}
          >
            {isInProcess ? 'Продолжить' : 'Пройти'}
          </Button>
        )}
      </CardActions>
    </Card>
  );
};
