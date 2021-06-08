import React from 'react';
import { Box, Button, Dialog, Tooltip, IconButton, Divider } from '@material-ui/core';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { AlertType } from '../../../Interfaces/Notification/INotification';
import { NotificationsHandler } from '../../../UIHandling/NotificationsHandler';
import AlertNotification from '../Notifications/AlertNotification';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import { DropzoneArea } from 'material-ui-dropzone';
import ImportedFileStats from './Import/ImportedFileStats';
import FileAnalysisComponent from './Analyse/FileAnalysisComponent';
import { IImportedFileStats } from '../../../Interfaces/import/IImportedFileStats';
import DataTypes from './Analyse/DataTypes';
import { IImportedFile } from '../../../Interfaces/import/IImportedFile';
import { ImportFilesHandler } from '../../../UIHandling/ImportFilesHandler';
import { ResetDataHandler } from '../../../UIHandling/ResetDataHandler';
const useStyles = makeStyles((theme) => ({
    paper: {
        height: '100%',
        margin: theme.spacing(2),
        padding: theme.spacing(2),
    },
    chips: {
        backgroundColor: theme.palette.secondary.main,
        margin: theme.spacing(1),
        textColor: theme.palette.secondary.contrastText,
    },
    statDescription: {
        margin: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.primary,
    },
    donutChart: {
        margin: theme.spacing(2),
    },
    exampleObject: {
        textColor: theme.palette.text.primary,
    },
    boxSize: {
        maxWidth: '500px',
    },
    table: {
        minWidth: 350,
    },
    dialogPaper: {
        width: '500px',
        height: '700px',
    },
    textColor: {
        color: theme.palette.text.primary,
    },
}));

function ImportFilesComp(props: any) {
    const classes = useStyles();
    const [notifications, setNotifications] = React.useState<{
        outcome: AlertType | undefined;
        outcomeMessage: string;
        errors: NotificationsHandler;
    }>({
        outcome: undefined,
        outcomeMessage: '',
        errors: new NotificationsHandler(),
    });
    const [state, setState] = React.useState<{
        fieldTypesDialogOpen: boolean;
        files: string;
        fileType: string;
        importedFiles: Array<File>;
        submitButtonDisabled: boolean;
    }>({
        fieldTypesDialogOpen: false,
        files: '',
        fileType: '',
        importedFiles: [],
        submitButtonDisabled: true,
    });
    const [importedFileStats, setImportedFileStats] = React.useState<IImportedFileStats>({
        fileType: '',
        fileSize: '',
        characterCount: undefined,
    });
    function checkFileType(files: File[]): string {
        const file = files[0];
        return file.type;
    }
    function uploadFiles() {
        const file: IImportedFile = {
            file: state.files,
            fileType: state.fileType,
        };
        const files = new ImportFilesHandler(file);
        const errors: NotificationsHandler = files.validate();
        if (errors.isEmpty()) {
            try {
                setNotifications({
                    ...notifications,
                    outcome: AlertType.SUCCESS,
                    outcomeMessage: 'Files successfully uploaded',
                });
                setState({
                    ...state,
                    fieldTypesDialogOpen: true,
                });
            } catch (e) {
                setNotifications({
                    ...notifications,
                    outcome: AlertType.FAILED,
                    outcomeMessage: `${e.notification}`,
                });
            }
        } else {
            setNotifications({
                ...notifications,
                errors: errors,
            });
        }
    }
    async function addFiles(files: File[]) {
        setState({
            ...state,
            importedFiles: files,
        });
        if (files.length > 0) {
            const allFiles = await files[0].text();
            setState({
                ...state,
                submitButtonDisabled: false,
                files: allFiles,
                fileType: checkFileType(files),
            });
            setImportedFileStats({
                ...importedFileStats,
                fileType: checkFileType(files),
                fileSize: (files[0].size / 1000).toString(),
                characterCount: allFiles.length,
            });
        } else {
            setState({
                ...state,
                submitButtonDisabled: true,
            });
        }
    }
    function resetFiles() {
        const resetData = new ResetDataHandler();
        resetData.resetData();
        setState({
            ...state,
            importedFiles: [],
            submitButtonDisabled: true,
            files: '',
            fileType: '',
        });
        setNotifications({
            ...notifications,
            outcome: undefined,
            outcomeMessage: '',
            errors: new NotificationsHandler(),
        });
        setImportedFileStats({
            fileType: '',
            fileSize: '',
            characterCount: undefined,
        });
    }
    return (
        <main>
            <Dialog
                open={state.fieldTypesDialogOpen}
                classes={{ paper: classes.dialogPaper }}
                onBackdropClick={() => {
                    setState({
                        ...state,
                        fieldTypesDialogOpen: false,
                    });
                }}
            >
                <Box
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                    alignItems="center"
                    id={'import-file-component'}
                    my={15}
                    mx={15}
                >
                    <DataTypes />
                </Box>
            </Dialog>
            <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
                id={'import-file-component'}
                my={15}
                mx={15}
            >
                <Box style={{ height: '50%', width: '50%' }} my={15} id={'alert-area'}>
                    {notifications.outcome && (
                        <AlertNotification alert={notifications.outcome} notification={notifications.outcomeMessage} />
                    )}
                    {!notifications.errors.isEmpty() && (
                        <AlertNotification
                            alert={AlertType.FAILED}
                            notification={`Error(s): ${notifications.errors.getNotifications()}`}
                        />
                    )}
                </Box>
                <Box display="flex" flexDirection="row" justifyContent="center" alignItems="flex-start">
                    <Box id="drop-zone-area" mx={15} my={15}>
                        <Tooltip title="Reset Application">
                            <IconButton
                                color="primary"
                                style={{ marginRight: 10, borderRadius: '5em' }}
                                id="reset-application-button"
                                disabled={props.dataFields.length === 0}
                                onClick={() => {
                                    resetFiles();
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
                                disabled={state.submitButtonDisabled}
                                onClick={() => {
                                    setState({
                                        ...state,
                                        fieldTypesDialogOpen: false,
                                    });
                                }}
                            >
                                Field Types
                            </Button>
                        </Tooltip>
                        <DropzoneArea
                            showPreviews={true}
                            onChange={async (files) => {
                                await addFiles(files);
                                await uploadFiles();
                            }}
                            showPreviewsInDropzone={false}
                            useChipsForPreview
                            previewGridProps={{ container: { spacing: 1, direction: 'row' } }}
                            previewText="Selected files"
                            showAlerts={false}
                            // clearOnUnmount={true}
                            acceptedFiles={['text/csv']}
                            filesLimit={1}
                        />

                        <ImportedFileStats {...importedFileStats} />
                    </Box>
                    <Box mx={15} my={15}>
                        <Divider orientation="vertical" flexItem />
                        <FileAnalysisComponent />
                    </Box>
                </Box>
            </Box>
        </main>
    );
}

const mapStateToProps = (state: any) => ({
    dataFields: state.importedData.dataFields,
    dataObjects: state.importedData.dataObjects,
});
export default connect(mapStateToProps, {})(ImportFilesComp);
