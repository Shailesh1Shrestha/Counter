import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      setCounter("Not more than 20");
    }
  };
  const subValue = () => {
    if (counter > 0) {
      setCounter((counter = counter - 1));
    } else {
      setCounter("Not less than 0");
    }
  };
  return (
    <>
      <h1>Shailesh first react with chai aur code </h1>
      <h2>Counter value:{counter} </h2>
      <button onClick={addValue}>Add Value: {counter} </button>
      <br /> <br />
      <button onClick={subValue}>Subtract Value: {counter} </button>
    </>
  );
}

export default App;
