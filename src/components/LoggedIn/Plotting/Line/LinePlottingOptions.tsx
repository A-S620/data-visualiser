import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Chip,
    FormControl,
    FormHelperText,
    InputLabel,
    Paper,
    Select,
    TextField,
    Typography,
} from '@material-ui/core';
import { connect } from 'react-redux';
import {
    CurveType,
    ILinePlottingOptions,
    LineStyle,
} from '../../../../domain/interfaces/plotting/ILinePlottingOptions';

import { AlertType } from '../../../../domain/interfaces/INotification';
import { Notifications } from '../../../../domain/UIHandlers/Notifications';
import { AlertNotification } from '../../Notifications/AlertNotification';

interface IState {
    options: ILinePlottingOptions;
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
        curveType: CurveType | undefined;
        lineStyle: LineStyle | undefined;
        lineWidth: number;
    }>({
        xValue: '',
        yValue: '',
        height: 0,
        width: 0,
        colour: '',
        opacity: 0,
        curveType: undefined,
        lineStyle: undefined,
        lineWidth: 0,
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
    function dataIsImported(): boolean {
        if (props.integerFields.length === 0) {
            dataNotImportedNotify();
            return false;
        }
        return true;
    }
    function dataNotImportedNotify() {
        const errors = new Notifications();
        errors.addNotification('Import a file with valid data to visualise it');
        setNotifications({
            outcome: AlertType.FAILED,
            outcomeMessage: `${errors.getNotifications()}`,
            errors: errors,
        });
    }
    return (
        <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            className={classes.root}
            id={'line-plotting-options'}
            my={15}
            mx={15}
        >
            <Box style={{ height: '50%', width: '50%' }} my={15} id={'alert-area'}>
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
                            <InputLabel>X Value</InputLabel>
                            <Select
                                value={options.xValue}
                                onChange={(event) => {
                                    setOptions({
                                        ...options,
                                        xValue: event.target.value as string,
                                    });
                                }}
                                name="X Values"
                            >
                                <option aria-label="None" value="" />
                                {dataIsImported() &&
                                    props.integerFields.map((integerField: string) => (
                                        <option
                                            value={integerField}
                                            id={integerField + '-option'}
                                        >{`${integerField}`}</option>
                                    ))}
                            </Select>
                            <FormHelperText>Data on X-Axis</FormHelperText>
                        </FormControl>
                        <Box mx={5} />
                        <FormControl required style={{ minWidth: 200 }} id={'y-values-select'}>
                            <InputLabel>Y Value</InputLabel>
                            <Select
                                value={options.yValue}
                                onChange={(event) => {
                                    setOptions({
                                        ...options,
                                        yValue: event.target.value as string,
                                    });
                                }}
                                name="Y Values"
                            >
                                <option aria-label="None" value="" />
                                {dataIsImported() &&
                                    props.integerFields.map((integerField: string) => (
                                        <option
                                            value={integerField}
                                            id={integerField + '-option'}
                                        >{`${integerField}`}</option>
                                    ))}
                            </Select>
                            <FormHelperText>Data on Y-Axis</FormHelperText>
                        </FormControl>
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" id={'size-textfields'}>
                        <TextField id="height-textfield" label="Height" variant="outlined" helperText="Default 500" />
                        <Box mx={5} />
                        <TextField id="width-textfield" label="Width" variant="outlined" helperText="Default 500" />
                    </Box>
                    <Box my={15} display="flex" flexDirection="row" justifyContent="center" id={'colour-textfields'}>
                        <TextField id="colour-textfield" label="Colour" variant="outlined" helperText="Hex Value" />
                        <Box mx={5} />
                        <TextField
                            id="opacity-textfield"
                            label="Opacity"
                            variant="outlined"
                            helperText="Value must be between 0 and 1"
                        />
                    </Box>
                    <Box>
                        <FormControl required style={{ minWidth: 400 }} id={'curve-select'}>
                            <InputLabel>Curve</InputLabel>
                            <Select
                                value={options.curveType}
                                onChange={(event) => {
                                    setOptions({
                                        ...options,
                                        curveType: event.target.value as CurveType,
                                    });
                                }}
                                name="Y Values"
                            >
                                <option aria-label="None" value={undefined} />
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
                            <FormHelperText>Function used to create curve</FormHelperText>
                        </FormControl>
                    </Box>
                    <Box my={15} display="flex" flexDirection="row" justifyContent="center" id={'line-options'}>
                        <FormControl style={{ minWidth: 200 }} id={'line-style-select'}>
                            <InputLabel>Line Style</InputLabel>
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
                                <option aria-label="None" value={undefined} />
                                <option value={LineStyle.SOLID}>Solid</option>
                                <option value={LineStyle.DASHED}>Dashed</option>
                            </Select>
                        </FormControl>
                        <Box mx={5} />
                        <TextField
                            id="line-width-textfield"
                            label="Line Width"
                            variant="outlined"
                            helperText="Default: 2px"
                        />
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}
const mapStateToProps = (state: any) => ({
    integerFields: state.analysedData.integerFields,
    integerDataObjects: state.analysedData.integerDataObjects,
});
export default connect(mapStateToProps, {})(LinePlottingOptions);
