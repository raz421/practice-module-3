import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [hover, setHover] = useState(false);
  let value = "";
  if (hover) {
    value = "yellow";
  }
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <div
      style={{
        backgroundColor: value,
      }}
      onPointerMove={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{count}</h1>
      <button onClick={handleCount}> Add one</button>
    </div>
  );
}
