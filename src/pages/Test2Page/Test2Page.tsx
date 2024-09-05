import {
  Button,
  ButtonGroup,
  Grid,
  LinearProgress,
  Typography,
} from '@mui/material';
import { FC, useEffect, useMemo, useState } from 'react';
import { useTest2 } from './context/Test2PageContext';
import { LoadingButton } from '@mui/lab';

const useTestTwoNavigation = (questionsSize: number, isSelected: boolean) => {
  const MAX = questionsSize;

  const [currentQ, setCurrentQ] = useState(0);

  const canNext = currentQ < MAX && isSelected;
  const canBack = currentQ > 1;

  const next = () => {
    if (canNext) setCurrentQ(currentQ + 1);
  };

  const back = () => {
    if (canBack) setCurrentQ(currentQ - 1);
  };

  const onStart = () => {
    setCurrentQ(1);
  };

  return { next, back, onStart, canBack, canNext, currentQ, setCurrentQ };
};

export const Test2Page = () => {
  const {
    isLoadingQuestions,
    questions,
    isStartingTest,
    startTestTwo,
    isLoadingTestTwo,
    testTwo,
    answerQuestion,
    isAnswering,
    completeTest,
    isCompleting,
  } = useTest2();

  const [isChangedAns, setIsChangedAns] = useState(false);
  const markChange = () => setIsChangedAns(true);
  const unMarkChange = () => setIsChangedAns(false);

  const [selectedAns, setSelectedAns] = useState<null | boolean>(null);
  const { back, canBack, canNext, next, onStart, currentQ, setCurrentQ } =
    useTestTwoNavigation(questions.length, selectedAns !== null);

  const startTest = async () => {
    await startTestTwo();
    onStart();
  };

  const currentQuestion = useMemo(() => {
    return questions[currentQ - 1];
  }, [currentQ, questions]);

  const nextHandler = async () => {
    if (selectedAns !== null && currentQuestion) {
      if (isChangedAns) await answerQuestion(currentQuestion.id, selectedAns);

      next();
    }
  };

  useEffect(() => {
    const ans = testTwo?.TestTwoAnswer.find(
      (el) => el.TestTwoQuestions.id === currentQuestion?.id
    );
    if (ans) setSelectedAns(ans.answer || null);
    else setSelectedAns(null);

    unMarkChange();
  }, [currentQ, testTwo]);

  const isLastQuestion = currentQ === questions.length;

  const onContinueHandler = () => {
    if (testTwo) {
      const lastQ = [...testTwo.TestTwoAnswer].sort(
        (a, b) => b.TestTwoQuestions.position - a.TestTwoQuestions.position
      );

      if (lastQ.length === 0) setCurrentQ(1);
      else if (lastQ) setCurrentQ(lastQ[0].TestTwoQuestions.position + 1);
    }
  };

  const completeHandler = async () => {
    if (selectedAns !== null) {
      await answerQuestion(currentQuestion.id, selectedAns);
      await completeTest();
      setCurrentQ(0);
    }
  };

  if (isLoadingTestTwo) return <Typography>Loading...</Typography>;

  if (!currentQ)
    return (
      <StartTestTwoPage
        isLoading={isStartingTest}
        onStart={startTest}
        onContinue={onContinueHandler}
        test={testTwo}
      />
    );

  if (isLoadingQuestions) return <Typography>Loading...</Typography>;
  if (questions.length === 0) return <Typography>Упс</Typography>;

  return (
    <Grid
      container
      flexDirection={'column'}
      gap={2}
    >
      <Typography fontWeight={'bold'}>Вопрос {currentQ}</Typography>

      <Typography>{currentQuestion.text}</Typography>

      <Grid>
        <ButtonGroup>
          <Button
            variant={selectedAns === true ? 'contained' : 'outlined'}
            onClick={() => {
              setSelectedAns(true);
              markChange();
            }}
          >
            Да
          </Button>
          <Button
            variant={selectedAns === false ? 'contained' : 'outlined'}
            onClick={() => {
              setSelectedAns(false);
              markChange();
            }}
          >
            Нет
          </Button>
        </ButtonGroup>
      </Grid>

      <Grid
        container
        gap={2}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'stretch'}
      >
        <Button
          onClick={back}
          variant='outlined'
          disabled={!canBack}
        >
          Назад
        </Button>

        <LinearProgress
          variant='determinate'
          value={((currentQ - 1) / questions.length) * 100}
          sx={{ flex: 1 }}
        />

        {isLastQuestion ? (
          <LoadingButton
            loading={isCompleting || isAnswering}
            onClick={completeHandler}
            disabled={selectedAns === null}
            variant='contained'
          >
            Завершить
          </LoadingButton>
        ) : (
          <LoadingButton
            loading={isAnswering}
            onClick={nextHandler}
            disabled={!canNext}
            variant='contained'
          >
            Далее
          </LoadingButton>
        )}
      </Grid>
    </Grid>
  );
};

export interface StartTestTwoPageProps {
  test:
    | {
        startDate: string;
        id: number;
        endDate?: string | null;
        complete: boolean;
        User: {
          id: number;
          login: string;
          Role: {
            id: number;
            title: string;
          };
        };
        TestTwoAnswer: Array<{
          answer?: boolean | null;
          id: number;
          TestTwoQuestions: {
            id: number;
            position: number;
            text: string;
          };
        }>;
      }
    | null
    | undefined;
  onStart?: () => void;
  onContinue?: () => void;
  isLoading?: boolean;
}
export const StartTestTwoPage: FC<StartTestTwoPageProps> = ({
  onStart,
  onContinue,
  isLoading = false,
  test,
}) => {
  if (!test)
    return (
      <Grid>
        <Typography>Чтобы начать нажмите на кнопку</Typography>
        <LoadingButton
          loading={isLoading}
          onClick={onStart}
          variant='contained'
        >
          Начать
        </LoadingButton>
      </Grid>
    );
  else if (!test.complete)
    return (
      <Grid>
        <Typography>Чтобы продолжить нажмите на кнопку</Typography>
        <LoadingButton
          loading={isLoading}
          onClick={onContinue}
          variant='contained'
        >
          Продолжить
        </LoadingButton>
      </Grid>
    );
  else
    return (
      <Grid>
        <Typography>Тест завершён</Typography>
      </Grid>
    );
};
