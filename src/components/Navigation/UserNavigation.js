import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer, Tab, Tabs, Typography, AppBar } from '@material-ui/core';
import Home from '../Home/Home';
import Export from '../Export/Export';
import Settings from '../Settings/Settings';
import TabPanel from './TabPanel';
import PlottingPage from '../Plotting/PlottingPage';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
    },
    drawerPaper: {
        width: drawerWidth,
    },
}));

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function UserNavigation() {
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
        <div className={classes.root}>
            {/*<Drawer*/}
            {/*    className={classes.drawer}*/}
            {/*    variant="permanent"*/}
            {/*    anchor="left"*/}
            {/*    open={open}*/}
            {/*    classes={{*/}
            {/*        paper: classes.drawerPaper,*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <div className={classes.drawerHeader}>*/}
            {/*        <Typography variant="h6" noWrap align="center">*/}
            {/*            Data Visualiser*/}
            {/*        </Typography>*/}
            {/*    </div>*/}
            <AppBar position="static">
                <Tabs
                    value={tab}
                    onChange={handleTabChange}
                    orientation={'horizontal'}
                    indicatorColor="primary"
                    textColor="black"
                    id="menu-tabs"
                >
                    <Tab label={'Home'} {...a11yProps(0)} />
                    <Tab label={'Export'} {...a11yProps(1)} />
                    <Tab label={'Plotting'} {...a11yProps(2)} />
                    <Tab label={'Settings'} {...a11yProps(3)} />
                </Tabs>
            </AppBar>

            {/*</Drawer>*/}
            <TabPanel value={tab} index={0}>
                <Home />
            </TabPanel>
            <TabPanel value={tab} index={1}>
                <Export />
            </TabPanel>
            <TabPanel value={tab} index={2}>
                <PlottingPage />
            </TabPanel>
            <TabPanel value={tab} index={3}>
                <Settings />
            </TabPanel>
        </div>
    );
}
