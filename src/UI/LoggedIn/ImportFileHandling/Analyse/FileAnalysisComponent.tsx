import React from 'react';
import { Box, Typography, Chip } from '@material-ui/core';
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
    depositContext: {
        flex: 1,
    },
    paper2: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 140,
    },
}));
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
                <Typography component="h2" variant="h4" gutterBottom>
                    File Analysis
                </Typography>
            </Box>

            <Box my={15} id="field-types-metrics1" display="flex" flexDirection="row" className={classes.boxSize}>
                <Box display="flex" flexDirection="column" id="total-fields" mx={5}>
                    <Typography>Total Fields</Typography>
                    <Typography component="p" variant="h4">
                        {props.dataFields.length}
                    </Typography>
                </Box>
                <Box display="flex" flexDirection="column" id="interval-fields" mx={5}>
                    <Typography>Interval Fields</Typography>
                    <Typography component="p" variant="h4">
                        {props.intervalFields.length}
                    </Typography>
                </Box>
                <Box display="flex" flexDirection="column" id="nominal-fields" mx={5}>
                    <Typography>Nominal Fields</Typography>
                    <Typography component="p" variant="h4">
                        {props.nominalFields.length}
                    </Typography>
                </Box>
            </Box>
            <Box my={15} id="field-types-metrics2" display="flex" flexDirection="row" className={classes.boxSize}>
                <Box display="flex" flexDirection="column" id="ordinal-fields" mx={5}>
                    <Typography>Ordinal Fields</Typography>
                    <Typography component="p" variant="h4">
                        {props.ordinalFields.length}
                    </Typography>
                </Box>
                <Box display="flex" flexDirection="column" id="binary-fields" mx={5}>
                    <Typography>Binary Fields</Typography>
                    <Typography component="p" variant="h4">
                        {props.binaryFields.length}
                    </Typography>
                </Box>
            </Box>
            <Box id="all-fields" className={classes.boxSize} my={15}>
                <Typography className={classes.statDescription}>All Data fields:</Typography>
                {props.dataFields.map((fields: string) => (
                    <Chip className={classes.chips} label={fields} id={fields + '-chip'} />
                ))}
            </Box>
            <Box id="example-object" className={classes.boxSize} my={15}>
                <Typography className={classes.statDescription}>Example Data Object:</Typography>
                <Box id={'json-object'}>
                    <ReactJson
                        name={'Example Object'}
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
    nominalFields: state.analysedData.nominalFields,
    nominalDataObjects: state.analysedData.nominalDataObjects,
    ordinalFields: state.analysedData.ordinalFields,
    ordinalDataObjects: state.analysedData.ordinalDataObjects,
    binaryFields: state.analysedData.binaryFields,
    binaryDataObjects: state.analysedData.binaryDataObjects,
    dataFields: state.importedData.dataFields,
    dataObjects: state.importedData.dataObjects,
});
export default connect(mapStateToProps, {})(FileAnalysisComponent);
