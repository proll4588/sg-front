import { useMutation, useQuery } from '@apollo/client';
import {
  GET_AVAILABLE_EMPLOYEE_TEST_PROCESSES,
  GET_EMPLOYEE_TEST_BY_ID,
  GET_EMPLOYEE_TEST_QUESTIONS,
  SEND_EMPLOYEE_TEST_ANSWERS,
  START_EMPLOYEE_TEST,
} from '../../apollo/fetchs/employeeTest';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { CustomBackdrop } from '../../shared/ui/custom-backdrop';
import {
  PAGES_URLS,
  useNavigateToEmployeeTestPage,
} from '../../shared/router/constants';

// Это значит что теста нет и можно его создать
export const StartEmployeeTestPage = () => {
  const { processId } = useParams();
  const navigate = useNavigateToEmployeeTestPage();
  const [createEmployeeTest, { loading }] = useMutation(START_EMPLOYEE_TEST, {
    refetchQueries: [{ query: GET_AVAILABLE_EMPLOYEE_TEST_PROCESSES }],
  });

  const handleStartTest = () => {
    createEmployeeTest({ variables: { testProcessId: +processId! } }).then(
      (res) => {
        if (res.data && res.data.startEmployeeTest)
          navigate(res.data.startEmployeeTest.id);
      }
    );
  };

  return (
    <Grid>
      <Typography>Начало теста</Typography>

      <LoadingButton
        onClick={handleStartTest}
        loading={loading}
      >
        Начать тест
      </LoadingButton>
    </Grid>
  );
};

export const EmployeeTest = () => {
  const { testId } = useParams();
  const navigate = useNavigate();

  const [sendAnswers, { loading: isLoadingSendAnswers }] = useMutation(
    SEND_EMPLOYEE_TEST_ANSWERS,
    {
      refetchQueries: [{ query: GET_AVAILABLE_EMPLOYEE_TEST_PROCESSES }],
    }
  );
  const { data, loading } = useQuery(GET_EMPLOYEE_TEST_BY_ID, {
    variables: { testId: +testId! },
  });
  const { data: questionsData, loading: isLoadingQuestions } = useQuery(
    GET_EMPLOYEE_TEST_QUESTIONS,
    { variables: { testId: +testId! } }
  );

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
        testId: +testId!,
        answers: answers.map((a) => ({
          ans: a.answer,
          questionId: a.questionId,
        })),
      },
    }).then((res) => {
      if (res.data && res.data.answerEmployeeTest) {
        navigate('/' + PAGES_URLS.availableEmployeeTestProcesses);
      }
    });
  };

  if (loading || isLoadingQuestions) return <CustomBackdrop isLoading />;
  if (
    !data ||
    !data.getEmployeeTestById ||
    !questionsData ||
    !questionsData.getEmployeeTestQuestions
  )
    return <Typography>Тест не найден</Typography>;

  const test = data.getEmployeeTestById;
  const questions = questionsData.getEmployeeTestQuestions;

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
        {test.EmployeeTestVariant.title}
      </Typography>
      <Grid
        container
        flexDirection={'column'}
        gap={2}
      >
        {questions.map((q) => (
          <EmployeeTestQuestion
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
      >
        Отправить ответы
      </LoadingButton>
    </Grid>
  );
};

interface EmployeeTestQuestion {
  position: number;
  title: string;
  id: number;
}

interface EmployeeTestQuestionProps {
  question: EmployeeTestQuestion;
  answers?: number;
  onSelectAnswer: (answer: number, questionId: number) => void;
}
export const EmployeeTestQuestion = ({
  question,
  answers,
  onSelectAnswer,
}: EmployeeTestQuestionProps) => {
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
          <ToggleButton
            color='primary'
            value={1}
            sx={{ width: 40, height: 40 }}
          >
            1
          </ToggleButton>
          <ToggleButton
            color='primary'
            value={2}
            sx={{ width: 40, height: 40 }}
          >
            2
          </ToggleButton>
          <ToggleButton
            color='primary'
            value={3}
            sx={{ width: 40, height: 40 }}
          >
            3
          </ToggleButton>
        </ToggleButtonGroup>
      </CardActions>
    </Card>
  );
};
