//Imports from libraries
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//Store componenets imports
import dataReducers from './reducers/dataReducers';

export const store = createStore(dataReducers, applyMiddleware(thunk));
