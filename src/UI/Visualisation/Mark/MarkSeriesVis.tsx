import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { HorizontalGridLines, MarkSeries, VerticalGridLines, XAxis, XYPlot, YAxis } from 'react-vis';
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
        >
            <Box>
                <XYPlot
                    id={'mark-series-vis'}
                    height={props.currentMarkVisual.height}
                    width={props.currentMarkVisual.width}
                    margin={{ bottom: 70, top: 80, left: 70, right: 70 }}
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
                    <MarkSeries
                        strokeWidth={2}
                        stroke={props.currentMarkVisual.stroke}
                        opacity={props.currentMarkVisual.opacity}
                        sizeRange={[5, 15]}
                        fill={props.currentMarkVisual.colour}
                        data={props.currentMarkVisual.data}
                    />
                </XYPlot>
            </Box>
        </Box>
    );
}
const mapStateToProps = (state: any) => ({
    currentMarkVisual: state.currentMarkVisual,
});
export default connect(mapStateToProps, {})(MarkSeriesVis);
