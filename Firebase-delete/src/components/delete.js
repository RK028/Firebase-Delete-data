import React from "react";
import { useState } from "react";
import axios from 'axios';

function Delete(){
    const [id, setId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.delete(`http://localhost:8000/admin/${id}`);
  };

  return (
    <div>
      <h2>Delete Item</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Delete;

