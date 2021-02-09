import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
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
function BarSeriesVis(props: any) {
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
            id={'bar-series'}
            mx={15}
        >
            <Box></Box>
        </Box>
    );
}
const mapStateToProps = (state: any) => ({
    currentBarVisualisation: state.currentBarVisualisation,
    barSeriesOptions: state.barSeriesOptions,
});
export default connect(mapStateToProps, {})(BarSeriesVis);
