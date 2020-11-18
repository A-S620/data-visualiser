//A class responsible for Notification alerts in the system.

//Imports from libraries
import React from 'react';
import Alert from '@material-ui/lab/Alert';

//Interfaces
import { INotification } from '../../../domain/interfaces/INotification';

export class AlertNotification extends React.Component<INotification> {
    public render() {
        return (
            <Alert id="notification-alert" severity={this.props.alert}>
                {this.props.notification}
            </Alert>
        );
    }
}
