import React, { useState } from "react";
import { useUsers } from "./UserContext";

export default function SearchBar() {
  const { users, setFilteredUsers } = useUsers();
  const [input, setInput] = useState("");
  const [res, setRes] = useState([]); // Local state for suggestions

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setInput(value);

    // Filter suggestions
    const suggestions = users.filter((user) =>
      user.name.first.toLowerCase().startsWith(value)
    );
    setRes(suggestions);

    // Update filteredUsers for ProfileCards
    setFilteredUsers(suggestions);
  };

  const handleValue = (name) => {
    setInput(name);
    const selectedUser = users.filter(
      (user) => user.name.first.toLowerCase() === name.toLowerCase()
    );
    setRes([]);
    setFilteredUsers(selectedUser); // Update the displayed users to match the selected suggestion
  };

  return (
    <div className="searchbar">
      <input
        value={input}
        onChange={handleChange}
        placeholder="Search for a user..."
      />
      <ul>
        {res.map((user, index) => (
          <li key={index} onClick={() => handleValue(user.name.first)}>
            {user.name.first}
          </li>
        ))}
      </ul>
    </div>
  );
}
