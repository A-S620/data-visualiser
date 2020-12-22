import React from 'react';
import { Box, Container, CssBaseline, Typography, CircularProgress, Chip } from '@material-ui/core';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    chips: {
        backgroundColor: theme.palette.secondary.main,
        margin: theme.spacing(1),
    },
}));
function calcIntColumnsPercentage(intColumns: number, allColumns: number): number {
    if (intColumns === 0 || allColumns === 0) {
        return 0;
    }
    return Math.round((intColumns / allColumns) * 100);
}
function FileAnalysis(props: any) {
    const classes = useStyles();
    return (
        <Container component="main">
            <CssBaseline />
            {props.integerFields.map((integerField: string) => (
                <Chip className={classes.chips} label={integerField} />
            ))}
            <Typography>{props.integerFields}</Typography>
            <Box position="relative" display="inline-flex">
                <CircularProgress
                    variant="determinate"
                    {...props}
                    color="primary"
                    thickness={10}
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
                    <Typography
                        variant="caption"
                        component="div"
                        color="primary"
                    >{`${props.integerFields.length}`}</Typography>
                </Box>
            </Box>
        </Container>
    );
}

const mapStateToProps = (state: any) => ({
    integerFields: state.analysedData.integerFields,
    integerDataObjects: state.analysedData.integerDataObjects,
    dataFields: state.importedData.dataFields,
});
export default connect(mapStateToProps, {})(FileAnalysis);
