import { createStore } from 'redux';

const initialState = {
    counter: 0,
    allowed: false
}
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, counter: state.counter + 1 }
        case 'DECREMENT':
            return { ...state, counter: state.counter - 1 }
        case 'INCREASE': {
            return { ...state, counter: state.counter + action.amount }
        }
        case 'TOGGLE':
            return { ...state, allowed: !state.allowed }
        default:
            return state
    }
}

const store = createStore(counterReducer);

export default store;