import React from 'react';
import { IRadialSeriesOptions } from '../../../../Interfaces/Visualisations/Radial/IRadialSeriesOptions';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, FormControl, FormHelperText, InputLabel, Select, TextField, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

import { AlertType } from '../../../../Interfaces/Notification/INotification';
import { NotificationsHandler } from '../../../../UIHandling/NotificationsHandler';
import AlertNotification from '../../Notifications/AlertNotification';
import { RadialSeriesOptionsHandler } from '../../../../UIHandling/Visualisations/Radial/RadialSeriesOptionsHandler';

const useStyles = makeStyles((theme) => ({
    paper: {
        flexGrow: 1,
        width: '100%',
    },
    root: {
        // width: '100%',
    },
    textColor: {
        color: theme.palette.text.primary,
    },
    helperTextColor: {
        color: theme.palette.text.disabled,
    },
}));
function RadialOptions(props: any) {
    const classes = useStyles();
    const [options, setOptions] = React.useState<{
        column: string;
        height: number;
        width: number;
    }>({
        column: '',
        height: 800,
        width: 800,
    });
    const [notifications, setNotifications] = React.useState<{
        outcome: AlertType | undefined;
        outcomeMessage: string;
        errors: NotificationsHandler;
    }>({
        outcome: undefined,
        outcomeMessage: '',
        errors: new NotificationsHandler(),
    });
    const allValues = [...props.nominalFields, ...props.ordinalFields, ...props.binaryFields];
    function submitIsEnabled(): boolean {
        return !(options.column.length !== 0);
    }
    function validateDataOptions() {
        const optionsToValidate: IRadialSeriesOptions = {
            column: options.column,
            height: options.height,
            width: options.width,
        };
        const validateOptions = new RadialSeriesOptionsHandler(optionsToValidate);
        const errors: NotificationsHandler = validateOptions.validateOptions();
        if (errors.isEmpty()) {
            try {
                setNotifications({
                    ...notifications,
                    outcome: AlertType.SUCCESS,
                    outcomeMessage: 'Options Validated',
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
        <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            className={classes.root}
            id={'radial-plotting-options'}
            mx={15}
        >
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
            <div className={classes.paper}>
                <Box
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                    alignItems="center"
                    className={classes.root}
                    id={'radial-plotting-options'}
                    px={20}
                    py={20}
                >
                    <Typography id={'radial-plotting-title'}>Radial Series Options</Typography>
                    <Box my={15} display="flex" flexDirection="row" justifyContent="center">
                        <FormControl required style={{ minWidth: 200 }} id={'column-value-select'}>
                            <InputLabel className={classes.textColor}>Column</InputLabel>
                            <Select
                                id={'select-column'}
                                onChange={(event) => {
                                    setOptions({
                                        ...options,
                                        column: event.target.value as string,
                                    });
                                }}
                                name="Column Select"
                            >
                                {allValues.map((integerField: string) => (
                                    <option
                                        value={integerField}
                                        id={integerField + '-option'}
                                    >{`${integerField}`}</option>
                                ))}
                            </Select>
                            <FormHelperText className={classes.helperTextColor}>Slice Categories</FormHelperText>
                        </FormControl>
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" id={'size-textfields'}>
                        <TextField
                            type={'number'}
                            id="height-textfield"
                            label="Height"
                            variant="outlined"
                            helperText="Default 800"
                            FormHelperTextProps={{
                                className: classes.helperTextColor,
                            }}
                            InputLabelProps={{
                                className: classes.textColor,
                            }}
                            onChange={(event) => {
                                setOptions({
                                    ...options,
                                    height: parseInt(event.target.value),
                                });
                            }}
                        />
                        <Box mx={5} />
                        <TextField
                            type={'number'}
                            id="width-textfield"
                            label="Width"
                            variant="outlined"
                            helperText="Default 800"
                            FormHelperTextProps={{
                                className: classes.helperTextColor,
                            }}
                            InputLabelProps={{
                                className: classes.textColor,
                            }}
                            onChange={(event) => {
                                setOptions({
                                    ...options,
                                    width: parseInt(event.target.value),
                                });
                            }}
                        />
                    </Box>

                    <Box id={'submit-button'} my={15}>
                        <Button
                            variant="outlined"
                            color="primary"
                            disabled={submitIsEnabled()}
                            id={'options-submit-button'}
                            onClick={validateDataOptions}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </div>
        </Box>
    );
}
const mapStateToProps = (state: any) => ({
    nominalFields: state.analysedData.nominalFields,
    ordinalFields: state.analysedData.ordinalFields,
    binaryFields: state.analysedData.binaryFields,
});
export default connect(mapStateToProps, {})(RadialOptions);
