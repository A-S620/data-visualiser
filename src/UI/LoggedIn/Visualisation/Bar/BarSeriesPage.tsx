import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import BarSeriesOptions from './BarOptions';
import BarSeriesVis from './BarSeriesVis';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
    },
}));
export default function BarSeriesPage() {
    const classes = useStyles();
    return (
        <Box
            display="flex"
            justifyContent="center"
            flexDirection="row"
            alignItems="center"
            className={classes.root}
            id={'bar-series-page'}
        >
            <Box mx={10}>
                <BarSeriesVis />
            </Box>
            <Box mx={10}>
                <BarSeriesOptions />
            </Box>
        </Box>
    );
}
