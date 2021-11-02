import React from 'react';

import { INotification } from '../../Interfaces/Notification/INotification';
import { IconButton, Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
export default function AlertNotification(notifications: INotification) {
    const [open, setOpen] = React.useState(true);
    return (
        <Snackbar
            open={open}
            id="notification-alert"
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
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
            message={notifications.notification}
        />
    );
}
