import React from 'react';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone';

const useStyles = makeStyles((theme) => ({
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
}));

export default function Home() {
    const classes = useStyles();
    return (
        <Grid className={classes.root} container direction="column" justify="flex-start" alignItems="center">
            <Container style={{ marginBottom: 20 }}>
                <Typography variant="h6" style={{ marginBottom: 5 }}>
                    Home Page
                </Typography>
                <DropzoneArea
                    id='drop-zone-area'
                    showPreviews={true}
                    // onChange={async (files) => this.uploadFiles(files)}
                    showPreviewsInDropzone={false}
                    useChipsForPreview
                    // previewGridProps={{ container: { spacing: 1, direction: 'row' } }}
                    // previewChipProps={{ classes: { root: this.classes.previewChip } }}
                    previewText="Selected files"
                    clearOnUnmount={true}
                    acceptedFiles={['application/json']}
                    filesLimit={1}
                />
            </Container>
        </Grid>
    );
}
