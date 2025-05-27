import axios from 'axios';
import React, { useEffect, useState, useMemo } from 'react';
import './UserData.css';

const UserData = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  // Fetch users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, []);

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(handler);
  }, [search]);

  // useMemo to filter users based on debounced input
  const filteredUsers = useMemo(() => {
    return data.filter(user =>
      user.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [debouncedSearch, data]);

  return (
    <div className="user-container">
      <h2>User Directory</h2>
      <input
        type="text"
        placeholder="Search user by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <ul className="user-list">
        {filteredUsers.map(user => (
          <li key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>City:</strong> {user.address.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserData;
