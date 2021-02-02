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
                    height={props.currentLineVisualisation.height}
                    width={props.currentLineVisualisation.width}
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
                            strokeWidth: props.currentLineVisualisation.lineWidth,
                        }}
                        strokeStyle={props.currentLineVisualisation.lineStyle}
                        opacity={props.currentLineVisualisation.opacity}
                        curve={props.currentLineVisualisation.curve}
                        data={props.currentLineVisualisation.data}
                        color={props.currentLineVisualisation.colour}
                    />
                </XYPlot>
            </Box>
        </Box>
    );
}
const mapStateToProps = (state: any) => ({
    currentLineVisualisation: state.currentLineVisualisation,
    linePlotOptions: state.linePlotOptions,
});
export default connect(mapStateToProps, {})(LineSeriesVis);
