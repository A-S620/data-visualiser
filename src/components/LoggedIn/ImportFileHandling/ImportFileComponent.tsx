import React from 'react';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ImportFiles from './Import/ImportFiles';
import AnalyseFile from './Analyse/FileAnalysis';
import { Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({}));

export default function ImportFileComponent() {
    const classes = useStyles();

    return (
        <main>
            <Grid container direction="row" justify="center" alignItems="center">
                <ImportFiles />

                <AnalyseFile />
            </Grid>
        </main>
    );
}
