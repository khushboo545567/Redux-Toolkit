import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../features/counter/counterSlice";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
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
  const handleClickByAmount = () => {
    dispatch(incrementByAmount(amount));
  };
  return (
    <div>
      <button onClick={handleIncrementClick}>+</button>
      <p>count:{count}</p>
      <button onClick={handledecrementClick}>-</button>
      <button onClick={handleResetClick}>reset</button>
      <br />
      <br />
      <br />
      <input
        type="number"
        placeholder="Enter a number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleClickByAmount}>Inc by amount</button>
    </div>
  );
}

export default App;
