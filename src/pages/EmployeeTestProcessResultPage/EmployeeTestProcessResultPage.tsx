import { useParams } from 'react-router-dom';
import { GET_EMPLOYEE_TEST_PROCESSES_RESULT } from '../../apollo/fetchs/employeeTestProcess';
import { useQuery } from '@apollo/client';
import { CustomBackdrop } from '../../shared/ui/custom-backdrop';
import { Box, Card, Grid, Typography } from '@mui/material';
import { EmployeeTestProcessResult } from '../../__generated__/graphql';
import { FC } from 'react';

export const EmployeeTestProcessResultPage = () => {
  const { processId } = useParams();
  if (!processId) return <div>No process id</div>;

  const { data, loading } = useQuery(GET_EMPLOYEE_TEST_PROCESSES_RESULT, {
    variables: { processId: Number(processId) },
  });

  if (loading) return <CustomBackdrop isLoading />;
  if (!data) return <div>No data</div>;

  const results = [...data.getEmployeeTestProcessResults].reverse();

  const layer1 = [results[0]];
  const layer2 = [results[1], results[2], results[3]].reverse();
  const layer3 = [
    results[4],
    results[5],
    results[6],
    results[7],
    results[8],
  ].reverse();

  return (
    <Grid
      container
      flexDirection='column'
      alignItems='center'
      gap={2}
    >
      <Grid
        container
        flexDirection='row'
        justifyContent='center'
        gap={2}
      >
        {layer1.map((res) => (
          <ResultCard
            result={res}
            key={res.title}
          />
        ))}
      </Grid>

      <Grid
        container
        flexDirection='row'
        justifyContent='center'
        gap={2}
      >
        {layer2.map((res) => (
          <ResultCard
            result={res}
            key={res.title}
          />
        ))}
      </Grid>

      <Grid
        container
        justifyContent='center'
        flexDirection='row'
        gap={2}
      >
        {layer3.map((res) => (
          <ResultCard
            result={res}
            key={res.title}
          />
        ))}
      </Grid>
    </Grid>
  );
};

interface ResultCardProps {
  result: EmployeeTestProcessResult;
}
const ResultCard: FC<ResultCardProps> = ({ result }) => {
  return (
    <Card
      elevation={4}
      sx={{
        width: 200,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ width: '100%', padding: 2 }}>
        <Typography textAlign={'center'}>{result.title}</Typography>
      </Box>
      <Box
        sx={{
          backgroundColor:
            result.value < 1.8
              ? 'red'
              : result.value < 2.6
              ? 'orange'
              : 'green',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          fontWeight={'bold'}
          color={'white'}
        >
          {Math.round(result.value * 100) / 100}
        </Typography>
      </Box>
    </Card>
  );
};

/**
 * 3 - 100
 * 0 - 0
 * 1 - 33.33333333333333
 * 2 - 66.66666666666666
 *   - 40
 */
