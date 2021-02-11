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

import { AlertType } from '../../../../Interfaces/Notification/INotification';
import { NotificationsHandler } from '../../../../UIHandling/NotificationsHandler';
import AlertNotification from '../../Notifications/AlertNotification';
import { LineSeriesOptionsHandler } from '../../../../UIHandling/Visualisations/LineSeries/LineSeriesOptionsHandler';

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
function MarkSeriesOptions(props: any) {
    const classes = useStyles();
    const [options, setOptions] = React.useState<{
        xValue: string;
        yValue: string;
        height: number;
        width: number;
        colour: string;
        stroke: string;
        opacity: number;
        fill: string;
    }>({
        xValue: '',
        yValue: '',
        height: 800,
        width: 800,
        stroke: '#000000',
        opacity: 1,
        fill: '',
        colour: '',
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
    return (
        <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            className={classes.root}
            id={'mark-plotting-options'}
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
                    id={'mark-plotting-options'}
                    px={20}
                    py={20}
                >
                    <Typography id={'mark-plotting-title'}>Mark Series Options</Typography>
                </Box>
            </div>
        </Box>
    );
}
const mapStateToProps = (state: any) => ({
    intervalFields: state.analysedData.intervalFields,
});
export default connect(mapStateToProps, {})(MarkSeriesOptions);
