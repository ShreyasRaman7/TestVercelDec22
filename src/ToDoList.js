import React, { useState } from 'react';

function ToDoList() {
  const [items, setItems] = useState([]);

  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, { id: Date.now(), text: e.target.item.value }]);
    e.target.item.value = '';
  }

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={addItem}>
        <input name="item" />
        <button>Add</button>
      </form>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
