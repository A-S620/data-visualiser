//Imports from libraries
import React from 'react';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone';

//UI Componenets
import ImportFiles from '../Import/ImportFiles'

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
    previewChip: {
        minWidth: 160,
        maxWidth: 210,
    },
}));

export default function Home() {
    const classes = useStyles();
    return (
        <Grid className={classes.root} container direction="column" justify="flex-start" alignItems="center">
            <ImportFiles/>
        </Grid>
    );
}
