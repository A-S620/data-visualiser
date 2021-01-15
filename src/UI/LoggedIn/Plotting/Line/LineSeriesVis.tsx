import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
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
} from 'react-vis';
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
    const [lastDrawLocation, setLastDrawLocation] = React.useState<{
        lastDrawLocation: any;
    }>();
    const [selectedArea, setSelectedArea] = React.useState<{
        selectedArea: HighlightArea | null;
    }>();
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
            <XYPlot
                height={props.currentVisualisation.height}
                width={props.currentVisualisation.width}
                animation
                // @ts-ignore
                xDomain={lastDrawLocation && [lastDrawLocation.left, lastDrawLocation.right]}
                // @ts-ignore
                yDomain={lastDrawLocation && [lastDrawLocation.bottom, lastDrawLocation.top]}
            >
                <HorizontalGridLines style={{ stroke: '#B7E9ED' }} />
                <VerticalGridLines style={{ stroke: '#B7E9ED' }} />
                <XAxis title={props.linePlotOptions.xValue} />
                <YAxis title={props.linePlotOptions.yValue} />

                <LineSeries
                    strokeStyle={props.currentVisualisation.lineStyle}
                    opacity={props.currentVisualisation.opacity}
                    curve={props.currentVisualisation.curve}
                    data={props.currentVisualisation.data}
                    color={props.currentVisualisation.colour}
                />
                <Highlight
                    onBrushEnd={(area) =>
                        setSelectedArea({
                            selectedArea: area,
                        })
                    }
                    onDrag={(area) => {
                        setLastDrawLocation({
                            ...lastDrawLocation,
                            lastDrawLocation: {
                                // @ts-ignore
                                bottom: selectedArea.bottom + (area.top - area.bottom),
                                // @ts-ignore
                                left: selectedArea.left - (area.right - area.left),
                                // @ts-ignore
                                right: selectedArea.right - (area.right - area.left),
                                // @ts-ignore
                                top: selectedArea.top + (area.top - area.bottom),
                            },
                        });
                    }}
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
