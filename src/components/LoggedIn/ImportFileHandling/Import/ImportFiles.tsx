import React from 'react';
import { Button, Container, Grid, IconButton, makeStyles, Paper, Tooltip } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { DropzoneArea } from 'material-ui-dropzone';

import { AlertType } from '../../../../domain/interfaces/INotification';

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
    fileType: string;
    importedFileStats: IImportedFileStats;
}
export default class ImportFiles extends React.Component<{}, IState> {
    private classes: any = makeStyles((theme) => ({
        paper: {
            height: '100%',
            margin: theme.spacing(2),
            padding: theme.spacing(2),
        },
        container: {
            width: '100%',
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
            fileType: '',
            importedFileStats: {
                fileType: '',
                fileSize: '',
                characterCount: undefined,
            },
        };
    }
    private static checkFileType(files: File[]): string {
        const file = files[0];
        return file.type;
    }
    private async addFiles(files: File[]) {
        this.setState({ importedFiles: files });
        if (files.length > 0) {
            const allFiles = await files[0].text();
            this.setState({
                submitButtonDisabled: false,
                files: allFiles,
                fileType: ImportFiles.checkFileType(files),
                importedFileStats: {
                    fileType: ImportFiles.checkFileType(files),
                    fileSize: (files[0].size / 1000).toString(),
                    characterCount: allFiles.length,
                },
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
    private resetFiles() {
        const file: IImportedFile = {
            file: this.state.files,
            fileType: this.state.fileType,
        };
        const files = new ImportFileHandler(file);
        files.resetImportedData();
        files.resetAnalysedData();
        this.setState({
            importedFiles: [],
            submitButtonDisabled: true,
            outcome: undefined,
            outcomeMessage: '',
            errors: new Notifications(),
            files: '',
            fileType: '',
            importedFileStats: {
                fileType: '',
                fileSize: '',
                characterCount: undefined,
            },
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
                <Grid container direction="column" justify="flex-start" alignItems="center">
                    <Container style={{ marginBottom: 20 }} id="drop-zone-area">
                        <Tooltip title="Delete Imported File from system">
                            <IconButton
                                color="primary"
                                style={{ marginRight: 10, borderRadius: '5em' }}
                                id="delete-import-button"
                                disabled={this.state.submitButtonDisabled}
                                onClick={() => {
                                    this.resetFiles();
                                }}
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
                            acceptedFiles={['text/csv']}
                            filesLimit={1}
                        />
                    </Container>
                    <Grid justify="center">
                        <Button
                            color="primary"
                            style={{ marginRight: 10, borderRadius: '5em' }}
                            id="submit-files-button"
                            variant="contained"
                            disabled={this.state.submitButtonDisabled}
                            onClick={() => {
                                this.uploadFiles();
                            }}
                        >
                            Import
                        </Button>
                    </Grid>
                    <Grid justify="center">
                        <ImportedFileStats {...this.state.importedFileStats} />
                    </Grid>
                </Grid>
            </main>
        );
    }
}
