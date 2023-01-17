import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter";
import auth from "./auth";

const store = configureStore({
    reducer: {
        counterReducer: counter,
        authReducer: auth
    }
});

export default store;












































// import { configureStore, createSlice } from "@reduxjs/toolkit";

// const initialCounterState = {
//     counter: 0,
//     allowed: false
// }

// const counterSlice = createSlice({
//     name: 'counter',
//     initialState: initialCounterState,
//     reducers: {
//         increment(state) {
//             state.counter++
//         },
//         decrement(state) {
//             state.counter--;
//         },
//         increase(state, action) {
//             state.counter += action.payload.amount;
//         },
//         decrease(state, action) {
//             state.counter -= action.payload.amount;
//         },
//         toggle(state) {
//             state.allowed = !state.allowed;
//         },
//     }
// });


// export const counterAction = counterSlice.actions;

// const store = configureStore({
//     reducer: { counterReducer: counterSlice.reducer }
// });
// export default store;