import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ImportFiles from './Import/ImportFiles';
import AnalyseFile from './Analyse/FileAnalysis';

const useStyles = makeStyles((theme: Theme) => ({}));

export default function ImportFileComponent() {
    return (
        <main>
            <Grid container direction="row" justify="center" alignItems="center">
                <ImportFiles />

                <AnalyseFile />
            </Grid>
        </main>
    );
}
