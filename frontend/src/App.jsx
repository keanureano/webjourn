import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h1 className="underline text-3xl">Hello tailwind!</h1>
      </div>
    </div>
  );
}

export default App;
