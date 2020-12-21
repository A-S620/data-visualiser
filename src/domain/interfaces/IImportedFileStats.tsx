import { FileType } from './IFileType';

export interface IImportedFileStats {
    fileType: FileType | undefined;
    fileSize: string;
    characterCount: number | undefined;
}
