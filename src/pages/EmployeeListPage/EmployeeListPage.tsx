import { useMutation, useQuery } from '@apollo/client';
import { CREATE_EMPLOYEE, GET_EMPLOYEES } from '../../apollo/fetchs/employee';
import { EmployeesTable } from '../../widget/tables/employees-table/EmployeesTable';
import { EMPLOYEE_FIELDS_MAP } from '../../widget/tables/employees-table/constants';
import {
  CreateEmployeeDialog,
  EmployeeFormFields,
} from '../../widget/forms/EmployeeForm/EmployeeForm';
import { useViewModal } from '../../shared/hooks/useViewModal';
import { UiSearchBar } from '../../shared/ui/ui-search-bar';
import { Button, Grid } from '@mui/material';
import { Add } from '@mui/icons-material';

export const EmployeeListPage = () => {
  const { close, isOpen, open } = useViewModal();
  const [createEmployee, { loading: creatingEmployee }] = useMutation(
    CREATE_EMPLOYEE,
    { refetchQueries: [{ query: GET_EMPLOYEES }] }
  );
  const { data, loading } = useQuery(GET_EMPLOYEES);

  //   TODO: Показывать ошибки при создании
  const handleCreateEmployee = (form: EmployeeFormFields) => {
    createEmployee({
      variables: {
        email: form.email,
        login: form.login,
        name: form.name,
        password: form.password,
        positionId: form.positionId,
      },
    }).then(close);
  };

  return (
    <>
      <CreateEmployeeDialog
        isLoading={creatingEmployee}
        isOpen={isOpen}
        onClose={close}
        onSubmit={handleCreateEmployee}
      />
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
            startIcon={<Add />}
            onClick={open}
          >
            Создать сотрудника
          </Button>
        </UiSearchBar>
        <EmployeesTable
          data={data?.getEmployees || []}
          fields={EMPLOYEE_FIELDS_MAP}
          onChangeFields={() => {}}
          visibleFields={EMPLOYEE_FIELDS_MAP}
          renderActions={() => null}
          isLoading={loading}
          isUpdate={loading}
        />
      </Grid>
    </>
  );
};
