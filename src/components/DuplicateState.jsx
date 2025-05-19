import { useState } from "react";

const initialItems = [
  { title: "pretzels", id: 0 },
  { title: "crispy seaweed", id: 1 },
  { title: "granola bar", id: 2 },
];
export default function AvoidDuplication() {
  const [items, setItems] = useState(initialItems);
  const [selectedItems, setSelectedItems] = useState(0);
  const newSelectedItems = items.find((item) => item.id === selectedItems);
  const handleSelectedItems = (itemId, e) => {
    setItems(
      items.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            title: e.target.value,
          };
        }
        return item;
      })
    );
  };
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              value={item.title}
              onChange={(e) => handleSelectedItems(item.id, e)}
            ></input>
            <button onClick={() => setSelectedItems(item.id)}>Choose </button>
          </li>
        ))}
      </ul>
      <p>you choose {newSelectedItems.title}</p>
    </div>
  );
}
