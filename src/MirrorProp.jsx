import { useState } from "react";
import ChildComponent from "./ChildComponent";

export default function MirrorProps() {
  const [count, setCount] = useState(1);
  const handleParentCount = () => {
    setCount((count) => count + 1);
  };
  return (
    <div>
      <ChildComponent count={count} />
      <button onClick={() => handleParentCount()}>Update from parent</button>
    </div>
  );
}
