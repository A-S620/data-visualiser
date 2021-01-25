import React from 'react';
import {
    Box,
    CssBaseline,
    Typography,
    CircularProgress,
    Chip,
    Grid,
    ListItem,
    Select,
    FormControl,
    Table,
    Paper,
    TableHead,
    TableCell,
    TableRow,
    LinearProgress,
} from '@material-ui/core';
import { LinearProgressProps } from '@material-ui/core/LinearProgress';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { FieldTypes } from '../../../../interfaces/import/IAnalysedFileData';
import { TableContainer } from '@material-ui/core';
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
        maxWidth: '500px',
    },
    table: {
        minWidth: 350,
    },
}));
function LinearProgressWithLabel(progProps: LinearProgressProps & { value: number }) {
    return (
        <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" {...progProps} />
            </Box>
            <Box minWidth={35}>
                <Typography variant="body2" color="textSecondary">{`${Math.round(progProps.value)}%`}</Typography>
            </Box>
        </Box>
    );
}
const fields: Array<object> = [];
function FileTypes(props: any) {
    const classes = useStyles();
    function addField(fieldToAdd: { field: string; fieldType: FieldTypes }) {
        if (!fields.includes(fieldToAdd)) {
            for (var objIndex = 0; objIndex < fields.length; objIndex += 1) {
                const values = Object.values(fields[objIndex]);
                if (values[0] === fieldToAdd.field) {
                    fields[objIndex] = fieldToAdd;
                    return;
                }
            }
            fields.push(fieldToAdd);
        }
    }
    return (
        <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-start" id="field-types">
            <Box
                id="all-fields"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                mx={10}
                my={10}
            >
                <Typography className={classes.statDescription}>Select Field Types:</Typography>
                <TableContainer component={Paper}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Field Name</TableCell>
                                <TableCell align={'center'}>Field Type</TableCell>
                            </TableRow>
                        </TableHead>
                        {props.dataFields.map((value: string) => (
                            <TableRow key={value + '-row'}>
                                <TableCell component="th" scope="row" id={value + '-field'}>
                                    {value}
                                </TableCell>
                                <TableCell>
                                    <FormControl style={{ minWidth: 150 }}>
                                        <Select
                                            id={value + '-field-type-select'}
                                            onChange={(event) => {
                                                const fieldToAdd: any = {
                                                    field: value,
                                                    fieldType: event.target.value as FieldTypes,
                                                };
                                                addField(fieldToAdd);
                                                console.log(fields);
                                            }}
                                        >
                                            <option value={FieldTypes.INTERVAL}>Interval</option>
                                            <option value={FieldTypes.NOMINAL}>Nominal</option>
                                            <option value={FieldTypes.ORDINAL}>Ordinal</option>
                                            <option value={FieldTypes.BINARY}>Binary</option>
                                            <option value={FieldTypes.UNARY}>Unary</option>
                                            <option value={FieldTypes.TIME}>Time</option>
                                            <option value={FieldTypes.DATE}>Date</option>
                                            <option value={FieldTypes.IGNORE}>Ignore</option>
                                        </Select>
                                    </FormControl>
                                </TableCell>
                            </TableRow>
                        ))}
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
}
const mapStateToProps = (state: any) => ({
    dataFields: state.importedData.dataFields,
    dataAsObjects: state.importedData.dataAsObjects,
});
export default connect(mapStateToProps, {})(FileTypes);
