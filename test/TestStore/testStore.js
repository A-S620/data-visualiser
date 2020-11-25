//Imports from libraries
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//Store componenets imports
import testDataReducers from './reducers/testDataReducers';

export const testStore = createStore(testDataReducers, applyMiddleware(thunk));
