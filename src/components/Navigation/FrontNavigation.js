//Imports from libraries
import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Button, Drawer, Grid, Paper, Tab, Tabs, Typography } from '@material-ui/core';

//UI Components Imports
import Home from '../Home/Home';
import TabPanel from './TabPanel';
import LandingPage from '../LandingPage/LandingPage';

//Assets Imports
import LandingImage from '../assets/images/LandingPage.jpg';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    actionButtons: {
        marginTop: '2vh',
        marginRight: '2vh',
    },
    navigation: {
        display: 'flex',
    },
    tab: {
        color: theme.palette.secondary.contrastText,
    },
    drawerHeader: {
        color: theme.palette.secondary.contrastText,
    },
    drawer: {
        width: drawerWidth,
    },
    drawerPaper: {
        width: drawerWidth,
        background: 'transparent',
        justifyContent: 'center',
    },
}));

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function FrontNavigation() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [tab, setTab] = useState(0);
    const handleTabChange = (e, newValue) => {
        setTab(newValue);
        setOpen(true);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Paper
            style={{
                backgroundImage: `url(${LandingImage})`,
                height: '100vh',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <Grid container direction="row" justify="flex-end" alignItems="flex-start">
                <Button
                    className={classes.actionButtons}
                    size="large"
                    variant="text"
                    style={{ color: theme.palette.secondary.contrastText }}
                >
                    Sign In
                </Button>
                <Button
                    className={classes.actionButtons}
                    color="primary"
                    variant="contained"
                    style={{ marginRight: 10, borderRadius: '5em' }}
                >
                    Login
                </Button>
            </Grid>
            <div className={classes.navigation}>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <Tabs
                        value={tab}
                        onChange={handleTabChange}
                        orientation={'vertical'}
                        indicatorColor="primary"
                        textColor="primary"
                        id="menu-tabs"
                    >
                        <Tab className={classes.tab} label={'Home'} {...a11yProps(1)} />
                        <Tab className={classes.tab} label={'About'} {...a11yProps(2)} />
                        <Tab className={classes.tab} label={'Privacy Policy'} {...a11yProps(3)} />
                        <Tab className={classes.tab} label={'Terms Of Use'} {...a11yProps(4)} />
                        <Tab className={classes.tab} label={'Documentation'} {...a11yProps(5)} />
                    </Tabs>
                </Drawer>
                <TabPanel value={tab} index={0}>
                    <LandingPage />
                </TabPanel>
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
        </Paper>
    );
}
