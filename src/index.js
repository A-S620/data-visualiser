import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';
import { store } from './ReduxStore/store';

const theme = createMuiTheme({
    palette: {
        text: {
            primary: '#000000',
        },
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#673ab7',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            main: '#ffeb3b',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
});
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <MuiThemeProvider theme={theme} key="app">
                <React.StrictMode>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </React.StrictMode>
            </MuiThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
