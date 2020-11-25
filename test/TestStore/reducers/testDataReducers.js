//Imports from testStore
import testReduxState from '../testReduxState';
export default function testDataReducers(state = testReduxState, action) {
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
