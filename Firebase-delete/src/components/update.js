// import React from "react";

// import { useState } from "react";
// import axios from 'axios';

// function Update(){
//     const [id, setId] = useState('');
//     const [email, setemail] = useState('');
//     const [password, setpassword] = useState('');
//     const [message, setmessage] = useState('');
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       const updatedItem = { email, password, message };
//       await axios.put(`http://localhost:8000/items/${id}`, updatedItem);
//     };
  
//     return (
//       <div>
//         <h2>Update Item</h2>
//         <form onSubmit={handleSubmit}>
//           <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
//           <input type="email" placeholder="Name" value={email} onChange={(e) => setemail(e.target.value)} />
//           <input type="password" placeholder="Description" value={password} onChange={(e) => setpassword(e.target.value)} />
//           <input type="message" placeholder="Price" value={message} onChange={(e) => setmessage(e.target.value)} />
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     );
  
// }
// export default Update;