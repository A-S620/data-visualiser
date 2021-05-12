import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import MarkSeriesVis from './MarkSeriesVis';
import MarkSeriesOptions from './MarkSeriesOptionsComponent';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
    },
}));

export default function MarkSeriesPage() {
    const classes = useStyles();
    return (
        <Box
            display="flex"
            justifyContent="center"
            flexDirection="row"
            alignItems="center"
            className={classes.root}
            id={'mark-plotting-page'}
        >
            <Box mx={10}>
                <MarkSeriesVis />
            </Box>
            <Box mx={10}>
                <MarkSeriesOptions />
            </Box>
        </Box>
    );
}
