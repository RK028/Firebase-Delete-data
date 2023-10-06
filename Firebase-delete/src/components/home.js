 
import React, { useState } from 'react';
import axios from 'axios';

function DisplayAdminData() {
  const [adminId, setAdminId] = useState('');
  const [adminData, setAdminData] = useState(null);

  const handleGetAdminData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/admin/${adminId}`);
      setAdminData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Data</h2>
      <input type="text" placeholder="ID" value={adminId} onChange={(e) => setAdminId(e.target.value)} />
      <button onClick={handleGetAdminData}>Get Admin Data</button>
      {adminData && (
        <div>
          <h3>Admin Data</h3>
          <pre>{JSON.stringify(adminData, null, 2)}</pre>
        </div>
      )}
      
    </div>
  );
}

export default DisplayAdminData;