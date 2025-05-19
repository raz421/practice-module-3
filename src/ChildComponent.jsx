import { useState } from "react";

export default function ChildComponent() {
  const [count, setCount] = useState(1);
  const handleChildCount = () => {
    setCount((count) => count + 1);
  };
  return (
    <div>
      <button onClick={() => handleChildCount()}>
        Update from child {count}
      </button>
    </div>
  );
}
