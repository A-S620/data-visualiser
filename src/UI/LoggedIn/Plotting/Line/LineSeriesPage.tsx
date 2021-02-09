import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import LineSeriesVis from './LineSeriesVis';
import LineSeriesOptions from './LineSeriesOptions';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
    },
}));

export default function LineSeriesPage() {
    const classes = useStyles();
    return (
        <Box
            display="flex"
            justifyContent="center"
            flexDirection="row"
            alignItems="center"
            className={classes.root}
            id={'line-plotting-page'}
        >
            <Box mx={10}>
                <LineSeriesVis />
            </Box>
            <Box mx={10}>
                <LineSeriesOptions />
            </Box>
        </Box>
    );
}
