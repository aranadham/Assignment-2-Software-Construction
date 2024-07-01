import React, { useState } from 'react';
import axios from 'axios';

const DeleteUser = () => {
  const [id, setId] = useState('');

  const handleDelete = async () => {
    const response = await axios.delete(`http://localhost:8081/api/users/${id}`);
    console.log(response.data);
  };

  return (
    <div>
      <h2>Delete User</h2>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="User ID"
      />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteUser;
