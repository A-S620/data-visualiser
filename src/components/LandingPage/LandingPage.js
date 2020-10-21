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
    paperContainer: {
        backgroundImage: 'url(' + LandingImage + ')',
    },
    heroContainer: {
        height: 800,
        backgroundImage: `url(${'../assets/images/LandingPage.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: `calc(100vw + 48px)`,
        margin: -24,
        padding: 24,
    },
    root: {
        backgroundImage: 'url(' + LandingImage + ')',
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            height: theme.spacing(16),
            width: theme.spacing(20),
        },
    },
    card: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
    },
    container: {
        position: 'relative',
        textAlign: 'center',
        color: 'white',
    },
    topasad: {
        color: 'blue',
        position: 'absolute',
        top: '10%',
        left: '50%',
    },

    media: {
        display: 'flex',
        height: 100,
        objectFit: 'contain',
        alignItems: 'left',
    },
}));

export default function LandingPage(props) {
    const classes = useStyles();
    return (
        <Paper
        >
            beep beep
        </Paper>
    );
}
