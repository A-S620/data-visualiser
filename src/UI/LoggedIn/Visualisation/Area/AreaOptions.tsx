import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, FormControl, FormHelperText, InputLabel, Select, TextField, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

import { AlertType } from '../../../../Interfaces/Notification/INotification';
import { NotificationsHandler } from '../../../../UIHandling/NotificationsHandler';
import AlertNotification from '../../Notifications/AlertNotification';
import { IAreaSeriesOptions } from '../../../../Interfaces/Visualisations/Area/IAreaSeriesOptions';
import { AreaSeriesOptionsHandler } from '../../../../UIHandling/Visualisations/AreaSeries/AreaSeriesOptionsHandler';
import { CurveType } from '../../../../Interfaces/Visualisations/Line/ILineSeriesOptions';

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
function AreaOptions(props: any) {
    const classes = useStyles();
    const [options, setOptions] = React.useState<{
        xValue: string;
        yValue: string;
        height: number;
        width: number;
        stroke: string;
        opacity: number;
        curveType: CurveType | null;
        fill: string;
    }>({
        xValue: '',
        yValue: '',
        height: 800,
        width: 800,
        stroke: '#000000',
        opacity: 1,
        curveType: CurveType.curveLinear,
        fill: '#000000',
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
    function submitIsEnabled(): boolean {
        return !(options.xValue.length !== 0 && options.yValue.length !== 0 && xValAndYValIsEqual());
    }
    function xValAndYValIsEqual(): boolean {
        return options.xValue !== options.yValue;
    }
    function validateDataOptions() {
        const optionsToValidate: IAreaSeriesOptions = {
            xValue: options.xValue,
            yValue: options.yValue,
            height: options.height,
            width: options.width,
            fill: options.fill,
            stroke: options.stroke,
            opacity: options.opacity,
            curveType: options.curveType,
        };
        const validateOptions = new AreaSeriesOptionsHandler(optionsToValidate);
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
            id={'polygon-plotting-options'}
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
                    id={'polygon-plotting-options'}
                    px={20}
                    py={20}
                >
                    <Typography id={'area-plotting-title'}>Area Series Options</Typography>
                    <Box my={15} display="flex" flexDirection="row" justifyContent="center">
                        <FormControl required style={{ minWidth: 200 }} id={'x-values-select'}>
                            <InputLabel className={classes.textColor}>X Value</InputLabel>
                            <Select
                                id={'select-xValue'}
                                onChange={(event) => {
                                    setOptions({
                                        ...options,
                                        xValue: event.target.value as string,
                                    });
                                }}
                                name="X Values"
                                renderValue={(value) => {
                                    if (!xValAndYValIsEqual()) {
                                        return `⚠️  - ${value}`;
                                    }
                                    return `${value}`;
                                }}
                            >
                                {props.intervalFields.map((integerField: string) => (
                                    <option
                                        value={integerField}
                                        id={integerField + '-option'}
                                    >{`${integerField}`}</option>
                                ))}
                            </Select>
                            <FormHelperText className={classes.helperTextColor}>Data on X-Axis</FormHelperText>
                        </FormControl>
                        <Box mx={5} />
                        <FormControl required style={{ minWidth: 200 }} id={'y-values-select'}>
                            <InputLabel className={classes.textColor}>Y Value</InputLabel>
                            <Select
                                renderValue={(value) => {
                                    if (!xValAndYValIsEqual()) {
                                        return `⚠️  - ${value}`;
                                    }
                                    return `${value}`;
                                }}
                                onChange={(event) => {
                                    setOptions({
                                        ...options,
                                        yValue: event.target.value as string,
                                    });
                                }}
                                name="Y Values"
                            >
                                {props.intervalFields.map((integerField: string) => (
                                    <option
                                        value={integerField}
                                        id={integerField + '-option'}
                                    >{`${integerField}`}</option>
                                ))}
                            </Select>
                            <FormHelperText className={classes.helperTextColor}>Data on Y-Axis</FormHelperText>
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
                    <Box my={15} display="flex" flexDirection="row" justifyContent="center" id={'fill-textfields'}>
                        <FormControl style={{ minWidth: 200 }} id={'fill-select'}>
                            <InputLabel className={classes.textColor}>Fill</InputLabel>
                            <Select
                                value={options.fill}
                                onChange={(event) => {
                                    setOptions({
                                        ...options,
                                        fill: event.target.value as string,
                                    });
                                }}
                                name="fill"
                            >
                                <option value={'red'}>red</option>
                                <option value={'green'}>green</option>
                                <option value={'blue'}>blue</option>
                                <option value={'purple'}>purple</option>
                                <option value={'orange'}>orange</option>
                                <option value={'black'}>black</option>
                                <option value={'yellow'}>yellow</option>
                                <option value={'brown'}>brown</option>
                                <option value={'pink'}>pink</option>
                                <option value={'turquoise'}>turquoise</option>
                            </Select>
                        </FormControl>
                        <Box mx={5} />
                        <TextField
                            type={'number'}
                            id="opacity-textfield"
                            label="Opacity"
                            variant="outlined"
                            helperText="Value must be between 0 and 1"
                            FormHelperTextProps={{
                                className: classes.helperTextColor,
                            }}
                            InputLabelProps={{
                                className: classes.textColor,
                            }}
                            onChange={(event) => {
                                setOptions({
                                    ...options,
                                    opacity: parseFloat(event.target.value),
                                });
                            }}
                        />
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" id={'line-textfields'}>
                        <Box>
                            <FormControl style={{ minWidth: 200 }} id={'curve-select'}>
                                <InputLabel className={classes.textColor}>Curve</InputLabel>
                                <Select
                                    // value={options.curveType}
                                    onChange={(event) => {
                                        setOptions({
                                            ...options,
                                            curveType: event.target.value as CurveType,
                                        });
                                    }}
                                    name="Curve Type"
                                >
                                    <option value={CurveType.curveLinear}>Linear</option>
                                    <option value={CurveType.curveLinearClosed}>Linear Closed</option>
                                    <option value={CurveType.curveMonotoneX}>Monotone X</option>
                                    <option value={CurveType.curveMonotoneY}>Monotone Y</option>
                                    <option value={CurveType.curveNatural}>Natural</option>
                                    <option value={CurveType.curveStep}>Step</option>
                                    <option value={CurveType.curveStepAfter}>Step After</option>
                                    <option value={CurveType.curveStepBefore}>Step Before</option>
                                </Select>
                                <FormHelperText className={classes.helperTextColor}>
                                    Function used to create curve
                                </FormHelperText>
                            </FormControl>
                        </Box>
                        <Box mx={5} />
                        <Box>
                            <FormControl style={{ minWidth: 200 }} id={'stroke-select'}>
                                <InputLabel className={classes.textColor}>Stroke</InputLabel>
                                <Select
                                    value={options.stroke}
                                    onChange={(event) => {
                                        setOptions({
                                            ...options,
                                            stroke: event.target.value as string,
                                        });
                                    }}
                                    name="stroke"
                                >
                                    <option value={'red'}>red</option>
                                    <option value={'green'}>green</option>
                                    <option value={'blue'}>blue</option>
                                    <option value={'purple'}>purple</option>
                                    <option value={'orange'}>orange</option>
                                    <option value={'black'}>black</option>
                                    <option value={'yellow'}>yellow</option>
                                    <option value={'brown'}>brown</option>
                                    <option value={'pink'}>pink</option>
                                    <option value={'turquoise'}>turquoise</option>
                                </Select>
                            </FormControl>
                        </Box>
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
    intervalFields: state.analysedData.intervalFields,
});
export default connect(mapStateToProps, {})(AreaOptions);
