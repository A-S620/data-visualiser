import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Box, Typography, Grid } from '@material-ui/core';

//Icons
import ShowChartIcon from '@material-ui/icons/ShowChart';
import BarChartIcon from '@material-ui/icons/BarChart';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import StreetviewIcon from '@material-ui/icons/Streetview';

//My componenets
import LinePlotting from './LinePlotting';

//Switches tabs
function TabPanel(props) {
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

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    stickToBottom: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
    },
}));

export default function PlottingNav() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <TabPanel value={value} index={0}>
                <LinePlotting />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
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
            <div>
                <AppBar position="static" color="default" style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="on"
                        indicatorColor="primary"
                        textColor="primary"
                        aria-label="scrollable force tabs example"
                        className={classes.stickToBottom}
                    >
                        <Tab label="Line" icon={<ShowChartIcon />} {...a11yProps(0)} />
                        <Tab label="Bar" icon={<BarChartIcon />} {...a11yProps(1)} />
                        <Tab label="Mark" icon={<FiberManualRecordIcon />} {...a11yProps(2)} />
                        <Tab label="Hexbin" icon={<BlurOnIcon />} {...a11yProps(3)} />
                        <Tab label="Polygon" icon={<GraphicEqIcon />} {...a11yProps(4)} />
                        <Tab label="Donut" icon={<DonutLargeIcon />} {...a11yProps(5)} />
                        <Tab label="Heatmap" icon={<StreetviewIcon />} {...a11yProps(6)} />
                    </Tabs>
                </AppBar>
            </div>
        </div>
    );
}
