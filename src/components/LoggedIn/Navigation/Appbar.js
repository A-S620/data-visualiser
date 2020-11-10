//Imports from libraries
import React, { useState } from 'react';
import { AppBar, Button, Toolbar, Tab, Tabs, Grid, RaisedButton, Box } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

//Assets Imports
import LandingImage from '../../assets/images/LandingPage.jpg';

//UI Components Imports
import TabPanel from './TabPanel';
import LandingPage from '../../NotLoggedIn/LandingPage/LandingPage';
import Home from '../Home/Home';

const useStyles = makeStyles((theme) => ({
    paperContainer: {
        backgroundImage: 'url(' + LandingImage + ')',
    },
    root: {
        flexGrow: 1,
        color: '#ffffff',
    },
    button: {
        backgroundColor: theme.palette.primary,
        '&:hover': {
            backgroundColor: theme.palette.secondary,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        background: theme.palette.primary.main,
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        flexWrap: 'wrap',
    },
    tabs: {
        width: '100%',
    },
    tab: {
        color: '#ffffff',
    },
}));

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
export default function Appbar() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [tab, setTab] = useState(0);
    const handleTabChange = (e, newValue) => {
        setTab(newValue);
        setOpen(true);
    };
    return (
        <div className={classes.paperContainer}>
            <AppBar
                className={classes.appBar}
                position="static"
                style={{ background: 'transparent', boxShadow: 'none' }}
            >
                <Grid
                    justify="space-between" // Add it here :)
                    container
                    spacing={24}
                >
                    <Grid item justify={'left'}>
                        <Tabs
                            value={tab}
                            onChange={handleTabChange}
                            orientation={'horizontal'}
                            indicatorColor="#ffffff"
                            textColorPrimary
                            // id="menu-tabs"
                        >
                            <Tab className={classes.tab} label={'Home'} {...a11yProps(1)} />
                            <Tab className={classes.tab} label={'About'} {...a11yProps(2)} />
                            <Tab className={classes.tab} label={'Privacy Policy'} {...a11yProps(3)} />
                            <Tab className={classes.tab} label={'Terms Of Use'} {...a11yProps(4)} />
                            <Tab className={classes.tab} label={'Documentation'} {...a11yProps(5)} />
                        </Tabs>
                    </Grid>
                    <Grid item justify={'right'} style={{ padding: 5 }}>
                        <Button style={{ marginRight: 10, textColor: '#ffffff' }}>Sign In</Button>
                        <Button color="primary" variant="contained" style={{ marginRight: 10, borderRadius: '5em' }}>
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </AppBar>
            <div value={tab} index={0}>
                <LandingPage />
            </div>
            <TabPanel value={tab} index={1}>
                About
            </TabPanel>
            <TabPanel value={tab} index={2}>
                Privacy Policy
            </TabPanel>
            <TabPanel value={tab} index={3}>
                Terms of use
            </TabPanel>
            <TabPanel value={tab} index={4}>
                Documentation
            </TabPanel>
        </div>
    );
}
