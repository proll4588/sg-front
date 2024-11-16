import { Button, Grid } from '@mui/material';
import { UiSearchBar } from '../../shared/ui/ui-search-bar';
import { Add } from '@mui/icons-material';
import { useMutation, useQuery } from '@apollo/client';
import { UsersTable } from '../../widget/tables/users-table/UsersTable';
import { USERS_FIELDS_MAP } from '../../widget/tables/users-table/constants';
import { useViewModal } from '../../shared/hooks/useViewModal';
import { CreateUserFormDialog } from '../../widget/forms/UserForm/UserForm';
import { UsersTableActions } from '../../widget/tables/users-table/actions/UsersTableActions';
import { useConfirm } from '../../shared/confirm/ConfirmContext';
import { DELETE_USER, GET_USERS } from '../../apollo/fetchs/user';

export const UserControlPage = () => {
  const confirm = useConfirm();
  const { close, isOpen, open } = useViewModal();

  const { data, loading } = useQuery(GET_USERS);
  const [deleteUser] = useMutation(DELETE_USER, {
    refetchQueries: [{ query: GET_USERS, variables: { roleId: null } }],
  });

  return (
    <Grid
      container
      flexDirection={'column'}
      gap={2}
    >
      <CreateUserFormDialog
        close={close}
        isOpen={isOpen}
      />

      <UiSearchBar
        changeValue={() => {}}
        textValue=''
      >
        <Button
          startIcon={<Add />}
          onClick={open}
        >
          Добавить пользователя
        </Button>
      </UiSearchBar>

      {/* <Autocomplete
        renderInput={(params) => (
          <TextField
            {...params}
            label='Роль'
          />
        )}
        options={rolesRes?.getUsersRoles || []}
        getOptionLabel={(op) => op.title}
        sx={{ width: 220 }}
        value={role}
        onChange={(_, val) => setRole(val)}
        loading={loadingRoles}
        loadingText='Загрузка...'
      /> */}

      <UsersTable
        // TODO: пофиксить схему
        data={data?.getUsers?.filter((el) => el !== null) || []}
        fields={USERS_FIELDS_MAP}
        visibleFields={USERS_FIELDS_MAP}
        isLoading={loading}
        isUpdate={loading}
        onChangeFields={() => {}}
        renderActions={(user) => (
          <UsersTableActions
            user={user}
            onDelete={(userId) => {
              confirm({
                actionTitle: 'Удалить пользователя',
                actionBody:
                  'Вы точно хотите удалить пользователя. Дальнейшее восстановление невозможно!',
                submitButtonTitle: 'Удалить',
                buttonColor: 'error',
                onSubmit: async () => {
                  await deleteUser({ variables: { userId } });
                },
              });
            }}
          />
        )}
        onClick={() => {}}
      />
    </Grid>
  );
};
