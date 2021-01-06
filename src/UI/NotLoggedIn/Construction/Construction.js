import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

import logo from '../../assets/images/logo_transparent.png';

const useStyles = makeStyles((theme) => ({
    logo: {
        height: '692px',
        width: '692px',
    },
    title: {
        color: theme.palette.secondary.contrastText,
    },
    background: {
        backgroundColor: 'black',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
}));

export default function Construction(props) {
    const classes = useStyles();
    return (
        <Grid container direction="row" justify="center" alignItems="center" className={classes.background}>
            <img className={classes.logo} src={logo} />
            <Typography variant="h1" className={classes.title}>
                Coming Soon
            </Typography>
        </Grid>
    );
}
