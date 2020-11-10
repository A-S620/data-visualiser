//Imports from libraries
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//UI components Imports
import PlottingNav from './PlottingNav';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
}));

export default function PlottingPage() {
    const classes = useStyles();
    return (
        <div>
            <PlottingNav />
        </div>
    );
}
