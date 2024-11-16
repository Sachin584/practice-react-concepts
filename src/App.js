import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import SearchBar from './SearchBar';

export default function MyApp() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div className="container">
        {/* Navigation Links */}
        <nav className="navbar">
          <div className="logo">
            <Link to="/">MyApp</Link>
          </div>
          <div className="nav-links">
            <Link to="/" className="nav-button">Home</Link>
          </div>
        </nav>

        {/* Routing */}
        <Routes>
          <Route path="/" element={<SearchBar user={users} />} />
        </Routes>
      </div>
    </Router>
  );
}
