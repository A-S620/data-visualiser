import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, List } from '@material-ui/core';
import {
    LineSeries,
    XYPlot,
    VerticalGridLines,
    HorizontalGridLines,
    XAxis,
    YAxis,
    ChartLabel,
    Highlight,
    HighlightArea,
    Borders,
} from 'react-vis';
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';

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
    function formatAxisValue(value: number): number {
        if (value > 1000) {
            return value / 100;
        }
        return value;
    }
    return (
        <Box
            display="flex"
            flexWrap="nowrap"
            overflow="auto"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            className={classes.root}
            id={'line-series'}
            mx={15}
        >
            <List>
                <XYPlot height={props.currentVisualisation.height} width={props.currentVisualisation.width} animation>
                    <HorizontalGridLines style={{ stroke: '#B7E9ED' }} />
                    <VerticalGridLines style={{ stroke: '#B7E9ED' }} />
                    <XAxis
                        // @ts-ignore
                        tickFormat={(v) => formatAxisValue(v)}
                        style={{ text: { stroke: 'none', fill: '#6b6b76', fontWeight: 600, margin: 5 } }}
                    />
                    <YAxis
                        // left={50}
                        // @ts-ignore
                        tickFormat={(v) => formatAxisValue(v)}
                        style={{ text: { stroke: 'none', fill: '#6b6b76', fontWeight: 600, margin: 5 } }}
                    />
                    <ChartLabel
                        style={{ text: { stroke: 'none', fill: '#6b6b76', fontWeight: 600, margin: 5 } }}
                        text={props.linePlotOptions.xValue}
                        className="alt-x-label"
                        includeMargin={false}
                        xPercent={0.025}
                        yPercent={1.01}
                    />

                    <ChartLabel
                        style={{
                            transform: 'rotate(-90)',
                            textAnchor: 'end',
                            text: { stroke: 'none', fill: '#6b6b76', fontWeight: 600, margin: 5 },
                        }}
                        text={props.linePlotOptions.yValue}
                        className="alt-y-label"
                        includeMargin={false}
                        xPercent={0.06}
                        yPercent={0.06}
                    />
                    <LineSeries
                        style={{
                            strokeLinejoin: 'round',
                            strokeWidth: props.currentVisualisation.lineWidth,
                        }}
                        strokeStyle={props.currentVisualisation.lineStyle}
                        opacity={props.currentVisualisation.opacity}
                        curve={props.currentVisualisation.curve}
                        data={props.currentVisualisation.data}
                        color={props.currentVisualisation.colour}
                    />
                </XYPlot>
            </List>
        </Box>
    );
}
const mapStateToProps = (state: any) => ({
    currentVisualisation: state.currentVisualisation,
    linePlotOptions: state.linePlotOptions,
});
export default connect(mapStateToProps, {})(LineSeriesVis);
