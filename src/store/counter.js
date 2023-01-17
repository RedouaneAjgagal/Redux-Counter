import { createSlice } from "@reduxjs/toolkit";
const initialCounterState = {
    counter: 0,
    allowed: false
}
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
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
            state.allowed = !state.allowed
        }
    }
});

export const counterAction = counterSlice.actions;

export default counterSlice.reducer;