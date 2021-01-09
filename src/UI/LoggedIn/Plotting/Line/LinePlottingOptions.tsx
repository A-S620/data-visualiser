import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ColorPicker } from 'material-ui-color';
import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    InputLabel,
    Paper,
    Select,
    TextField,
    Typography,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { CurveType, ILinePlotOptions, LineStyle } from '../../../../interfaces/plotting/ILinePlotOptions';

import { AlertType } from '../../../../interfaces/INotification';
import { Notifications } from '../../../../UIHandling/Notifications';
import { AlertNotification } from '../../Notifications/AlertNotification';
import { LinePlotOptionsValidate } from '../../../../domain/LinePlotOptions/LinePlotOptionsValidate';
import { LinePlotHandler } from '../../../../UIHandling/LinePlotHandler';

interface IState {
    options: ILinePlotOptions;
    submitButtonDisabled: boolean;
    outcome: AlertType | undefined;
    outcomeMessage: string;
    errors: Notifications;
}
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
function LinePlottingOptions(props: any) {
    const classes = useStyles();
    const [options, setOptions] = React.useState<{
        xValue: string;
        yValue: string;
        height: number;
        width: number;
        colour: string;
        opacity: number;
        curveType: CurveType | null;
        lineStyle: LineStyle | undefined;
        lineWidth: number;
    }>({
        xValue: '',
        yValue: '',
        height: 400,
        width: 400,
        colour: '#000000',
        opacity: 1,
        curveType: null,
        lineStyle: undefined,
        lineWidth: 2,
    });
    const [notifications, setNotifications] = React.useState<{
        outcome: AlertType | undefined;
        outcomeMessage: string;
        errors: Notifications;
    }>({
        outcome: undefined,
        outcomeMessage: '',
        errors: new Notifications(),
    });
    function submitIsEnabled(): boolean {
        return !(options.xValue.length !== 0 && options.yValue.length !== 0 && xValAndYValIsEqual());
    }
    function xValAndYValIsEqual(): boolean {
        return options.xValue !== options.yValue;
    }
    function validateDataOptions() {
        const optionsToValidate: ILinePlotOptions = {
            xValue: options.xValue,
            yValue: options.yValue,
            height: options.height,
            width: options.width,
            colour: options.colour,
            opacity: options.opacity,
            curveType: options.curveType,
            lineStyle: options.lineStyle,
            lineWidth: options.lineWidth,
        };
        const validateOptions = new LinePlotHandler(optionsToValidate);
        const errors: Notifications = validateOptions.validateOptions();
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
            id={'line-plotting-options'}
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
            <Paper className={classes.paper}>
                <Box
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                    alignItems="center"
                    className={classes.root}
                    id={'line-plotting-options'}
                    px={20}
                    py={20}
                >
                    <Typography id={'line-plotting-title'}>Line Series Plotting Options</Typography>
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
                                {props.integerFields.map((integerField: string) => (
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
                                {props.integerFields.map((integerField: string) => (
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
                            helperText="Default 400"
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
                            helperText="Default 400"
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
                    <Box my={15} display="flex" flexDirection="row" justifyContent="center" id={'colour-textfields'}>
                        <ColorPicker
                            defaultValue={options.colour}
                            value={options.colour}
                            onChange={(e) => {
                                setOptions({
                                    ...options,
                                    colour: e.hex,
                                });
                            }}
                        />
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
                                    opacity: parseInt(event.target.value),
                                });
                            }}
                        />
                    </Box>
                    <Box>
                        <FormControl style={{ minWidth: 400 }} id={'curve-select'}>
                            <InputLabel className={classes.textColor}>Curve</InputLabel>
                            <Select
                                // value={options.curveType}
                                onChange={(event) => {
                                    setOptions({
                                        ...options,
                                        curveType: event.target.value as CurveType,
                                    });
                                }}
                                name="Y Values"
                            >
                                <option value={CurveType.curveBasis}>Basis</option>
                                <option value={CurveType.curveBasisClosed}>Basis Closed</option>
                                <option value={CurveType.curveBasisOpen}>Basis Open</option>
                                <option value={CurveType.curveBundle}>Bundle</option>
                                <option value={CurveType.curveCardinal}>Cardinal</option>
                                <option value={CurveType.curveCardinalClosed}>Cardinal Closed</option>
                                <option value={CurveType.curveCardinalOpen}>Cardinal Open</option>
                                <option value={CurveType.curveCatmullRom}>Catmull Rom</option>
                                <option value={CurveType.curveCatmullRomClosed}>Catmull Rom Closed</option>
                                <option value={CurveType.curveCatmullRomOpen}>Catmull Rom Open</option>
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
                    <Box my={15} display="flex" flexDirection="row" justifyContent="center" id={'line-options'}>
                        <FormControl style={{ minWidth: 200 }} id={'line-style-select'}>
                            <InputLabel className={classes.textColor}>Line Style</InputLabel>
                            <Select
                                value={options.lineStyle}
                                onChange={(event) => {
                                    setOptions({
                                        ...options,
                                        lineStyle: event.target.value as LineStyle,
                                    });
                                }}
                                name="Y Values"
                            >
                                <option value={LineStyle.SOLID}>Solid</option>
                                <option value={LineStyle.DASHED}>Dashed</option>
                            </Select>
                        </FormControl>
                        <Box mx={5} />
                        <TextField
                            type={'number'}
                            id="line-width-textfield"
                            label="Line Width"
                            variant="outlined"
                            helperText="Default: 2px"
                            FormHelperTextProps={{
                                className: classes.helperTextColor,
                            }}
                            InputLabelProps={{
                                className: classes.textColor,
                            }}
                            onChange={(event) => {
                                setOptions({
                                    ...options,
                                    lineWidth: parseInt(event.target.value),
                                });
                            }}
                        />
                    </Box>
                    <Box id={'submit-button'}>
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
            </Paper>
        </Box>
    );
}
const mapStateToProps = (state: any) => ({
    integerFields: state.analysedData.integerFields,
});
export default connect(mapStateToProps, {})(LinePlottingOptions);
