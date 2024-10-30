import { useMutation, useQuery } from '@apollo/client';
import {
  CREATE_EMPLOYEE_TEST_PROCESS,
  FINISH_EMPLOYEE_TEST_PROCESS,
  GET_EMPLOYEE_TEST_PROCESSES,
} from '../../apollo/fetchs/employeeTest';
import { EMPLOYEE_TEST_FIELDS_MAP } from '../../widget/tables/employee-test-table/constants';
import { EmployeeTestTable } from '../../widget/tables/employee-test-table/EmployeeTestTable';
import { Button, Grid } from '@mui/material';
import { UiSearchBar } from '../../shared/ui/ui-search-bar';
import { Assignment } from '@mui/icons-material';
import { useViewModal } from '../../shared/hooks/useViewModal';
import {
  CreateEmployeeTestDialog,
  EmployeeTestFormFields,
} from '../../widget/forms/employee-test-form/EmployeeTestForm';
import { EmployeeTestTableActions } from '../../widget/tables/employee-test-table/actions/EmployeeTestTableActions';

export const EmployeeTestListPage = () => {
  const { open, close, isOpen } = useViewModal();
  const { data, loading } = useQuery(GET_EMPLOYEE_TEST_PROCESSES);
  const [createEmployeeTest, { loading: createEmployeeTestLoading }] =
    useMutation(CREATE_EMPLOYEE_TEST_PROCESS, {
      refetchQueries: [{ query: GET_EMPLOYEE_TEST_PROCESSES }],
    });

  const [finishEmployeeTest, { loading: finishEmployeeTestLoading }] =
    useMutation(FINISH_EMPLOYEE_TEST_PROCESS, {
      refetchQueries: [{ query: GET_EMPLOYEE_TEST_PROCESSES }],
    });

  const handleFinishEmployeeTest = (employeeTestProcessId: number) => {
    finishEmployeeTest({
      variables: { processId: employeeTestProcessId },
    });
  };

  const handleCreateEmployeeTest = (form: EmployeeTestFormFields) => {
    createEmployeeTest({
      variables: {
        employeeIds: form.employeeIds,
        title: form.title,
        testVariantId: form.variantId,
      },
    }).then(close);
  };

  return (
    <>
      <Grid
        container
        flexDirection={'column'}
        gap={2}
      >
        <UiSearchBar
          changeValue={() => {}}
          textValue=''
        >
          <Button
            startIcon={<Assignment />}
            onClick={open}
          >
            Начать тестирование
          </Button>
        </UiSearchBar>

        <EmployeeTestTable
          data={data?.getEmployeeTestProcesses || []}
          fields={EMPLOYEE_TEST_FIELDS_MAP}
          onChangeFields={() => {}}
          visibleFields={EMPLOYEE_TEST_FIELDS_MAP}
          renderActions={(employeeTestProcess) => (
            <EmployeeTestTableActions
              employeeTestProcessId={employeeTestProcess.id}
              onFinish={handleFinishEmployeeTest}
            />
          )}
          isLoading={loading}
          isUpdate={loading || finishEmployeeTestLoading}
        />
      </Grid>
      <CreateEmployeeTestDialog
        isOpen={isOpen}
        onClose={close}
        isLoading={createEmployeeTestLoading}
        onSubmit={handleCreateEmployeeTest}
      />
    </>
  );
};
