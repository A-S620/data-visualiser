//Imports from libraries
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//Store componenets imports
import importedDataReducer from './reducers/importedDataReducer';

let Store;
export default Store = createStore(importedDataReducer, applyMiddleware(thunk));
