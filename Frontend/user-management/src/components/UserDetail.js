import React, { useState } from 'react';
import axios from 'axios';

const UserDetail = () => {
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`http://localhost:8081/api/users/${userId}`);
      setUser(response.data);
    } catch (error) {
      console.error(`Error fetching user with ID ${userId}:`, error);
      setError('Error fetching user. Please check the user ID and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>User Detail</h2>
      <form onSubmit={handleFetchUser}>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="User ID"
        />
        <button type="submit">Fetch User</button>
      </form>

      {loading && <p>Loading user details...</p>}
      {error && <p>{error}</p>}
      
      {user && (
        <div>
          <h3>User Details</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserDetail;
