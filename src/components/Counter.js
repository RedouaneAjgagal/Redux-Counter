import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterAction } from '../store';

const Counter = () => {
  const { counter, allowed } = useSelector(state => state.counterReducer);
  const reducer = useSelector(state => state)
  console.log(reducer);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle())
  };
  const incrementHandler = () => {
    if (!allowed) return
    dispatch(counterAction.increment())
  }
  const increaseHandler = () => {
    if (!allowed) return;
    dispatch(counterAction.increase({amount: 5}));
  }
  const decrementHandler = () => {
    if (!allowed) return
    dispatch(counterAction.decrement())
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
