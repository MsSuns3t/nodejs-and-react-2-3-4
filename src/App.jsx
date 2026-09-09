import Greeting from "./Greeting";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Mijn React-app met Vite</h1>
      <Greeting name="Big Chungus" />
      <button onClick={() => setCount(count + 1)}>
        Je hebt {count} keer geklikt
      </button>
    </div>
    
  );
}

export default App;