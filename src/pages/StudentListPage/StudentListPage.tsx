import { useMutation, useQuery } from '@apollo/client';
import { CREATE_STUDENT, GET_STUDENTS } from '../../apollo/fetchs/student';
import { Button, Grid } from '@mui/material';
import { UiSearchBar } from '../../shared/ui/ui-search-bar/UiSearchBar';
import { Add } from '@mui/icons-material';
import { StudentTable } from '../../widget/tables/student-table/StudentTable';
import { STUDENT_FIELDS_MAP } from '../../widget/tables/student-table/constants';
import { useViewModal } from '../../shared/hooks/useViewModal';
import {
  CreateStudentDialog,
  StudentFormFields,
} from '../../widget/forms/student-form/StudentForm';

export const StudentListPage = () => {
  const { close, isOpen, open } = useViewModal();
  const { data, loading } = useQuery(GET_STUDENTS);
  const [createStudent, { loading: creatingStudent }] = useMutation(
    CREATE_STUDENT,
    { refetchQueries: [{ query: GET_STUDENTS }] }
  );

  const handleCreateStudent = (form: StudentFormFields) => {
    createStudent({
      variables: {
        groupId: form.groupId,
        passbookNumber: form.passbookNumber,
        name: form.name,
        login: form.login,
        password: form.password,
      },
    }).then(close);
  };

  return (
    <>
      <CreateStudentDialog
        isLoading={creatingStudent}
        isOpen={isOpen}
        onClose={close}
        onSubmit={handleCreateStudent}
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
            Создать студента
          </Button>
        </UiSearchBar>
        <StudentTable
          data={data?.getStudents || []}
          fields={STUDENT_FIELDS_MAP}
          onChangeFields={() => {}}
          visibleFields={STUDENT_FIELDS_MAP}
          renderActions={() => null}
          isLoading={loading}
          isUpdate={loading}
        />
      </Grid>
    </>
  );
};
