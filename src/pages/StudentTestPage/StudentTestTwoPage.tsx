import { useMutation, useQuery } from '@apollo/client';
import { LoadingButton } from '@mui/lab';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ANSWER_STUDENT_TEST_TWO,
  GET_STUDENT_TEST_QUESTIONS,
} from '../../apollo/fetchs/studentTest';
import { GET_AVAILABLE_STUDENT_TEST_PROCESSES } from '../../apollo/fetchs/studentTestProcess';
import { PAGES_URLS } from '../../shared/router/constants';
import { CustomBackdrop } from '../../shared/ui/custom-backdrop';

export const StudentTestTwoPage = () => {
  const { studentTestId } = useParams();
  const navigate = useNavigate();

  const [sendAnswers, { loading: isLoadingSendAnswers }] = useMutation(
    ANSWER_STUDENT_TEST_TWO,
    {
      refetchQueries: [{ query: GET_AVAILABLE_STUDENT_TEST_PROCESSES }],
    }
  );

  const { data, loading } = useQuery(GET_STUDENT_TEST_QUESTIONS, {
    variables: { studentTestId: +studentTestId! },
  });

  const questions = data?.getStudentTestQuestions;

  const [answers, setAnswers] = useState<
    { questionId: number; answer: boolean }[]
  >([]);

  const handleSelectAnswer = (answer: boolean, questionId: number) => {
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
      if (res.data && res.data.answerStudentTestTwo) {
        navigate('/' + PAGES_URLS.availableStudentTestProcesses);
      }
    });
  };

  if (loading) return <CustomBackdrop isLoading />;
  if (!questions) return <Typography>Тест не найден</Typography>;

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
        Без названия
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
      >
        Отправить ответы
      </LoadingButton>
    </Grid>
  );
};

interface StudentTestQuestion {
  position: number;
  title: string;
  id: number;
}

interface StudentTestQuestionProps {
  question: StudentTestQuestion;
  answers?: boolean;
  onSelectAnswer: (answer: boolean, questionId: number) => void;
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
          <ToggleButton
            color='primary'
            value={true}
            sx={{ width: 40, height: 40 }}
          >
            Да
          </ToggleButton>
          <ToggleButton
            color='primary'
            value={false}
            sx={{ width: 40, height: 40 }}
          >
            Нет
          </ToggleButton>
        </ToggleButtonGroup>
      </CardActions>
    </Card>
  );
};
