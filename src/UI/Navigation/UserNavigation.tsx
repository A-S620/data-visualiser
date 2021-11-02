import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Tab, Tabs, AppBar } from '@material-ui/core';
import { connect } from 'react-redux';

import Home from '../Home/Home';
import ViewImportedData from '../ViewImportedData/ViewImportedData';
import TabPanel from './TabPanel';
import ViewAnalysedData from '../ViewAnalysedData/ViewAnalysedData';
import Visualisations from '../Visualisation/Visualisations';

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
        return (
            props.intervalFields.length === 0 &&
            props.nominalFields.length === 0 &&
            props.ordinalFields.length === 0 &&
            props.ignoreFields.length === 0 &&
            props.binaryFields.length === 0
        );
    }
    function importTabIsDisabled(): boolean {
        return props.dataFields.length === 0;
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
                    <Tab
                        label={'Imported Data'}
                        disabled={importTabIsDisabled()}
                        className={classes.tab}
                        {...a11yProps(1)}
                    />
                    <Tab label={'Analysed Data'} disabled={tabIsDisabled()} className={classes.tab} {...a11yProps(2)} />
                    <Tab label={'Plotting'} disabled={tabIsDisabled()} className={classes.tab} {...a11yProps(3)} />
                </Tabs>
            </AppBar>

            <TabPanel value={tab} index={0}>
                <Home />
            </TabPanel>
            <TabPanel value={tab} index={1}>
                <ViewImportedData />
            </TabPanel>
            <TabPanel value={tab} index={2}>
                <ViewAnalysedData />
            </TabPanel>
            <TabPanel value={tab} index={3}>
                <Visualisations />
            </TabPanel>
        </div>
    );
}
const mapStateToProps = (state: any) => ({
    dataFields: state.importedData.dataFields,
    intervalFields: state.analysedData.intervalFields,
    nominalFields: state.analysedData.nominalFields,
    ordinalFields: state.analysedData.ordinalFields,
    binaryFields: state.analysedData.binaryFields,
    ignoreFields: state.analysedData.ignoreFields,
});
export default connect(mapStateToProps, {})(UserNavigation);
