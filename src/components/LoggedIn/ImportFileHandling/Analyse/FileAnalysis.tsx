import React from 'react';
import { Box, CssBaseline, Typography, CircularProgress, Chip, Grid, Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    paper: {
        height: '100%',
        margin: theme.spacing(2),
        padding: theme.spacing(2),
    },
    chips: {
        backgroundColor: theme.palette.secondary.main,
        margin: theme.spacing(1),
        textColor: theme.palette.secondary.contrastText,
    },
    statDescription: {
        margin: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    donutChart: {
        margin: theme.spacing(2),
    },
    exampleObject: {
        textColor: theme.palette.text.primary,
    },
}));
function calcIntColumnsPercentage(intColumns: number, allColumns: number): number {
    if (intColumns === 0 || allColumns === 0) {
        return 0;
    }
    return Math.round((intColumns / allColumns) * 100);
}
function getExampleObject(integerDataObjects: Array<object>): Object {
    if (integerDataObjects.length === 0) {
        return {};
    }
    const [firstObject] = integerDataObjects;
    const objectToReturn: Object = {};
    for (const [key, value] of Object.entries(firstObject)) {
        // @ts-ignore
        objectToReturn[key] = value;
    }
    return objectToReturn;
}
function FileAnalysis(props: any) {
    const classes = useStyles();
    return (
        <Grid direction="column" justify="flex-start" alignItems="flex-start" id="file-analysis">
            <CssBaseline />
            <Typography variant="h4" style={{ paddingBottom: '20px' }}>
                File Analysis:
            </Typography>
            <Typography className={classes.statDescription}>Percentage of Integer Columns in file:</Typography>
            <Box position="relative" display="inline-flex" className={classes.donutChart}>
                <CircularProgress
                    variant="determinate"
                    {...props}
                    color="primary"
                    thickness={7}
                    size={200}
                    value={calcIntColumnsPercentage(props.integerFields.length, props.dataFields.length)}
                />
                <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Typography variant="h3" component="div" color="textPrimary">{`${calcIntColumnsPercentage(
                        props.integerFields.length,
                        props.dataFields.length
                    )}%`}</Typography>
                </Box>
            </Box>
            <Typography className={classes.statDescription}>Integer Columns:</Typography>
            {props.integerFields.map((integerField: string) => (
                <Chip className={classes.chips} label={integerField} />
            ))}
            <Typography className={classes.statDescription}>Example Data Object:</Typography>
            <Typography variant="h6" className={classes.exampleObject}>{`${JSON.stringify(
                getExampleObject(props.integerDataObjects)
            )}`}</Typography>
        </Grid>
    );
}

const mapStateToProps = (state: any) => ({
    integerFields: state.analysedData.integerFields,
    integerDataObjects: state.analysedData.integerDataObjects,
    dataFields: state.importedData.dataFields,
});
export default connect(mapStateToProps, {})(FileAnalysis);
