import { createStore } from 'redux';
import ReduxReducer from './Reducers/ReduxReducer';

export const reduxStore = createStore(ReduxReducer);
