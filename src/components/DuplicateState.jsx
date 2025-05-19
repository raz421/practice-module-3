import { useState } from "react";

const initialItems = [
  { title: "pretzels", id: 0 },
  { title: "crispy seaweed", id: 1 },
  { title: "granola bar", id: 2 },
];
export default function AvoidDuplication() {
  const [items, setItems] = useState(initialItems);
  const [selectedItems, setSelectedItems] = useState(0);
  const handleSelectedItems = (itemId) => {
    setSelectedItems(items.find((item) => item.id === itemId));
  };
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.title}{" "}
            <button onClick={() => handleSelectedItems(item.id)}>Choose</button>
          </li>
        ))}
      </ul>
      <p>you choose {selectedItems.title}</p>
    </div>
  );
}
