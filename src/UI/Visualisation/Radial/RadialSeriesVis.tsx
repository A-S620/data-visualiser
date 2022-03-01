import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { RadialChart } from 'react-vis';
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
function RadialSeriesVis(props: any) {
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
            id={'radial-series'}
        >
            <Box>
                <RadialChart
                    margin={{ bottom: 70, top: 80, left: 70, right: 70 }}
                    height={props.currentRadialVisual.height ? props.currentRadialVisual.height : 0}
                    width={props.currentRadialVisual.width ? props.currentRadialVisual.width : 0}
                    data={props.currentRadialVisual.data ? props.currentRadialVisual.data : []}
                    labelsRadiusMultiplier={1.1}
                    labelsStyle={{
                        stroke: 'none',
                        fill: '#6b6b76',
                    }}
                    showLabels
                />
            </Box>
        </Box>
    );
}
const mapStateToProps = (state: any) => ({
    currentRadialVisual: state.currentRadialVisual,
});
export default connect(mapStateToProps, {})(RadialSeriesVis);
