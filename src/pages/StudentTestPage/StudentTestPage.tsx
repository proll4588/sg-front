import { useParams } from 'react-router-dom';
import { StudentTestOnePage } from './StudentTestOnePage';
import { StudentTestThreePage } from './StudentTestThreePage';
import { StudentTestTwoPage } from './StudentTestTwoPage';
import { useQuery } from '@apollo/client';
import { GET_STUDENT_TEST_BY_ID } from '../../apollo/fetchs/studentTest';
import { CustomBackdrop } from '../../shared/ui/custom-backdrop';
import { Typography } from '@mui/material';

export const StudentTestPage = () => {
  const { studentTestId } = useParams();
  const { data, loading } = useQuery(GET_STUDENT_TEST_BY_ID, {
    variables: { studentTestId: Number(studentTestId) },
  });

  if (loading) return <CustomBackdrop isLoading={loading} />;

  if (!data?.getStudentTestById) return <Typography>Тест не найден</Typography>;

  if (data.getStudentTestById.StudentTestVariant.id === 1)
    return <StudentTestOnePage />;

  if (data.getStudentTestById.StudentTestVariant.id === 2)
    return <StudentTestTwoPage />;

  return <StudentTestThreePage />;
};
