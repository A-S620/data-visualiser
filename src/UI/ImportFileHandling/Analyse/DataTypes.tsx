import React from 'react';
import {
    Box,
    Typography,
    Select,
    Table,
    Paper,
    TableHead,
    TableCell,
    TableRow,
    Button,
    TableBody,
    TableContainer,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { FieldTypes } from '../../../Interfaces/Analyse/IAnalysedFileData';
import { AnalyseFileHandler } from '../../../UIHandling/AnalyseFileHandler';
import { AlertType } from '../../../Interfaces/Notification/INotification';
import { NotificationsHandler } from '../../../UIHandling/NotificationsHandler';
import AlertNotification from '../../Notifications/AlertNotification';
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
    dialogPaper: {
        width: '500px',
        height: '700px',
    },
    textColor: {
        color: theme.palette.text.primary,
    },
}));
const fields: Array<object> = [];
function DataTypes(props: any) {
    const classes = useStyles();
    const [submitIsDisabled, setSubmitIsDisabled] = React.useState(true);
    const [notifications, setNotifications] = React.useState<{
        outcome: AlertType | undefined;
        outcomeMessage: string;
        errors: NotificationsHandler;
    }>({
        outcome: undefined,
        outcomeMessage: '',
        errors: new NotificationsHandler(),
    });
    function addField(fieldToAdd: { field: string; fieldType: FieldTypes }) {
        if (!fields.includes(fieldToAdd)) {
            for (let objIndex = 0; objIndex < fields.length; objIndex += 1) {
                const values = Object.values(fields[objIndex]);
                if (values[0] === fieldToAdd.field) {
                    fields[objIndex] = fieldToAdd;
                    return;
                }
            }
            fields.push(fieldToAdd);
            console.log(fields);
            if (fields.length === props.dataFields.length) {
                setSubmitIsDisabled(false);
            }
        }
    }
    function analyseFile() {
        const analyseFileHandler = new AnalyseFileHandler();
        const errors = analyseFileHandler.validateAnalysedData(fields);
        if (errors.isEmpty()) {
            try {
                setNotifications({
                    ...notifications,
                    outcome: AlertType.SUCCESS,
                    outcomeMessage: 'Field Types Validated',
                });
            } catch (e) {
                setNotifications({
                    ...notifications,
                    outcome: AlertType.FAILED,
                    outcomeMessage: `${e.notification}`,
                });
            }
        } else {
            setNotifications({
                ...notifications,
                errors: errors,
            });
        }
    }
    return (
        <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-start" id="field-types">
            <Box style={{ height: '50%', width: '50%' }} id={'alert-area'}>
                {notifications.outcome && (
                    <AlertNotification alert={notifications.outcome} notification={notifications.outcomeMessage} />
                )}
                {!notifications.errors.isEmpty() && (
                    <AlertNotification
                        alert={AlertType.FAILED}
                        notification={`Error(s): ${notifications.errors.notification()}`}
                    />
                )}
            </Box>
            <Box
                id="all-fields"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                mx={10}
                my={10}
            >
                <Typography id={'field-types-title'} className={classes.statDescription}>
                    Select Field Types:
                </Typography>
                <TableContainer component={Paper} id={'fields-table'}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow id={'table-headings'}>
                                <TableCell id={'field-name-cell'}>Field Name</TableCell>
                                <TableCell align={'center'} id={'field-type-cell'}>
                                    Field Type
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.dataFields.map((value: string) => (
                                <TableRow key={value + '-row'} id={value + '-table-row'}>
                                    <TableCell component="th" scope="row" id={value + '-field-cell'}>
                                        {value}
                                    </TableCell>
                                    <TableCell id={value + '-select-cell'}>
                                        <Select
                                            id={value + '-select'}
                                            // defaultValue={FieldTypes.IGNORE}
                                            style={{ minWidth: 150 }}
                                            name={value + '-select'}
                                            onChange={(event) => {
                                                const fieldToAdd: any = {
                                                    field: value,
                                                    fieldType: event.target.value as FieldTypes,
                                                };
                                                addField(fieldToAdd);
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
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box
                    id="all-fields"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    mx={10}
                    my={10}
                >
                    <Button
                        disabled={submitIsDisabled}
                        variant="outlined"
                        color="primary"
                        id={'analyse-file-button'}
                        style={{ marginRight: 10, borderRadius: '5em' }}
                        onClick={analyseFile}
                    >
                        Analyse File
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
const mapStateToProps = (state: any) => ({
    dataFields: state.importedData.dataFields,
    dataObjects: state.importedData.dataObjects,
});
export default connect(mapStateToProps, {})(DataTypes);