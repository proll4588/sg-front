import { useMutation, useQuery } from '@apollo/client';
import {
  FINISH_STUDENT_TEST_PROCESS,
  GET_STUDENT_TEST_PROCESS_MEMBERS,
  GET_STUDENT_TEST_PROCESSES,
  START_STUDENT_TEST_PROCESS,
} from '../../apollo/fetchs/studentTestProcess';
import { useViewModal } from '../../shared/hooks/useViewModal';
import {
  Button,
  Chip,
  Grid,
  List,
  ListItem,
  ListItemText,
  Skeleton,
  Typography,
} from '@mui/material';
import { UiSearchBar } from '../../shared/ui/ui-search-bar';
import { Assignment } from '@mui/icons-material';
import { StudentTestProcessTable } from '../../widget/tables/student-test-process-table/StudentTestProcessTable';
import { STUDENT_TEST_PROCESS_FIELDS_MAP } from '../../widget/tables/student-test-process-table/constants';
import { StudentTestProcessTableActions } from '../../widget/tables/student-test-process-table/actions/StudentTestProcessTableActions';
import {
  CreateStudentTestProcessDialog,
  StudentTestProcessFormFields,
} from '../../widget/forms/student-test-process-form/StudentTestProcessForm';
import { FC } from 'react';
import { DialogForForm } from '../../shared/ui/form/dialog-for-form';
import { DialogTitleForForm } from '../../shared/ui/form/dialog-for-form/components';
import { useViewModalWithInitFields } from '../../shared/hooks/useViewModalWithInitFields';
import { ContainerActionsForm } from '../../shared/ui/container-actions-form';

export const StudentTestProcessListPage = () => {
  const { data, loading } = useQuery(GET_STUDENT_TEST_PROCESSES);

  const [
    finishStudentTestProcess,
    { loading: finishStudentTestProcessLoading },
  ] = useMutation(FINISH_STUDENT_TEST_PROCESS, {
    refetchQueries: [GET_STUDENT_TEST_PROCESSES],
  });
  const [startStudentTestProcess, { loading: startStudentTestProcessLoading }] =
    useMutation(START_STUDENT_TEST_PROCESS, {
      refetchQueries: [GET_STUDENT_TEST_PROCESSES],
    });

  const startStudentTestProcessModal = useViewModal();
  const studentProcessMembersDialog = useViewModalWithInitFields<number>();

  const handleStartStudentTestProcess = (
    form: StudentTestProcessFormFields
  ) => {
    startStudentTestProcess({
      variables: {
        studentTestVariantId: form.studentTestVariantId,
        title: form.title,
        studentPassbookNumbers: form.passbookNumbers,
      },
    }).then(() => {
      startStudentTestProcessModal.close();
    });
  };

  const handleFinishStudentTestProcess = (studentTestProcessId: number) => {
    finishStudentTestProcess({ variables: { studentTestProcessId } });
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
            onClick={startStudentTestProcessModal.open}
          >
            Начать тестирование
          </Button>
        </UiSearchBar>

        <StudentTestProcessTable
          data={data?.getStudentTestProcesses || []}
          fields={STUDENT_TEST_PROCESS_FIELDS_MAP}
          onChangeFields={() => {}}
          visibleFields={STUDENT_TEST_PROCESS_FIELDS_MAP}
          renderActions={(studentTestProcess) => (
            <StudentTestProcessTableActions
              studentTestProcessId={studentTestProcess.id}
              onFinish={handleFinishStudentTestProcess}
            />
          )}
          isLoading={loading}
          isUpdate={loading || finishStudentTestProcessLoading}
          onClick={(res) => {
            studentProcessMembersDialog.open(res.id);
          }}
        />
      </Grid>

      <CreateStudentTestProcessDialog
        isOpen={startStudentTestProcessModal.isOpen}
        onClose={startStudentTestProcessModal.close}
        isLoading={startStudentTestProcessLoading}
        onSubmit={handleStartStudentTestProcess}
      />
      {studentProcessMembersDialog.initValue && (
        <StudentProcessMembersDialog
          isOpen={studentProcessMembersDialog.isOpen}
          onClose={studentProcessMembersDialog.close}
          studentTestProcessId={studentProcessMembersDialog.initValue}
        />
      )}
    </>
  );
};

interface StudentProcessMembersDialogProps {
  isOpen: boolean;
  onClose: () => void;
  studentTestProcessId: number;
}

export const StudentProcessMembersDialog: FC<
  StudentProcessMembersDialogProps
> = ({ isOpen, onClose, studentTestProcessId }) => {
  const { data, loading } = useQuery(GET_STUDENT_TEST_PROCESS_MEMBERS, {
    variables: { studentTestProcessId },
  });

  return (
    <DialogForForm
      head={<DialogTitleForForm title='Участники процесса тестирования' />}
      open={isOpen}
      onClose={onClose}
    >
      {loading ? (
        <Skeleton />
      ) : (
        <List>
          {data?.getStudentTestProcessMembers.map((member) => (
            <ListItem key={member.passbookNumber}>
              <ListItemText
                primary={member.name}
                secondary={`${member.Group.title} ${
                  member.StudentTest[0]?.dateEnd
                    ? 'завершён ' + member.StudentTest[0]?.dateEnd
                    : ''
                }`}
              />

              <Chip
                variant={member.StudentTest[0]?.dateEnd ? 'filled' : 'outlined'}
                label={
                  member.StudentTest[0]?.dateEnd
                    ? 'Тестирование завершено'
                    : 'Тестирование не завершено'
                }
                color={member.StudentTest[0]?.dateEnd ? 'success' : 'error'}
              />
            </ListItem>
          ))}
        </List>
      )}
      <ContainerActionsForm>
        <Button
          variant='contained'
          onClick={onClose}
          color='customGrey'
        >
          Закрыть
        </Button>
      </ContainerActionsForm>
    </DialogForForm>
  );
};
