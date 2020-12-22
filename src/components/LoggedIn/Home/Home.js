import React from 'react';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';

import ImportFiles from '../ImportFileHandling/Import/ImportFiles';
import AnalyseFile from '../ImportFileHandling/Analyse/FileAnalysis';
import ImportFileComponent from '../ImportFileHandling/ImportFileComponent';

const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: 'center',
        justifyContent: 'center',
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
        <main>
            <ImportFileComponent />
        </main>
    );
}
