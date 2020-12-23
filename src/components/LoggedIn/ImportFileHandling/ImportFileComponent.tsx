import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Grid, Paper, Divider } from '@material-ui/core';
import ImportFiles from './Import/ImportFiles';
import AnalyseFile from './Analyse/FileAnalysis';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: theme.spacing(30),
        },
        paper: {
            height: '75%',
            width: '75%',
            padding: theme.spacing(2),
        },
        component: {
            margin: theme.spacing(2),
            padding: theme.spacing(30),
        },
        verticalLine: {
            background: theme.palette.primary.light,
            width: '2px',
            margin: theme.spacing(7),
        },
    })
);

export default function ImportFileComponent() {
    const classes = useStyles();
    return (
        <main>
            <Grid container direction="row" justify="center" alignItems="center" className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container direction="row" justify="center" alignItems="center" >
                        <Grid item className={classes.component}>
                            <ImportFiles />
                        </Grid>

                        <Divider orientation="vertical" flexItem className={classes.verticalLine} />
                        <Grid item className={classes.component}>
                            <AnalyseFile />
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </main>
    );
}
