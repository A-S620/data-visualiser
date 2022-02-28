import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { AreaSeries, HorizontalGridLines, VerticalGridLines, XAxis, XYPlot, YAxis } from 'react-vis';
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
function AreaSeriesVis(props: any) {
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
            id={'area-series'}
        >
            <Box>
                <XYPlot
                    id={'area-series-vis'}
                    height={props.currentAreaVisual.height}
                    width={props.currentAreaVisual.width}
                    margin={{ left: 75 }}
                >
                    <HorizontalGridLines style={{ stroke: '#B7E9ED' }} />
                    <VerticalGridLines style={{ stroke: '#B7E9ED' }} />
                    <XAxis
                        //@ts-ignore
                        style={{ text: { stroke: 'none', fill: '#6b6b76', margin: 5, padding: 5 } }}
                    />
                    <YAxis
                        // left={50}
                        style={{ text: { stroke: 'none', fill: '#6b6b76', margin: 5, padding: 5 } }}
                    />
                    <AreaSeries
                        stroke={props.currentAreaVisual.stroke}
                        fill={props.currentAreaVisual.fill}
                        opacity={props.currentAreaVisual.opacity}
                        data={props.currentAreaVisual.data}
                    />
                </XYPlot>
            </Box>
        </Box>
    );
}
const mapStateToProps = (state: any) => ({
    currentAreaVisual: state.currentAreaVisual,
});
export default connect(mapStateToProps, {})(AreaSeriesVis);