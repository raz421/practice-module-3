import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [check, setChecked] = useState(true);

  return (
    <div>
      <Counter />
      <hr />
      {check && <Counter />}
      <input
        type="checkbox"
        checked={check}
        onChange={(e) => {
          setChecked(e.target.checked);
        }}
      />
    </div>
  );
}

export default App;
