import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
  const { counter, allowed } = useSelector(state => state);
  const dispatch = useDispatch()

  const toggleCounterHandler = () => {
    dispatch({ type: 'TOGGLE' })
  };

  const incrementHandler = () => {
    if (!allowed) return
    dispatch({ type: 'INCREMENT' })
  }
  const increaseHandler = () => {
    if (!allowed) return;
    dispatch({type: 'INCREASE', amount: 5});
  }
  const decrementHandler = () => {
    if (!allowed) return
    dispatch({ type: 'DECREMENT' })
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>

      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increaseHandler}>Increase By 5</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
