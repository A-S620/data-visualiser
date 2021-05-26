import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import RadialSeriesVis from './RadialSeriesVis';
import RadialOptions from './RadialOptions';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
    },
}));

export default function RadialSeriesPage() {
    const classes = useStyles();
    return (
        <Box
            display="flex"
            justifyContent="center"
            flexDirection="row"
            alignItems="center"
            className={classes.root}
            id={'radial-plotting-page'}
        >
            <Box mx={10}>
                <RadialSeriesVis />
            </Box>
            <Box mx={10}>
                <RadialOptions />
            </Box>
        </Box>
    );
}
