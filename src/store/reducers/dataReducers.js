//Imports from testStore
import reduxState from '../reduxState';
export default function dataReducers(state = reduxState, action) {
    switch (action.type) {
        case 'ADD_DATA_AS_ARRAYS':
            return {
                ...state,
                dataAsArrays: [...state.dataAsArrays, action.payload],
            };
        case 'ADD_DATA_AS_OBJECTS':
            return {
                ...state,
                dataAsObjects: [...state.dataAsObjects, action.payload],
            };
        case 'ADD_COLUMNS':
            return {
                ...state,
                columns: [...state.columns, action.payload],
            };
        default:
            return state;
    }
}
