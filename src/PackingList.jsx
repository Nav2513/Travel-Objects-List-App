import React, { useState } from "react";
import Item from './Items';

export default function PackingList({ items, onDeleteItems, onToggleItems, onClearList}) {
    const[sortBy, setSortBy] = useState("packed");
  
    let sortedItems;
  
    if(sortBy === 'input') sortedItems = items;
  
    if(sortBy === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  
    if(sortBy === 'packed') sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  
    return (
      <div className="list">
        <ul>
        {sortedItems.map((item) => 
        (
        <Item item={item} 
        onDeleteItems={onDeleteItems}
        onToggleItems={onToggleItems}
        key={item.id} />
        ))}
        </ul>
  
        <div className="action">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input"> Sort by input Order</option>
            <option value="description">Sort by Description</option>
            <option value="packed"> Sort by packed status</option>
          </select>
          <button onClick={onClearList}>Clear List</button>
        </div>
      </div>
    )
  }
  
