import React from 'react';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';
import Routes from './components/Navigation/Routes';
import UserNavigation from './components/Navigation/UserNavigation';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Grid } from '@material-ui/core';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Appbar from './components/Navigation/Appbar';
import FrontNavigation from './components/Navigation/FrontNavigation';
import Construction from './components/Construction/Construction';

export default function App() {
    return (
        <div>
            <UserNavigation />
            {/*<Appbar />*/}
            {/*<Construction />*/}
        </div>
    );
}
