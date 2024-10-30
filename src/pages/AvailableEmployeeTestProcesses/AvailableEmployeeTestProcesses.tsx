import { useQuery } from '@apollo/client';
import { GET_AVAILABLE_EMPLOYEE_TEST_PROCESSES } from '../../apollo/fetchs/employeeTest';
import { CustomBackdrop } from '../../shared/ui/custom-backdrop';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Grid,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import { Check, Close, HourglassEmpty } from '@mui/icons-material';
import {
  useNavigateToStartEmployeeTestPage,
  useNavigateToEmployeeTestPage,
} from '../../shared/router/constants';

export const AvailableEmployeeTestProcesses = () => {
  const { data, loading } = useQuery(GET_AVAILABLE_EMPLOYEE_TEST_PROCESSES);

  const navigateToStartEmployeeTestPage = useNavigateToStartEmployeeTestPage();
  const navigateToEmployeeTestPage = useNavigateToEmployeeTestPage();

  if (loading) return <CustomBackdrop isLoading />;
  if (!data) return <Typography>Тесты не найдены</Typography>;

  const handleStartTest = (id: number) => {
    navigateToStartEmployeeTestPage(id);
  };

  const handleContinueTest = (id: number) => {
    navigateToEmployeeTestPage(id);
  };

  return (
    <Grid
      container
      gap={2}
    >
      {data?.getAvailableEmployeeTestProcesses.map((el) => {
        const hasTest = !!el.EmployeeTest && el.EmployeeTest.length > 0;

        const isInProcess = hasTest && el.EmployeeTest?.[0].endDate === null;
        const isComplete = hasTest && el.EmployeeTest?.[0].endDate !== null;

        const onStartTest =
          !el.EmployeeTest || el.EmployeeTest.length === 0
            ? () => handleStartTest(el.id)
            : undefined;

        const onContinueTest =
          !!el.EmployeeTest && !!el.EmployeeTest[0]
            ? () => handleContinueTest(el.EmployeeTest![0].id)
            : undefined;

        return (
          <TestProcessCard
            title={el.title}
            testVariant={el.EmployeeTestVariant.title}
            isInProcess={isInProcess}
            isComplete={isComplete}
            onStartTest={onStartTest}
            onContinueTest={onContinueTest}
          />
        );
      })}
    </Grid>
  );
};

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

const TestProcessCard: FC<TestProcessCardProps> = ({
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
        <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
