import React from 'react';
import Alert from '@material-ui/lab/Alert';

import { INotification } from '../../../interfaces/INotification';

export class AlertNotification extends React.Component<INotification> {
    public render() {
        return (
            <Alert id="notification-alert" severity={this.props.alert}>
                {this.props.notification}
            </Alert>
        );
    }
}
