import { useState } from "react";
import ReducerTest from "./components/ReducerTest";

const App = () => {
  const [click, setClick] = useState(0);

  return (
    <div>
      <span>I have been clicked {click} times</span>

      <button onClick={() => setClick(click + 1)}>Click</button>

      <ReducerTest click={click} setClick={setClick} />
    </div>
  )
}

export default App;