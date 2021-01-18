import React from 'react';
import Alert from '@material-ui/lab/Alert';

import { INotification } from '../../../interfaces/INotification';
import { Collapse, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
export default function AlertNotification(notifications: INotification) {
    const [open, setOpen] = React.useState(true);
    return (
        <Collapse in={open}>
            <Alert
                id="notification-alert"
                severity={notifications.alert}
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
            >
                {notifications.notification}
            </Alert>
        </Collapse>
    );
}
