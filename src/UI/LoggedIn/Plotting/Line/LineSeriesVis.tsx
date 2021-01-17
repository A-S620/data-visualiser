import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
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
            flexWrap="nowrap"
            overflow="auto"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            className={classes.root}
            id={'line-series'}
            mx={15}
        >
            <Box>
                <XYPlot
                    height={props.currentVisualisation.height}
                    width={props.currentVisualisation.width}
                    margin={{ left: 75 }}
                >
                    <HorizontalGridLines style={{ stroke: '#B7E9ED' }} />
                    <VerticalGridLines style={{ stroke: '#B7E9ED' }} />
                    <XAxis
                        //@ts-ignore
                        style={{ text: { stroke: 'none', fill: '#6b6b76', fontWeight: 600, margin: 5, padding: 5 } }}
                    />
                    <YAxis
                        // left={50}
                        //@ts-ignore
                        style={{ text: { stroke: 'none', fill: '#6b6b76', fontWeight: 600, margin: 5, padding: 5 } }}
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
            </Box>
            <Box my={15} id="graph-info">
                <Typography className={classes.statDescription}>Graph Info:</Typography>
                <Typography
                    className={classes.statDescription}
                >{`X Axis - ${props.linePlotOptions.xValue}`}</Typography>
                <Typography
                    className={classes.statDescription}
                >{`Y Axis - ${props.linePlotOptions.yValue}`}</Typography>
            </Box>
        </Box>
    );
}
const mapStateToProps = (state: any) => ({
    currentVisualisation: state.currentVisualisation,
    linePlotOptions: state.linePlotOptions,
});
export default connect(mapStateToProps, {})(LineSeriesVis);
