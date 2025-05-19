import { useState } from "react";

export default function ChangeColor() {
  const [color, setColor] = useState({
    topColor: "white",
    botomColor: "white",
  });

  const handleTop = () => {
    setColor({
      ...color,
      topColor: "green",
    });
  };
  const handleBottom = () => {
    setColor({
      ...color,
      botomColor: "blue",
    });
  };
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <div
        style={{
          height: 450,
          backgroundColor: color.topColor,
        }}
        onClick={handleTop}
      >
        Top Color change
      </div>
      <div
        style={{
          height: 450,
          backgroundColor: color.botomColor,
        }}
        onClick={handleBottom}
      >
        Bottom color change
      </div>
    </div>
  );
}
