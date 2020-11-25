//Imports from store
import reduxState from '../reduxState';
export default function dataReducers(state = reduxState, action) {
    switch (action.type) {
        case 'ADD_COLUMNS':
            return {
                ...state,
                columns: [...state.columns, action.payload],
            };
        default:
            return state;
    }
}
