// TODO: Решить проблему с any
/* eslint-disable @typescript-eslint/no-explicit-any */

export interface UiCellListFilesProps {
  documents: { id: number; title: string }[] | undefined;
  onDownload: (file: { id: number; title: string }) => any;
}
