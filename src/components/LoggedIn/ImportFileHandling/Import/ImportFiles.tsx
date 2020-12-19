//Handles file imports in the front end
import React from 'react';
import { Button, Container, Grid, IconButton, makeStyles, Tooltip } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { DropzoneArea } from 'material-ui-dropzone';

import { AlertType } from '../../../../domain/interfaces/INotification';
import { FileType } from '../../../../domain/interfaces/IFileType';

import { Notifications } from '../../../../domain/UIHandlers/Notifications';
import { ImportFileHandler } from '../../../../domain/UIHandlers/ImportFileHandler';

import { AlertNotification } from '../../Notifications/AlertNotification';
import { IImportedFile } from '../../../../domain/interfaces/IImportedFile';

import ImportedFileStats from './ImportedFileStats';
import { IImportedFileStats } from '../../../../domain/interfaces/IImportedFileStats';

interface IState {
    importedFiles: Array<File>;
    submitButtonDisabled: boolean;
    outcome: AlertType | undefined;
    outcomeMessage: string;
    errors: Notifications;
    files: string;
    fileType: FileType;
    importedFileStats: IImportedFileStats;
}
export default class ImportFiles extends React.Component<{}, IState> {
    private classes: any = makeStyles((theme) => ({
        root: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
        },
        container: {
            width: '40%',
        },
        alignItemsAndJustifyContent: {
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'pink',
        },
        previewChip: {
            minWidth: 160,
            maxWidth: 210,
        },
    }));
    constructor(props: object) {
        super(props);
        this.state = {
            importedFiles: [],
            submitButtonDisabled: true,
            outcome: undefined,
            outcomeMessage: '',
            errors: new Notifications(),
            files: '',
            fileType: FileType.CSV,
            importedFileStats: {
                fileType: FileType.CSV,
                fileSize: '',
                characterCount: 0,
            },
        };
    }
    private static checkFileType(files: File[]): FileType {
        const file = files[0];
        if (file.type === 'text/csv') {
            return FileType.CSV;
        }
        return FileType.JSON;
    }
    private async addFiles(files: File[]) {
        this.setState({ importedFiles: files });
        if (files.length > 0) {
            const allFiles = await files[0].text();
            this.setState({
                submitButtonDisabled: false,
                files: allFiles,
                fileType: ImportFiles.checkFileType(files),
            });
        } else {
            this.setState({
                submitButtonDisabled: true,
            });
        }
    }
    private async uploadFiles() {
        const file: IImportedFile = {
            file: this.state.files,
            fileType: this.state.fileType,
        };
        const files = new ImportFileHandler(file);
        const errors: Notifications = files.validate();
        if (errors.isEmpty()) {
            try {
                this.setState({
                    outcome: AlertType.SUCCESS,
                    outcomeMessage: 'Files successfully uploaded',
                });
            } catch (e) {
                this.setState({
                    outcome: AlertType.FAILED,
                    outcomeMessage: `${e.notification}`,
                });
            }
        } else {
            this.setState({ errors });
        }
    }
    private refreshFiles() {
        this.setState({
            importedFiles: [],
            files: '',
        });
    }

    public render() {
        return (
            <main>
                {this.state.outcome && (
                    <AlertNotification alert={this.state.outcome} notification={this.state.outcomeMessage} />
                )}
                {!this.state.errors.isEmpty() && (
                    <AlertNotification
                        alert={AlertType.FAILED}
                        notification={`Error(s): ${this.state.errors.notification()}`}
                    />
                )}
                <Grid
                    className={this.classes.root}
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="center"
                >
                    <Container style={{ marginBottom: 20 }} id="drop-zone-area">
                        <Tooltip title="Delete Imported File from system">
                            <IconButton
                                color="primary"
                                style={{ marginRight: 10, borderRadius: '5em' }}
                                id="refresh-import-button"
                                disabled={this.state.submitButtonDisabled}
                                onClick={() => {}}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>

                        <DropzoneArea
                            showPreviews={true}
                            onChange={async (files) => this.addFiles(files)}
                            showPreviewsInDropzone={false}
                            useChipsForPreview
                            previewGridProps={{ container: { spacing: 1, direction: 'row' } }}
                            previewChipProps={{ classes: { root: this.classes.previewChip } }}
                            previewText="Selected files"
                            clearOnUnmount={true}
                            acceptedFiles={['text/csv', 'application/json']}
                            filesLimit={1}
                        />
                    </Container>
                    <Grid container justify="center">
                        <Button
                            color="primary"
                            style={{ marginRight: 10, borderRadius: '5em' }}
                            id="submit-files-button"
                            variant="contained"
                            disabled={this.state.submitButtonDisabled}
                            onClick={() => {
                                this.uploadFiles();
                                this.refreshFiles();
                            }}
                        >
                            Import
                        </Button>
                    </Grid>
                    <ImportedFileStats {...this.state.importedFileStats} />
                </Grid>
            </main>
        );
    }
}
