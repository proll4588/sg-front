import { Link, useParams } from 'react-router-dom';
import { useNavigateToStudentTestPage } from '../../shared/router/constants';
import { useMutation, useQuery } from '@apollo/client';
import { START_STUDENT_TEST } from '../../apollo/fetchs/studentTest';
import { GET_AVAILABLE_STUDENT_TEST_PROCESSES } from '../../apollo/fetchs/studentTestProcess';
import { LoadingButton } from '@mui/lab';
import { Grid, Typography } from '@mui/material';
import { CustomBackdrop } from '../../shared/ui/custom-backdrop';

export const StartStudentTestPage = () => {
  const { processId } = useParams();

  const { data: processesData, loading: isLoadingProcesses } = useQuery(
    GET_AVAILABLE_STUDENT_TEST_PROCESSES
  );

  const process = processesData?.getAvailableStudentTestProcesses.find(
    (el) => el.id === +processId!
  );

  const [createStudentTest, { loading: isLoadingCreateStudentTest }] =
    useMutation(START_STUDENT_TEST, {
      refetchQueries: [{ query: GET_AVAILABLE_STUDENT_TEST_PROCESSES }],
    });

  const navigate = useNavigateToStudentTestPage();

  const handleStartTest = () => {
    createStudentTest({
      variables: { studentTestProcessId: +processId! },
    }).then((res) => {
      if (res.data && res.data.startStudentTest)
        navigate(res.data.startStudentTest);
    });
  };

  if (isLoadingProcesses) return <CustomBackdrop isLoading />;
  if (!process) return <Typography>Процесс не найден</Typography>;

  return (
    <Grid
      container
      gap={2}
      flexDirection={'column'}
    >
      <Typography
        textAlign={'center'}
        fontSize={30}
        mb={4}
      >
        Тестирование: {process.StudentTestVariant.title}
      </Typography>

      {process.StudentTestVariant.id === 1 && <TestOneText />}
      {process.StudentTestVariant.id === 2 && <TestTwoText />}
      {process.StudentTestVariant.id === 3 && <TestThreeText />}

      <LoadingButton
        variant='contained'
        color='primary'
        size='large'
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleStartTest}
        loading={isLoadingCreateStudentTest}
      >
        Начать тест
      </LoadingButton>
    </Grid>
  );
};

const TestOneText = () => {
  return (
    <>
      <Typography
        fontSize={24}
        fontWeight={'bold'}
      >
        Инструкция
      </Typography>
      <Typography fontSize={20}>
        Предлагается ряд утверждений, касающихся различных сторон жизни и
        способов обращения со временем. Необходимо выбрать на шкале ту цифру,
        которая в наибольшей мере характеризует респондента и отражает точку
        зрения респондента:
      </Typography>

      <Typography fontSize={20}>
        1 — полное несогласие <br /> 7 — полное согласие с данным утверждением
        <br /> 4 — середина шкалы, остальные цифры — промежуточные значения.
      </Typography>
    </>
  );
};

const TestTwoText = () => {
  return (
    <>
      <Typography
        fontSize={24}
        fontWeight={'bold'}
      >
        Инструкция
      </Typography>

      <Typography fontSize={20}>
        Предлагаемый Вам тест содержит 40 вопросов. Прочитайте их и ответьте на
        все вопросы. Если Ваш ответ на вопрос положителен, то есть Вы в принципе
        согласны с тем, о чем спрашивается в вопросе, то отвечаете «да». Если же
        Ваш ответ отрицателен, то есть Вы в принципе не согласны, то отвечаете
        «нет».
      </Typography>

      <Typography fontSize={20}>
        Вопросы носят общий характер и не могут содержать всех необходимых
        подробностей. Поэтому представьте себе типичные ситуации и не
        задумывайтесь над деталями.
      </Typography>

      <Typography fontSize={20}>
        Не следует тратить много времени на обдумывание, отвечайте быстро.
      </Typography>

      <Typography fontSize={20}>
        Возможно, на некоторые вопросы Вам будет трудно ответить. Тогда
        постарайтесь дать тот ответ, который Вы считаете предпочтительным.
      </Typography>

      <Typography fontSize={20}>
        При ответе на любой из этих вопросов обращайте внимание на его первые
        слова и согласовывайте свой ответ с ними.
      </Typography>

      <Typography fontSize={20}>
        Отвечая на вопросы, не стремитесь произвести заведомо приятное
        впечатление. <b>Важна искренность при ответе.</b>
      </Typography>
    </>
  );
};

const TestThreeText = () => {
  return (
    <>
      <Typography
        fontSize={24}
        fontWeight={'bold'}
      >
        Инструкция
      </Typography>

      <Typography fontSize={20}>
        Необходимо пройти тестирование на данном ресурсе.{' '}
        <Link
          to='https://critical-thinking.ru/test/'
          target='_blank'
          rel='noopener noreferrer'
        >
          https://critical-thinking.ru/test/
        </Link>
      </Typography>

      <Typography fontSize={20}>
        После прохождения скачайте результат тестирование в pdf формате и
        прикрепите его на следующем этапе.
      </Typography>
    </>
  );
};
