import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import HeatmapOptions from './HeatmapOptions';
import HeatmapVis from './HeatmapVis';
const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        width: '100%',
    },
}));

export default function HeatmapPage() {
    const classes = useStyles();
    return (
        <Box
            display="flex"
            justifyContent="center"
            flexDirection="row"
            alignItems="center"
            className={classes.root}
            id={'heatmap-plotting-page'}
        >
            <Box>
                <HeatmapVis />
            </Box>
            <Box>
                <HeatmapOptions />
            </Box>
        </Box>
    );
}
