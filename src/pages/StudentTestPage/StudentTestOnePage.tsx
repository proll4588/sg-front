import { useMutation, useQuery } from '@apollo/client';
import { LoadingButton } from '@mui/lab';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  ToggleButtonGroup,
  ToggleButton,
  Grid,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ANSWER_STUDENT_TEST_ONE,
  GET_STUDENT_TEST_BY_ID,
  GET_STUDENT_TEST_QUESTIONS,
} from '../../apollo/fetchs/studentTest';
import { CustomBackdrop } from '../../shared/ui/custom-backdrop';
import { GET_AVAILABLE_STUDENT_TEST_PROCESSES } from '../../apollo/fetchs/studentTestProcess';
import { PAGES_URLS } from '../../shared/router/constants';

export const StudentTestOnePage = () => {
  const { studentTestId } = useParams();
  const navigate = useNavigate();

  const { data: testData, loading: isLoadingTest } = useQuery(
    GET_STUDENT_TEST_BY_ID,
    {
      variables: { studentTestId: Number(studentTestId) },
    }
  );

  const [sendAnswers, { loading: isLoadingSendAnswers }] = useMutation(
    ANSWER_STUDENT_TEST_ONE,
    {
      refetchQueries: [
        { query: GET_AVAILABLE_STUDENT_TEST_PROCESSES },
        {
          query: GET_STUDENT_TEST_BY_ID,
          variables: { studentTestId: Number(studentTestId) },
        },
      ],
    }
  );

  const { data, loading } = useQuery(GET_STUDENT_TEST_QUESTIONS, {
    variables: { studentTestId: +studentTestId! },
  });

  const questions = data?.getStudentTestQuestions;
  const test = testData?.getStudentTestById;

  const [answers, setAnswers] = useState<
    { questionId: number; answer: number }[]
  >([]);

  const handleSelectAnswer = (answer: number, questionId: number) => {
    setAnswers((prev) => {
      const existingAnswerIndex = prev.findIndex(
        (a) => a.questionId === questionId
      );

      if (existingAnswerIndex !== -1) {
        // Заменяем существующий ответ
        const newAnswers = [...prev];
        newAnswers[existingAnswerIndex] = { questionId, answer };
        return newAnswers;
      } else {
        // Добавляем новый ответ
        return [...prev, { questionId, answer }];
      }
    });
  };

  const handleSendAnswers = () => {
    sendAnswers({
      variables: {
        studentTestId: +studentTestId!,
        answers: answers.map((a) => ({
          answer: a.answer,
          questionId: a.questionId,
        })),
      },
    }).then((res) => {
      if (res.data && res.data.answerStudentTestOne) {
        navigate('/' + PAGES_URLS.availableStudentTestProcesses);
      }
    });
  };

  if (loading || isLoadingTest) return <CustomBackdrop isLoading />;
  if (!questions || !test) return <Typography>Тест не найден</Typography>;

  if (test.dateEnd) return <Typography>Тест закончен</Typography>;

  return (
    <Grid
      container
      flexDirection={'column'}
      gap={2}
    >
      <Typography
        fontSize={'24px'}
        fontWeight={'bold'}
      >
        {test.StudentTestVariant.title}
      </Typography>
      <Grid
        container
        flexDirection={'column'}
        gap={2}
      >
        {questions.map((q) => (
          <StudentTestQuestion
            question={q}
            key={q.id}
            onSelectAnswer={handleSelectAnswer}
            answers={answers.find((a) => a.questionId === q.id)?.answer}
          />
        ))}
      </Grid>
      <LoadingButton
        loading={isLoadingSendAnswers}
        disabled={answers.length !== questions.length}
        onClick={handleSendAnswers}
        variant='contained'
        size='large'
      >
        Отправить ответы
      </LoadingButton>
    </Grid>
  );
};

const ARRAY = new Array(7).fill(0);

interface StudentTestQuestion {
  position: number;
  title: string;
  id: number;
}

interface StudentTestQuestionProps {
  question: StudentTestQuestion;
  answers?: number;
  onSelectAnswer: (answer: number, questionId: number) => void;
}
export const StudentTestQuestion = ({
  question,
  answers,
  onSelectAnswer,
}: StudentTestQuestionProps) => {
  return (
    <Card elevation={3}>
      <CardContent>
        <Typography
          fontSize={'16px'}
          fontWeight={'bold'}
        >
          {question.position}. {question.title}
        </Typography>
      </CardContent>
      <CardActions>
        <ToggleButtonGroup
          value={answers}
          onChange={(_, value) => onSelectAnswer(value, question.id)}
          exclusive
        >
          {ARRAY.map((_, index) => (
            <ToggleButton
              color='primary'
              value={index + 1}
              sx={{ width: 40, height: 40 }}
            >
              {index + 1}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </CardActions>
    </Card>
  );
};
