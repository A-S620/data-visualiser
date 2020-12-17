import React from 'react';
import { Box, Container, CssBaseline, Typography, CircularProgress } from '@material-ui/core';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 220,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
function calcIntColumnsPercentage(intColumns: number, allColumns: number): number {
    if (intColumns === 0 || allColumns === 0) {
        return 0;
    }
    return Math.round((intColumns / allColumns) * 100);
}
function AnalyseFile(props: any) {
    return (
        <Container component="main">
            <CssBaseline />
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
export default connect(mapStateToProps, {})(AnalyseFile);
