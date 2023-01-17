import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { counterAction } from '../store/counter';

const Counter = () => {
  const { counter, allowed } = useSelector(state => state.counterReducer);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    if (!allowed) return;
    dispatch(counterAction.increment());
  }
  const increaseHandler = () => {
    if (!allowed) return;
    dispatch(counterAction.increase({amount:10}))
  }
  const decrementHandler = () => {
    if (!allowed) return;
    dispatch(counterAction.decrement())
  }
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle())
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>

      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increaseHandler}>Increase By 10</button>
      {/* <button onClick={decreaseHandler}>Increase By 10</button> */}
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
