import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import { LineSeries, XYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis } from 'react-vis';
import { connect } from 'react-redux';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
    },
}));
const data = [
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 },
];
function LineSeriesVis(props: any) {
    const classes = useStyles();
    return (
        <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            className={classes.root}
            id={'line-series'}
            mx={15}
        >
            <XYPlot height={800} width={800}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <LineSeries data={data} style={{ strokeLinejoin: 'round' }} color="red" />
            </XYPlot>
        </Box>
    );
}
const mapStateToProps = (state: any) => ({
    linePlotOptions: state.lineOptions,
});
export default connect(mapStateToProps, {})(LineSeriesVis);
