import { createStore } from 'redux';
import dataReducer from './reducers/dataReducers';

export const store = createStore(dataReducer);
