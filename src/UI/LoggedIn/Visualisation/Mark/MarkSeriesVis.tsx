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
            mx={15}
        >
            <Box>
                <XYPlot
                    id={'mark-series-vis'}
                    height={props.currentMarkVisualisation.height}
                    width={props.currentMarkVisualisation.width}
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
                    <MarkSeries
                        strokeWidth={2}
                        stroke={props.currentMarkVisualisation.stroke}
                        opacity={props.currentMarkVisualisation.opacity}
                        sizeRange={[5, 15]}
                        fill={props.currentMarkVisualisation.colour}
                        data={props.currentMarkVisualisation.data}
                    />
                </XYPlot>
            </Box>
        </Box>
    );
}
const mapStateToProps = (state: any) => ({
    currentMarkVisualisation: state.currentMarkVisualisation,
});
export default connect(mapStateToProps, {})(MarkSeriesVis);
