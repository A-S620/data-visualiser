import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { HorizontalGridLines, LineSeries, VerticalGridLines, XAxis, XYPlot, YAxis } from 'react-vis';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
    },
    statDescription: {
        margin: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.primary,
    },
}));
function MarkSeriesVis(props: any) {
    const classes = useStyles();
    return (
        <Box
            display="flex"
            flexWrap="nowrap"
            overflow="auto"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            className={classes.root}
            id={'mark-series'}
            mx={15}
        ></Box>
    );
}
const mapStateToProps = (state: any) => ({
    currentMarkVisualisation: state.currentMarkVisualisation,
    markSeriesOptions: state.markSeriesOptions,
});
export default connect(mapStateToProps, {})(MarkSeriesVis);
