import { useQuery } from '@apollo/client';
import { GET_AVAILABLE_EMPLOYEE_TEST_PROCESSES } from '../../apollo/fetchs/employeeTest';
import { CustomBackdrop } from '../../shared/ui/custom-backdrop';
import { Grid, Typography } from '@mui/material';
import {
  useNavigateToStartEmployeeTestPage,
  useNavigateToEmployeeTestPage,
} from '../../shared/router/constants';
import { TestProcessCard } from '../../feature/TestProcessCard/TestProcessCard';

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
