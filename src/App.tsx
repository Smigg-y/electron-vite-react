import { useState } from 'react'
import UpdateElectron from "@/components/update";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <UpdateElectron />
    </div>
  );
}

export default App
