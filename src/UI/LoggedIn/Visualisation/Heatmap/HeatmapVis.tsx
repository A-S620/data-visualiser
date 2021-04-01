import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { HeatmapSeries, HorizontalGridLines, VerticalGridLines, XAxis, XYPlot, YAxis } from 'react-vis';
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
function HeatmapVis(props: any) {
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
            id={'heatmap-series'}
            mx={15}
        >
            <Box>
                <XYPlot
                    id={'heatmap-series'}
                    height={props.currentHeatmapVisualisation.height}
                    width={props.currentHeatmapVisualisation.width}
                    margin={{ left: 75 }}
                >
                    <HorizontalGridLines style={{ stroke: '#B7E9ED' }} />
                    <VerticalGridLines style={{ stroke: '#B7E9ED' }} />
                    <XAxis
                        //@ts-ignore
                        style={{ text: { stroke: 'none', fill: '#6b6b76', fontWeight: 600, margin: 5, padding: 5 } }}
                    />
                    <YAxis
                        style={{ text: { stroke: 'none', fill: '#6b6b76', fontWeight: 600, margin: 5, padding: 5 } }}
                    />
                    <HeatmapSeries
                        stroke={props.currentHeatmapVisualisation.stroke}
                        opacity={props.currentHeatmapVisualisation.opacity}
                        sizeRange={[5, 15]}
                        fill={props.currentHeatmapVisualisation.fill}
                        data={props.currentHeatmapVisualisation.data}
                    />
                </XYPlot>
            </Box>
        </Box>
    );
}
const mapStateToProps = (state: any) => ({
    currentHeatmapVisualisation: state.currentHeatmapVisualisation,
    heatmapSeriesOptions: state.heatmapSeriesOptions,
});
export default connect(mapStateToProps, {})(HeatmapVis);
