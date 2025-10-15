import { useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.counter.value);
  const handleIncrementClick = () => {};
  const handledecrementClick = () => {};
  return (
    <div>
      <button onClick={handleIncrementClick}>+</button>
      <p>count:</p>
      <button onClick={handledecrementClick}>-</button>
    </div>
  );
}

export default App;
