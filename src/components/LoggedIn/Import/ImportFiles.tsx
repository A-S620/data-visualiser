//Handles file imports in the front end.
//Imports from libraries
import React from 'react';
import { Container, Grid, makeStyles, Typography, Button } from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone';

//Interfaces
import { AlertType } from '../../../domain/interfaces/INotification';
//Domain Components
import { Notifications } from '../../../domain/Notifications';
import { ImportData } from '../../../domain/ImportData';
//UI Componenets
import { AlertNotification } from '../Notifications/AlertNotification';

//TODO: JSON files accept.
interface IState {
    importedFiles: Array<File>;
    submitButtonDisabled: boolean;
    outcome: AlertType | undefined;
    outcomeMessage: string;
    errors: Notifications;
    files: string;
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
        };
    }
    private async addFiles(files: File[]) {
        this.setState({ importedFiles: files });
        if (files.length > 0) {
            const allFiles = await files[0].text();
            this.setState({
                submitButtonDisabled: false,
                files: allFiles,
            });
            console.log(this.state.files);
        } else {
            this.setState({
                submitButtonDisabled: true,
            });
        }
    }
    private async uploadFiles() {
        console.log(this.state.submitButtonDisabled);
        console.log('filess' + this.state.files);
        const files = new ImportData(this.state.files);
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
        }
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
                        notification={`Error(s): ${this.state.errors.notificationComma()}`}
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
                            acceptedFiles={['application/json']}
                            filesLimit={1}
                        />
                        <Button
                            id="submit-files-button"
                            variant="contained"
                            disabled={this.state.submitButtonDisabled}
                            onClick={() => {
                                this.uploadFiles();
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
