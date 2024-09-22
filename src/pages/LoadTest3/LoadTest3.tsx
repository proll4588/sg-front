import { Autocomplete, Grid, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { User } from '../../__generated__/graphql';
import { useMutation, useQuery } from '@apollo/client';
import { GET_STUDENTS_USERS, PROCESS_PDF } from '../../apollo/fetchs';
import { UploadButton } from '../../shared/ui/upload-button/UploadButton';
import { AttachFile, UploadFile } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { useSnackbar } from '../../shared/snackbar-helper/SnackbarContext';

const toBase64 = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
  });

const getStudentName = (user: User | null) => {
  if (!user || !user.Student) return '~undef~';

  return `${user.Student.name} (${user.Student.Group.title})`;
};

export const LoadTest3 = () => {
  const { open: openSnackbar } = useSnackbar();
  const [processPdf, { loading, error }] = useMutation(PROCESS_PDF);
  const { data } = useQuery(GET_STUDENTS_USERS);

  useEffect(() => {
    if (error)
      openSnackbar({
        duration: 3000,
        type: 'error',
        title: error.message,
      });
  }, [error]);

  const users = data?.getStudentUsers;

  const [file, setFile] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const addFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files && e.currentTarget.files.length > 0) {
      const file = e.currentTarget.files[0];
      setFileName(file.name);

      toBase64(file).then((str) => setFile(str));
    }
  };

  const upload = () => {
    if (file && user) {
      processPdf({
        variables: {
          file,
          userId: user.id,
        },
      });
    }
  };

  return (
    <Grid
      alignItems={'center'}
      justifyContent={'center'}
      container
    >
      <Grid
        container
        maxWidth={600}
        flexDirection={'column'}
        gap={1}
      >
        <Typography
          textAlign={'center'}
          fontWeight={'bold'}
          fontSize={24}
        >
          Загрузка результата тестирования
        </Typography>

        <Autocomplete
          options={users || []}
          value={user}
          onChange={(_, val) => setUser(val)}
          getOptionLabel={getStudentName}
          renderInput={(params) => (
            <TextField
              {...params}
              label='Студент'
            />
          )}
        />

        <Grid
          container
          alignItems={'center'}
          gap={1}
        >
          <UploadButton
            variant='outlined'
            startIcon={<AttachFile />}
            onChangeInput={addFiles}
            disabled={loading}
            id='upload_task_files'
            accept='application/pdf'
            sx={{ flex: 1 }}
          >
            Прикрепить файл
          </UploadButton>

          {fileName && <Typography>{fileName}</Typography>}
        </Grid>

        <LoadingButton
          color='success'
          variant='outlined'
          loading={loading}
          disabled={!file || !user}
          onClick={upload}
          startIcon={<UploadFile />}
        >
          Загрузить
        </LoadingButton>

        {/* <Typography
        sx={{
          // width: '100vw',
          lineBreak: 'normal',
          wordBreak: 'break-all',
        }}
      >
        {file}
      </Typography> */}
      </Grid>
    </Grid>
  );
};
