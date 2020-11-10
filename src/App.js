//Imports from libraries
import React from 'react';

//UI Components Imports
import UserNavigation from './components/LoggedIn/Navigation/UserNavigation';
import './App.css';
import FrontNavigation from './components/NotLoggedIn/Navigation/FrontNavigation';

export default function App() {
    return (
        <div>
            {/*<UserNavigation />*/}
            {/*<Appbar />*/}
            {/*<Construction />*/}
            <FrontNavigation />
        </div>
    );
}
