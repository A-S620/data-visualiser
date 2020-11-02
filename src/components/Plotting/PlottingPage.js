import React from 'react';

//Material UI components
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';

//My components
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
