import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Box, Typography } from '@material-ui/core';

import ShowChartIcon from '@material-ui/icons/ShowChart';
import BarChartIcon from '@material-ui/icons/BarChart';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import StreetviewIcon from '@material-ui/icons/Streetview';

import LineSeriesPage from './Line/LineSeriesPage';
import BarSeriesPage from './Bar/BarSeriesPage';
import MarkSeriesPage from './Mark/MarkSeriesPage';

//Switches tabs
function TabPanel(props: any) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index: number) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
    },
    stickToBottom: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        justifyContent: 'center',
    },
    tab: {
        color: theme.palette.text.primary,
        opacity: 1,
    },
}));

export default function VisualiseNav() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root} id={'plotting-tab-panel'}>
            <TabPanel value={value} index={0}>
                <LineSeriesPage />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <BarSeriesPage />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <MarkSeriesPage />
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Five
            </TabPanel>
            <TabPanel value={value} index={5}>
                Item Six
            </TabPanel>
            <TabPanel value={value} index={6}>
                Item Seven
            </TabPanel>

            <AppBar position="static" color="default" style={{ position: 'fixed' }}>
                <Tabs
                    id={'plotting-tabs'}
                    value={value}
                    onChange={handleChange}
                    scrollButtons="on"
                    indicatorColor="primary"
                    aria-label="scrollable force tabs example"
                    className={classes.stickToBottom}
                    centered
                >
                    <Tab
                        label="Line"
                        icon={<ShowChartIcon />}
                        {...a11yProps(0)}
                        id={'line-tab'}
                        className={classes.tab}
                    />
                    <Tab label="Bar" icon={<BarChartIcon />} {...a11yProps(1)} id={'bar-tab'} className={classes.tab} />
                    <Tab
                        label="Mark"
                        icon={<FiberManualRecordIcon />}
                        {...a11yProps(2)}
                        id={'mark-tab'}
                        className={classes.tab}
                    />
                    <Tab
                        label="Hexbin"
                        icon={<BlurOnIcon />}
                        {...a11yProps(3)}
                        id={'hexbin-tab'}
                        className={classes.tab}
                    />
                    <Tab
                        label="Polygon"
                        icon={<GraphicEqIcon />}
                        {...a11yProps(4)}
                        id={'polygon-tab'}
                        className={classes.tab}
                    />
                    <Tab
                        label="Donut"
                        icon={<DonutLargeIcon />}
                        {...a11yProps(5)}
                        id={'donut-tab'}
                        className={classes.tab}
                    />
                    <Tab
                        label="Heatmap"
                        icon={<StreetviewIcon />}
                        {...a11yProps(6)}
                        id={'heatmap-tab'}
                        className={classes.tab}
                    />
                </Tabs>
            </AppBar>
        </div>
    );
}
