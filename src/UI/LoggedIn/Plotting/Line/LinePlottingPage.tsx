import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import { LineSeries, XYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis } from 'react-vis';
import LineSeriesVis from './LineSeriesVis';
import LinePlottingOptions from './LinePlottingOptions';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
    },
}));

export default function LinePlottingPage() {
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
                <LinePlottingOptions />
            </Box>
        </Box>
    );
}
