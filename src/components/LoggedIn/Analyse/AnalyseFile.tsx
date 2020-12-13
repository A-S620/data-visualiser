import React from 'react';
import { Container, CssBaseline, Typography } from '@material-ui/core';
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

function AnalyseFile(props: any) {
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Typography>{props.integerFields}</Typography>
        </Container>
    );
}

const mapStateToProps = (state: any) => ({
    integerFields: state.analysedData.integerFields,
    integerDataObjects: state.analysedData.integerDataObjects,
});
export default connect(mapStateToProps, {})(AnalyseFile);
