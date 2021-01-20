import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Tab, Tabs, AppBar } from '@material-ui/core';
import { connect } from 'react-redux';

import Home from '../Home/Home';
import Export from '../Export/Export';
import Settings from '../Settings/Settings';
import TabPanel from './TabPanel';
import PlottingPage from '../Plotting/PlottingPage';

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
    tabIndicator: {
        backgroundColor: theme.palette.text.secondary,
    },
    tabText: {
        textColor: theme.palette.text.secondary,
    },
    tab: {
        '&:disabled': {
            color: theme.palette.text.disabled,
            opacity: 1,
        },
    },
}));

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function UserNavigation(props: any) {
    const classes = useStyles();
    const [tab, setTab] = useState(0);
    const handleTabChange = (e: any, newValue: number) => {
        setTab(newValue);
    };
    function tabIsDisabled(): boolean {
        return props.intervalFields.length === 0 && props.intervalDataObjects.length === 0;
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs
                    value={tab}
                    onChange={handleTabChange}
                    orientation={'horizontal'}
                    classes={{
                        indicator: classes.tabIndicator,
                    }}
                    id="menu-tabs"
                >
                    <Tab label={'Home'} {...a11yProps(0)} />
                    <Tab label={'Plotting'} disabled={tabIsDisabled()} className={classes.tab} {...a11yProps(1)} />
                    <Tab label={'Export'} disabled={tabIsDisabled()} className={classes.tab} {...a11yProps(2)} />
                    <Tab label={'Settings'} {...a11yProps(3)} />
                </Tabs>
            </AppBar>

            <TabPanel value={tab} index={0}>
                <Home />
            </TabPanel>
            <TabPanel value={tab} index={1}>
                <PlottingPage />
            </TabPanel>
            <TabPanel value={tab} index={2}>
                <Export />
            </TabPanel>
            <TabPanel value={tab} index={3}>
                <Settings />
            </TabPanel>
        </div>
    );
}
const mapStateToProps = (state: any) => ({
    intervalFields: state.analysedData.intervalFields,
    intervalDataObjects: state.analysedData.intervalDataObjects,
});
export default connect(mapStateToProps, {})(UserNavigation);
