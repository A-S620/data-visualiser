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
                    id={'line-series-vis'}
                    height={props.currentLineVisual.height}
                    width={props.currentLineVisual.width}
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
                        style={{ text: { stroke: 'none', fill: '#6b6b76', fontWeight: 600, margin: 5, padding: 5 } }}
                    />

                    <LineSeries
                        style={{
                            strokeLinejoin: 'round',
                            strokeWidth: props.currentLineVisual.lineWidth,
                        }}
                        strokeStyle={props.currentLineVisual.lineStyle}
                        opacity={props.currentLineVisual.opacity}
                        curve={props.currentLineVisual.curve}
                        data={props.currentLineVisual.data}
                        stroke={props.currentLineVisual.stroke}
                    />
                </XYPlot>
            </Box>
        </Box>
    );
}
const mapStateToProps = (state: any) => ({
    currentLineVisual: state.currentLineVisual,
    lineSeriesOptions: state.lineSeriesOptions,
});
export default connect(mapStateToProps, {})(LineSeriesVis);
