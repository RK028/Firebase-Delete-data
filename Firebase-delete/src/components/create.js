import React from "react";
import { useState } from "react";
import axios from 'axios';


function Create(){
  const [phoneNumber, setphoneNumber] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = {phoneNumber};
    await axios.post('http://localhost:8000/signin', newItem);

  };

  return (
    <div>
      <h2>Enter Your Phone number</h2>
      <form onSubmit={handleSubmit}>
        <input type="tele" placeholder="Enter your phone number" value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Create;