import React from 'react';
import { Box, CssBaseline, Typography, CircularProgress, Chip, Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ReactJson from 'react-json-view';
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
        color: theme.palette.text.primary,
    },
    donutChart: {
        margin: theme.spacing(2),
    },
    exampleObject: {
        textColor: theme.palette.text.primary,
    },
    boxSize: {
        maxWidth: '300px',
    },
}));
function calcIntColumnsPercentage(intColumns: number, allColumns: number): number {
    if (intColumns === 0 || allColumns === 0) {
        return 0;
    }
    return Math.round((intColumns / allColumns) * 100);
}
function getExampleObject(intervalDataObjects: Array<object>): Object {
    if (intervalDataObjects.length === 0) {
        return {};
    }
    const [firstObject] = intervalDataObjects;
    const objectToReturn: Object = {};
    for (const [key, value] of Object.entries(firstObject)) {
        // @ts-ignore
        objectToReturn[key] = value;
    }
    return objectToReturn;
}
function calcNumberOfIgnoredObjects(intervalDataObjects: Array<object>, dataObjects: Array<object>): number {
    const analysedDataLength = intervalDataObjects.length;
    const importedDataLength = dataObjects.length;
    return importedDataLength - analysedDataLength;
}
function FileAnalysisComponent(props: any) {
    const classes = useStyles();
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            id="file-analysis"
        >
            <Box id="title">
                <Typography variant="h4" style={{ paddingBottom: '20px' }} id="file-analysis-title">
                    File Analysis:
                </Typography>
            </Box>
            <Box my={15} id="percent-interval-fields">
                <Typography className={classes.statDescription}>Interval fields in file:</Typography>
                <Box position="relative" display="inline-flex" className={classes.donutChart}>
                    <CircularProgress
                        id={'interval-circular-progress'}
                        variant="determinate"
                        {...props}
                        color="primary"
                        thickness={7}
                        size={100}
                        value={calcIntColumnsPercentage(props.intervalFields.length, props.dataFields.length)}
                    />
                    <Box
                        id={'interval-circular-progress-text'}
                        top={0}
                        left={0}
                        bottom={0}
                        right={0}
                        position="absolute"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Typography variant="h6" component="div" color="textPrimary">{`${calcIntColumnsPercentage(
                            props.intervalFields.length,
                            props.dataFields.length
                        )}%`}</Typography>
                    </Box>
                </Box>
            </Box>
            <Box id="interval-fields" className={classes.boxSize}>
                {props.intervalFields.map((integerField: string) => (
                    <Chip className={classes.chips} label={integerField} id={integerField + '-chip'} />
                ))}
            </Box>
            <Box my={15} id="ignored-objects">
                <Typography className={classes.statDescription}>Number of Ignored Data Objects:</Typography>
                <Typography className={classes.statDescription}>
                    {`${calcNumberOfIgnoredObjects(props.intervalDataObjects, props.dataObjects)}`}
                </Typography>
            </Box>
            <Box id="example-object" className={classes.boxSize}>
                <Typography className={classes.statDescription}>Example Data Object:</Typography>
                <Box id={'json-object'}>
                    <ReactJson
                        src={getExampleObject(props.dataObjects)}
                        theme="summerfruit:inverted"
                        displayDataTypes={false}
                        displayObjectSize={false}
                    />
                </Box>
            </Box>
        </Box>
    );
}

const mapStateToProps = (state: any) => ({
    intervalFields: state.analysedData.intervalFields,
    intervalDataObjects: state.analysedData.intervalDataObjects,
    dataFields: state.importedData.dataFields,
    dataObjects: state.importedData.dataObjects,
});
export default connect(mapStateToProps, {})(FileAnalysisComponent);
