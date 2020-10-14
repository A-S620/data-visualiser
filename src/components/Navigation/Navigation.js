import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer, Tab, Tabs, Typography } from '@material-ui/core';
import Home from '../Home/Home';
import Export from '../Export/Export';
import Settings from '../Settings/Settings';
import TabPanel from './TabPanel';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
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

export default function Navigation() {
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
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <Typography variant="h6" noWrap align="center">
                        Data Visualiser
                    </Typography>
                </div>
                <Tabs
                    value={tab}
                    onChange={handleTabChange}
                    orientation={'vertical'}
                    indicatorColor="primary"
                    textColor="primary"
                    id="menu-tabs"
                >
                    <Tab label={'Home'} {...a11yProps(0)} />
                    <Tab label={'Export'} {...a11yProps(1)} />
                    <Tab label={'Settings'} {...a11yProps(2)} />
                </Tabs>
            </Drawer>
            <TabPanel value={tab} index={0}>
                <Home />
            </TabPanel>
            <TabPanel value={tab} index={1}>
                <Export />
            </TabPanel>
            <TabPanel value={tab} index={2}>
                <Settings />
            </TabPanel>
        </div>
    );
}
