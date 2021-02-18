import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import IntervalDataTable from './Tables/IntervalDataTable';
import NominalDataTable from './Tables/NominalDataTable';
import OrdinalDataTable from './Tables/OrdinalDataTable';
import BinaryDataTable from './Tables/BinaryDataTable';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    container: {
        width: '40%',
    },
    alignItemsAndJustifyContent: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
    },
}));

export default function ViewAnalysedData() {
    const classes = useStyles();
    return (
        <Box
            display="flex"
            justifyContent="center"
            flexDirection="row"
            alignItems="center"
            className={classes.root}
            id={'view-imported-data'}
            my={15}
        >
            <Box mx={5}>
                <IntervalDataTable />
            </Box>
            <Box mx={5}>
                <NominalDataTable />
            </Box>
            <Box mx={5}>
                <OrdinalDataTable />
            </Box>
            <Box mx={5}>
                <BinaryDataTable />
            </Box>
        </Box>
    );
}
