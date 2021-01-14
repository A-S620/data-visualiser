import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import { LineSeries, XYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, ChartLabel } from 'react-vis';
import { connect } from 'react-redux';
import { LineSeriesVisHandler } from '../../../../UIHandling/LineSeriesVisHandler';

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
            <XYPlot height={props.currentVisualisation.height} width={400}>
                <HorizontalGridLines style={{ stroke: '#B7E9ED' }} />
                <VerticalGridLines style={{ stroke: '#B7E9ED' }} />
                <XAxis />
                <YAxis />
                <ChartLabel
                    text={props.linePlotOptions.xValue}
                    className="alt-x-label"
                    includeMargin={false}
                    xPercent={0.025}
                    yPercent={1.01}
                />

                <ChartLabel
                    text={props.linePlotOptions.yValue}
                    className="alt-y-label"
                    includeMargin={false}
                    xPercent={0.06}
                    yPercent={0.06}
                    style={{
                        transform: 'rotate(-90)',
                        textAnchor: 'end',
                    }}
                />
                <LineSeries
                    strokeStyle={props.currentVisualisation.lineStyle}
                    // style={{ strokeWidth: props.currentVisualisation.width }}
                    opacity={props.currentVisualisation.opacity}
                    curve={props.currentVisualisation.curve}
                    data={props.currentVisualisation.data}
                    color={props.currentVisualisation.colour}
                />
            </XYPlot>
        </Box>
    );
}
const mapStateToProps = (state: any) => ({
    currentVisualisation: state.currentVisualisation,
    linePlotOptions: state.linePlotOptions,
});
export default connect(mapStateToProps, {})(LineSeriesVis);
