import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import LineSeriesVis from './LineSeriesVis';
import LineSeriesOptions from './LineOptions';
const useStyles = makeStyles(() => ({
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
            <Box>
                <LineSeriesVis />
            </Box>
            <Box>
                <LineSeriesOptions />
            </Box>
        </Box>
    );
}
