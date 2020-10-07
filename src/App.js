import React from 'react';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';
import Routes from './components/Navigation/Routes';
import Navigation from './components/Navigation/Navigation';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {Grid} from '@material-ui/core';
import './App.css';

export default function App() {
    return (
        <div >
            <Grid style={{ marginTop: 10 }} container direction="row" justify="center" alignItems="center">
                <Grid item>
                    <Navigation />
                </Grid>
                <Grid item>
                    <BrowserRouter basename="/">
                        <Route exact path={'/'}></Route>
                    </BrowserRouter>
                </Grid>
            </Grid>
        </div>
    );
}
