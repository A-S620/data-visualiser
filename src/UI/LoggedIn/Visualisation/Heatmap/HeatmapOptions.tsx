import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, FormControl, FormHelperText, InputLabel, Select, TextField, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

import { AlertType } from '../../../../Interfaces/Notification/INotification';
import { NotificationsHandler } from '../../../../UIHandling/NotificationsHandler';
import AlertNotification from '../../Notifications/AlertNotification';
import { IHeatmapSeriesOptions } from '../../../../Interfaces/Visualisations/Heatmap/IHeatmapSeriesOptions';
import { HeatmapSeriesOptionsHandler } from '../../../../UIHandling/Visualisations/HeatmapSeries/HeatmapSeriesOptionsHandler';

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
function HeatmapOptions(props: any) {
    const classes = useStyles();
    const [options, setOptions] = React.useState<{
        xValue: string;
        yValue: string;
        height: number;
        width: number;
        colourRange: { colour1: string; colour2: string };
        colour: string;
        stroke: string;
        opacity: number;
        fill: string;
    }>({
        xValue: '',
        yValue: '',
        height: 500,
        width: 500,
        colourRange: { colour1: '#000000', colour2: '#00F000' },
        colour: '#000000',
        stroke: '#000000',
        opacity: 1,
        fill: '',
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
        const optionsToValidate: IHeatmapSeriesOptions = {
            colourRange: options.colourRange,
            xValue: options.xValue,
            yValue: options.yValue,
            height: options.height,
            width: options.width,
            stroke: options.stroke,
            opacity: options.opacity,
            colour: options.colour,
            fill: options.fill,
        };
        const validateOptions = new HeatmapSeriesOptionsHandler(optionsToValidate);
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
            id={'heatmap-plotting-options'}
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
                    id={'heatmap-plotting-options'}
                    px={20}
                    py={20}
                >
                    <Typography id={'heatmap-plotting-title'}>Heatmap Series Options</Typography>
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
                    <Box my={15} display="flex" flexDirection="row" justifyContent="center" id={'visuals-textfields'}>
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
                    <Box display="flex" flexDirection="row" justifyContent="center" id={'colour-options'}>
                        <FormControl style={{ minWidth: 200 }} id={'fill-select'}>
                            <InputLabel className={classes.textColor}>Colour 1</InputLabel>
                            <Select
                                value={options.colourRange.colour1}
                                onChange={(event) => {
                                    setOptions({
                                        ...options,
                                        colourRange: {
                                            ...options.colourRange,
                                            colour1: event.target.value as string,
                                        },
                                    });
                                }}
                                name="colour"
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
                            <FormHelperText className={classes.helperTextColor}>Low frequency</FormHelperText>
                        </FormControl>
                        <Box mx={5} />
                        <FormControl style={{ minWidth: 200 }} id={'fill-select'}>
                            <InputLabel className={classes.textColor}>Colour 2</InputLabel>
                            <Select
                                value={options.colourRange.colour2}
                                onChange={(event) => {
                                    setOptions({
                                        ...options,
                                        colourRange: {
                                            ...options.colourRange,
                                            colour2: event.target.value as string,
                                        },
                                    });
                                }}
                                name="colour"
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
                            <FormHelperText className={classes.helperTextColor}>High frequency</FormHelperText>
                        </FormControl>
                        <Box mx={5} />
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
export default connect(mapStateToProps, {})(HeatmapOptions);
