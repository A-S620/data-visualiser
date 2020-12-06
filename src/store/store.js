//Imports from libraries
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//store componenets imports
import importedDataReducer from './reducers/importedDataReducer';

let store;
export default store = createStore(importedDataReducer, applyMiddleware(thunk));
