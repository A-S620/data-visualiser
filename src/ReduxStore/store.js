import { createStore } from 'redux';
import ReduxReducer from './Reducers/ReduxReducer';

// export default Store = createStore(ReduxReducer, applyMiddleware(thunk));
export const store = createStore(ReduxReducer);
