import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import ImportedDataTable from './ImportedDataTable';
const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        width: '100%',
    },
}));

export default function ViewImportedData(props: any) {
    const classes = useStyles();
    return (
        <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            className={classes.root}
            id={'view-imported-data'}
            my={15}
            mx={15}
        >
            <ImportedDataTable />
        </Box>
    );
}
