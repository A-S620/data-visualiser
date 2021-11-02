import React from 'react';
import { Box, Button, Divider, IconButton, makeStyles, Tooltip, Dialog } from '@material-ui/core';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import { DropzoneArea } from 'material-ui-dropzone';

import { AlertType } from '../../Interfaces/Notification/INotification';

import { NotificationsHandler } from '../../UIHandling/NotificationsHandler';
import { ImportFilesHandler } from '../../UIHandling/ImportFilesHandler';

import AlertNotification from '../Notifications/AlertNotification';
import { IImportedFile } from '../../Interfaces/import/IImportedFile';

import ImportedFileStats from './Import/ImportedFileStats';
import { IImportedFileStats } from '../../Interfaces/import/IImportedFileStats';
import FileAnalysisComponent from './Analyse/FileAnalysisComponent';
import FieldTypes from './Analyse/DataTypes';
import { ResetDataHandler } from '../../UIHandling/ResetDataHandler';
import ImportedData from '../../Domain/ReduxStoreHandling/ImportedData/ImportedData';

interface IState {
    importedFiles: Array<File>;
    submitButtonDisabled: boolean;
    outcome: AlertType | undefined;
    outcomeMessage: string;
    errors: NotificationsHandler;
    files: string;
    fileType: string;
    importedFileStats: IImportedFileStats;
    fieldTypesDialogOpen: boolean;
}
export default class ImportFilesComponent extends React.Component<{}, IState> {
    private classes: any = makeStyles((theme) => ({
        root: {
            height: '100%',
            width: '75%',
        },
        componentArea: {
            height: '70%',
            width: '75%',
        },
        container: {
            width: '100%',
        },
        verticalLine: {
            background: theme.palette.primary.light,
            width: '2px',
            margin: theme.spacing(7),
        },
        space: {
            minWidth: '10%',
        },
        dialogPaper: {
            width: '500px',
            height: '700px',
        },
    }));
    constructor(props: object) {
        super(props);
        this.state = {
            importedFiles: [],
            submitButtonDisabled: true,
            outcome: undefined,
            outcomeMessage: '',
            errors: new NotificationsHandler(),
            files: '',
            fileType: '',
            importedFileStats: {
                fileType: '',
                fileSize: '',
                characterCount: undefined,
            },
            fieldTypesDialogOpen: false,
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
                fileType: ImportFilesComponent.checkFileType(files),
                importedFileStats: {
                    fileType: ImportFilesComponent.checkFileType(files),
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
        const files = new ImportFilesHandler(file);
        const errors: NotificationsHandler = files.validate();
        if (errors.isEmpty()) {
            try {
                this.setState({
                    outcome: AlertType.SUCCESS,
                    outcomeMessage: 'Files successfully uploaded',
                    fieldTypesDialogOpen: true,
                });
            } catch (e) {
                this.setState({
                    outcome: AlertType.FAILED,
                    outcomeMessage: `${e.notification}`,
                });
            }
        } else {
            this.setState({ errors: errors });
        }
    }
    private resetFiles() {
        const resetData = new ResetDataHandler();
        resetData.resetData();
        this.setState({
            importedFiles: [],
            submitButtonDisabled: true,
            outcome: undefined,
            outcomeMessage: '',
            errors: new NotificationsHandler(),
            files: '',
            fileType: '',
            importedFileStats: {
                fileType: '',
                fileSize: '',
                characterCount: undefined,
            },
        });
    }
    private static applicationHasData(): boolean {
        const importedDataFields = new ImportedData().get().dataFields;
        return importedDataFields.length === 0;
    }
    public render() {
        return (
            <main>
                <Dialog
                    open={this.state.fieldTypesDialogOpen}
                    classes={{ paper: this.classes.dialogPaper }}
                    onBackdropClick={() => {
                        this.setState({ fieldTypesDialogOpen: false });
                    }}
                >
                    <Box
                        display="flex"
                        justifyContent="center"
                        flexDirection="column"
                        alignItems="center"
                        className={this.classes.root}
                        id={'import-file-component'}
                        my={15}
                        mx={15}
                    >
                        <FieldTypes />
                    </Box>
                </Dialog>
                <Box
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                    alignItems="center"
                    className={this.classes.root}
                    id={'import-file-component'}
                    my={15}
                    mx={15}
                >
                    <Box style={{ height: '50%', width: '50%' }} my={15} id={'alert-area'}>
                        {this.state.outcome && (
                            <AlertNotification alert={this.state.outcome} notification={this.state.outcomeMessage} />
                        )}
                        {!this.state.errors.isEmpty() && (
                            <AlertNotification
                                alert={AlertType.FAILED}
                                notification={`Error(s): ${this.state.errors.getNotifications()}`}
                            />
                        )}
                    </Box>
                    <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="flex-start"
                        className={this.classes.componentArea}
                    >
                        <Box id="drop-zone-area" mx={15} my={15}>
                            <Tooltip title="Reset Application">
                                <IconButton
                                    color="primary"
                                    style={{ marginRight: 10, borderRadius: '5em' }}
                                    id="reset-application-button"
                                    disabled={ImportFilesComponent.applicationHasData()}
                                    onClick={() => {
                                        this.resetFiles();
                                    }}
                                >
                                    <RotateLeftIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="View and edit the field types">
                                <Button
                                    style={{ marginRight: 10, borderRadius: '5em' }}
                                    id="field-types-button"
                                    color="primary"
                                    disabled={ImportFilesComponent.applicationHasData()}
                                    onClick={() => {
                                        this.setState({
                                            fieldTypesDialogOpen: true,
                                        });
                                    }}
                                >
                                    Field Types
                                </Button>
                            </Tooltip>
                            <DropzoneArea
                                showPreviews={true}
                                onChange={async (files) => {
                                    await this.addFiles(files);
                                    await this.uploadFiles();
                                }}
                                showPreviewsInDropzone={false}
                                useChipsForPreview
                                previewGridProps={{ container: { spacing: 1, direction: 'row' } }}
                                previewChipProps={{ classes: { root: this.classes.previewChip } }}
                                previewText="Selected files"
                                showAlerts={false}
                                // clearOnUnmount={true}
                                acceptedFiles={['text/csv']}
                                filesLimit={1}
                            />

                            <ImportedFileStats {...this.state.importedFileStats} />
                        </Box>
                        <Box mx={15} my={15}>
                            <Divider orientation="vertical" flexItem className={this.classes.verticalLine} />
                            <FileAnalysisComponent />
                        </Box>
                    </Box>
                </Box>
            </main>
        );
    }
}
