// useState should be imported in every component where it's being used
import { useState } from "react";

export default function Form({ onAddItems }) {
  // 1. Create a piece of State
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  // handling submissions by creating the handleSubmit function
  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {/* creating a list of numbers & rendering it on the UI */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        // 2. Use the state as the value of the input field
        value={description}
        placeholder="Item..."
        // 3. Attach onChange event handler on the same element to update the corresponding state variables when the value changes
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
