import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../features/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const handleIncrementClick = () => {
    dispatch(increment());
  };
  const handledecrementClick = () => {
    dispatch(decrement());
  };
  const handleResetClick = () => {
    dispatch(reset());
  };
  return (
    <div>
      <button onClick={handleIncrementClick}>+</button>
      <p>count:{count}</p>
      <button onClick={handledecrementClick}>-</button>
      <button onClick={handleResetClick}>reset</button>
    </div>
  );
}

export default App;
