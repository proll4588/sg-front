import { useMutation } from '@apollo/client';
import { AttachFile, UploadFile } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ANSWER_STUDENT_TEST_THREE } from '../../apollo/fetchs/studentTest';
import { useSnackbar } from '../../shared/snackbar-helper/SnackbarContext';
import { UploadButton } from '../../shared/ui/upload-button/UploadButton';
import { GET_AVAILABLE_STUDENT_TEST_PROCESSES } from '../../apollo/fetchs/studentTestProcess';
import { PAGES_URLS } from '../../shared/router/constants';

const toBase64 = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
  });

export const StudentTestThreePage = () => {
  const { studentTestId } = useParams();
  const navigate = useNavigate();

  const { open: openSnackbar } = useSnackbar();

  // TODO: сделать инвалидацию процессов
  const [answer, { loading, error }] = useMutation(ANSWER_STUDENT_TEST_THREE, {
    refetchQueries: [{ query: GET_AVAILABLE_STUDENT_TEST_PROCESSES }],
  });

  useEffect(() => {
    if (error)
      openSnackbar({
        duration: 3000,
        type: 'error',
        title: error.message,
      });
  }, [error]);

  const [file, setFile] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const addFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files && e.currentTarget.files.length > 0) {
      const file = e.currentTarget.files[0];
      setFileName(file.name);

      toBase64(file).then((str) => setFile(str));
    }
  };

  const upload = () => {
    // TODO: После отпрваки данных отправить студента отбратно на страницу тестов
    // А если он сюда опять придёт, показывать что всё загрузилось)
    if (file && studentTestId) {
      answer({
        variables: {
          fileBase64: file,
          studentTestId: Number(studentTestId),
        },
      }).then(() => {
        navigate(PAGES_URLS.studentTestProcessList);
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
          disabled={!file || !studentTestId}
          onClick={upload}
          startIcon={<UploadFile />}
        >
          Загрузить
        </LoadingButton>
      </Grid>
    </Grid>
  );
};
