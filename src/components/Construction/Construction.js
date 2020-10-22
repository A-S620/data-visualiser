import React from 'react';
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import logo from '../assets/images/logo_transparent.png';
import LandingImage from '../assets/images/LandingPage.jpg';
import Background from '../assets/images/ColourHeader.png';
import Galaxy from '../assets/images/Galaxy.jpg';
import Image from 'material-ui-image';
import Appbar from '../Navigation/Appbar';
import FrontNavigation from '../Navigation/FrontNavigation';

import { Card, Paper, CardHeader, CardMedia, CardContent, CardActions, AppBar, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import UserNavigation from '../Navigation/UserNavigation';
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
