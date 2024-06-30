import React, { useState } from "react";
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats'


export default function App() {

  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItmes(id) {
    console.log(id);
    setItems((items) => items.filter((item) =>item.id !== id));
  }

  function handleToggleItems (id) {
    setItems((items) => 
    items.map((item) => 
    item.id === id ? {...item, packed: !item.packed} : item
    ))}

    function handleClearList() {
      const confirmed = window.confirm("Are you sure to delete all the items? ")
      
      if(confirmed) setItems([]);
    }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackingList 
      items={items}
      onDeleteItems={handleDeleteItmes}
      onToggleItems={handleToggleItems}
      onClearList={handleClearList}
      />
      <Stats 
      items={items}
      />
    </div>
  )
}
