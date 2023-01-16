import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
    counter: 0,
    allowed: false
}
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter += action.payload.amount;
        },
        toggle(state) {
            state.allowed = !state.allowed;
        }
    }
})

// const counterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return { ...state, counter: state.counter + 1 }
//         case 'DECREMENT':
//             return { ...state, counter: state.counter - 1 }
//         case 'INCREASE': {
//             return { ...state, counter: state.counter + action.amount }
//         }
//         case 'TOGGLE':
//             return { ...state, allowed: !state.allowed }
//         default:
//             return state
//     }
// }

const store = configureStore({
    reducer: { counterReducer: counterSlice.reducer }
})
export const counterAction = counterSlice.actions;

export default store;