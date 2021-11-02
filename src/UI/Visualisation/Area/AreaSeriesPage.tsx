import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import AreaSeriesVis from './AreaSeriesVis';
import AreaOptions from './AreaOptions';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
    },
}));

export default function AreaSeriesPage() {
    const classes = useStyles();
    return (
        <Box
            display="flex"
            justifyContent="center"
            flexDirection="row"
            alignItems="center"
            className={classes.root}
            id={'polygon-plotting-page'}
        >
            <Box mx={10}>
                <AreaSeriesVis />
            </Box>
            <Box mx={10}>
                <AreaOptions />
            </Box>
        </Box>
    );
}
