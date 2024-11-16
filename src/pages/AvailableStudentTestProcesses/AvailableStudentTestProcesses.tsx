import { useQuery } from '@apollo/client';
import { GET_AVAILABLE_STUDENT_TEST_PROCESSES } from '../../apollo/fetchs/studentTestProcess';
import {
  useNavigateToStartStudentTestPage,
  useNavigateToStudentTestPage,
} from '../../shared/router/constants';
import { Grid, Typography } from '@mui/material';
import { CustomBackdrop } from '../../shared/ui/custom-backdrop';
import { TestProcessCard } from '../../feature/TestProcessCard/TestProcessCard';

export const AvailableStudentTestProcesses = () => {
  const { data, loading } = useQuery(GET_AVAILABLE_STUDENT_TEST_PROCESSES);

  const navigateToStartStudentTestPage = useNavigateToStartStudentTestPage();
  const navigateToStudentTestPage = useNavigateToStudentTestPage();

  if (loading) return <CustomBackdrop isLoading />;
  if (!data) return <Typography>Тесты не найдены</Typography>;

  const handleStartTest = (id: number) => {
    navigateToStartStudentTestPage(id);
  };

  const handleContinueTest = (id: number) => {
    navigateToStudentTestPage(id);
  };

  return (
    <Grid
      container
      gap={2}
    >
      {data?.getAvailableStudentTestProcesses.map((el) => {
        const hasTest = !!el.StudentTest && el.StudentTest.length > 0;

        const isInProcess = hasTest && el.StudentTest?.[0]?.dateEnd === null;
        const isComplete = hasTest && el.StudentTest?.[0]?.dateEnd !== null;

        const onStartTest =
          !el.StudentTest || el.StudentTest.length === 0
            ? () => handleStartTest(el.id)
            : undefined;

        const onContinueTest =
          !!el.StudentTest && !!el.StudentTest[0]
            ? () => handleContinueTest(el.StudentTest![0]!.id)
            : undefined;

        return (
          <TestProcessCard
            title={el.title}
            testVariant={el.StudentTestVariant.title}
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
