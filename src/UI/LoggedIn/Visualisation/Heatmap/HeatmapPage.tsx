import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import HeatmapOptions from './HeatmapOptions';
const useStyles = makeStyles((theme) => ({
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
            <Box mx={10}></Box>
            <Box mx={10}>
                <HeatmapOptions />
            </Box>
        </Box>
    );
}
