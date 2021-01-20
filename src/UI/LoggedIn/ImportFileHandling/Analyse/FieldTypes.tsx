import React from 'react';
import { Box, CssBaseline, Typography, CircularProgress, Chip, Grid } from '@material-ui/core';
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
function FileTypes(props: any) {
    const classes = useStyles();
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            id="file-analysis"
            className={classes.boxSize}
        >
            <Box id="all-fields">
                <Typography className={classes.statDescription}>All Fields:</Typography>
                {props.dataFields.map((value: string) => {
                    <Typography>{value}</Typography>;
                })}
            </Box>
        </Box>
    );
}
const mapStateToProps = (state: any) => ({
    dataFields: state.importedData.dataFields,
    dataAsObjects: state.importedData.dataAsObjects,
});
export default connect(mapStateToProps, {})(FileTypes);
