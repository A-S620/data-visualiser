//Imports from libraries
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//Store componenets imports
import ReduxReducer from './Reducers/ReduxReducer';

// export default Store = createStore(ReduxReducer, applyMiddleware(thunk));
export const store = createStore(ReduxReducer);