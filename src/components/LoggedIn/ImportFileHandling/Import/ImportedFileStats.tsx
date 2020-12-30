import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import { IImportedFileStats } from '../../../../domain/interfaces/import/IImportedFileStats';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            margin: theme.spacing(20),
        },
        statDescription: {
            margin: theme.spacing(4),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        stat: {
            color: theme.palette.secondary.contrastText,
            textAlign: 'center',
            margin: theme.spacing(4),
        },
        gridItem: {
            background: theme.palette.secondary.main,
            padding: theme.spacing(6),
            margin: theme.spacing(4),
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
        <div className={classes.root} id="imported-file-stats">
            <Grid container direction="row" justify="space-between" alignItems="flex-start">
                {Object.entries(importedFileStats).map(([key, value]) => (
                    <Grid item direction="column" justify="center" alignItems="center" className={classes.gridItem} id={key+'-stat'}>
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
