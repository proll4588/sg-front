import {
  Button,
  ButtonGroup,
  Grid,
  LinearProgress,
  Typography,
} from '@mui/material';
import { useMemo, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_TEST_ONE_QUESTIONS } from '../../apollo/fetchs';

const ansArray = new Array(7).fill(1);

export const Test1Page = () => {
  const { data, loading } = useQuery(GET_TEST_ONE_QUESTIONS, {});

  const questions = useMemo(() => {
    if (!data || !data.getTestOneQuestions) return [];

    return [...data.getTestOneQuestions].sort(
      (a, b) => a.position - b.position
    );
  }, [data]);

  const MAX = questions.length;

  const [currentQ, setCurrentQ] = useState(1);
  const [selectedAns, setSelectedAns] = useState<null | number>(null);

  const canNext = currentQ < MAX && selectedAns !== null;
  const canBack = currentQ > 1;

  const next = () => {
    if (canNext) setCurrentQ((prev) => prev + 1);
  };

  const back = () => {
    if (canBack) setCurrentQ((prev) => prev - 1);
  };

  if (loading) return <Typography>Loading...</Typography>;

  if (questions.length === 0) return <Typography>Упс</Typography>;

  return (
    <Grid
      container
      flexDirection={'column'}
      gap={2}
    >
      <Typography fontWeight={'bold'}>Вопрос {currentQ}</Typography>

      <Typography>{questions[currentQ - 1].text}</Typography>

      <Grid>
        <ButtonGroup>
          {ansArray.map((_, i) => (
            <Button
              size='small'
              onClick={() => setSelectedAns(i + 1)}
              variant={i + 1 === selectedAns ? 'contained' : 'outlined'}
            >
              {i + 1}
            </Button>
          ))}
        </ButtonGroup>

        <Grid
          container
          justifyContent={'space-between'}
          width={280}
        >
          <Typography fontSize={12}>Не согласен</Typography>
          <Typography fontSize={12}>Согласен</Typography>
        </Grid>
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
          value={(currentQ / MAX) * 100}
          sx={{ flex: 1 }}
        />

        <Button
          onClick={next}
          disabled={!canNext}
        >
          Далее
        </Button>
      </Grid>
    </Grid>
  );
};
