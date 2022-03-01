import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { connect } from 'react-redux';
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    VerticalBarSeriesCanvas,
} from 'react-vis';
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
function BarSeriesVis(props: any) {
    const classes = useStyles();
    const [useCanvas] = React.useState(false);
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
    return (
        <Box
            display="flex"
            flexWrap="nowrap"
            overflow="auto"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            className={classes.root}
            id={'bar-series'}
        >
            <Box>
                <XYPlot
                    id={'bar-series-vis'}
                    xType="ordinal"
                    width={props.currentBarVisual.width}
                    height={props.currentBarVisual.height}
                    margin={{ bottom: 70, top: 80, left: 70, right: 70 }}
                    xDistance={100}
                >
                    <VerticalGridLines style={{ stroke: '#B7E9ED' }} />
                    <HorizontalGridLines style={{ stroke: '#B7E9ED' }} />
                    <BarSeries
                        barWidth={props.currentBarVisual.barWidth}
                        color={props.currentBarVisual.colour}
                        opacity={props.currentBarVisual.opacity}
                        stroke={props.currentBarVisual.stroke}
                        className="vertical-bar-series-example"
                        data={props.currentBarVisual.data}
                    />
                    <XAxis
                        //@ts-ignore
                        style={{
                            text: {
                                stroke: 'none',
                                fill: '#6b6b76',
                                fontWeight: 600,
                                margin: 5,
                                padding: 5,
                            },
                        }}
                        tickLabelAngle={-90}
                    />
                    <YAxis
                        //@ts-ignore
                        style={{ text: { stroke: 'none', fill: '#6b6b76', fontWeight: 600, margin: 5, padding: 5 } }}
                    />
                </XYPlot>
            </Box>
        </Box>
    );
}
const mapStateToProps = (state: any) => ({
    currentBarVisual: state.currentBarVisual,
    barSeriesOptions: state.barSeriesOptions,
});
export default connect(mapStateToProps, {})(BarSeriesVis);
