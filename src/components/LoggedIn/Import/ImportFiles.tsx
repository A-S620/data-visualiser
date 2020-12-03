//Handles file imports in the front end.
//Imports from libraries
import React from 'react';
import { Button, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone';
//Interfaces
import { AlertType } from '../../../domain/interfaces/INotification';
import { FileType } from '../../../domain/interfaces/IFileType';
//Domain Components
import { Notifications } from '../../../domain/UIHandlers/Notifications';
import { ImportData } from '../../../domain/UIHandlers/ImportData';
//UI Componenets
import { AlertNotification } from '../Notifications/AlertNotification';

interface IState {
    importedFiles: Array<File>;
    submitButtonDisabled: boolean;
    outcome: AlertType | undefined;
    outcomeMessage: string;
    errors: Notifications;
    files: string;
    fileType: FileType;
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
        };
    }
    private checkFileType(files: File[]): FileType {
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
                fileType: this.checkFileType(files),
            });
        } else {
            this.setState({
                submitButtonDisabled: true,
            });
        }
    }
    private async uploadFiles() {
        const files = new ImportData(this.state.files, this.state.fileType);
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
                        <Typography variant="h6" style={{ marginBottom: 5 }}>
                            Home Page
                        </Typography>

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
                            Submit files
                        </Button>
                    </Container>
                </Grid>
            </main>
        );
    }
}
