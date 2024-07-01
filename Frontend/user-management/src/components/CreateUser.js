import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = ({ onUserCreated }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/api/users', { name, email });
      console.log(response.data);
      setName(''); // Clear input fields after successful submission
      setEmail('');
      // Notify parent component (UserList) to refresh users
      onUserCreated();
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateUser;
