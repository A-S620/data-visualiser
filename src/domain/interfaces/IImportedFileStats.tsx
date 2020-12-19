import { FileType } from './IFileType';

export interface IImportedFileStats {
    fileType: FileType;
    fileSize: string;
    characterCount: number;
}
