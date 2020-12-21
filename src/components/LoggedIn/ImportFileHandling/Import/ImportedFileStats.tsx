import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Typography, Grid, Box } from '@material-ui/core';
import { IImportedFileStats } from '../../../../domain/interfaces/IImportedFileStats';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        statDescription: {
            margin: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        stat: {
            color: theme.palette.primary.main,
            textAlign: 'center',
            margin: theme.spacing(1),
        },
        gridItem: {
            background: theme.palette.secondary.main,
            marginRight: 10,
            borderRadius: '2em',
        },
    })
);
function getStatLabel(key: string): string {
    if (key === 'fileType') {
        return 'File Type';
    }
    if (key === 'fileSize') {
        return 'File Size (KB)';
    }
    if (key === 'characterCount') {
        return 'Character Count';
    }
    return '';
}
export default function ImportedFileStats(importedFileStats: IImportedFileStats) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container direction="row" justify="space-between" alignItems="flex-start">
                {Object.entries(importedFileStats).map(([key, value]) => (
                    <Grid item direction="column" justify="center" alignItems="center" className={classes.gridItem}>
                        <Typography className={classes.statDescription} variant="subtitle1">
                            {getStatLabel(key)}
                        </Typography>
                        <Typography className={classes.stat} variant="h6">
                            {value}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
