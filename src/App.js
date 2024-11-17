import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import SearchBar from "./SearchBar";
import ProfileCards from "./ProfileCards";
import { UserProvider } from "./UserContext";

export default function MyApp() {
  // let [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //       const data = await response.json();
  //       setUsers(data);
  //     } catch (error) {
  //       console.error("Error fetching profiles:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  // console.log(users)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("https://randomuser.me/api/?results=20");
  //       const data = await response.json();
  //       setUsers(data.results);
  //       console.log(data.results);
  //     } catch (error) {
  //       console.error("Error fetching profiles:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <UserProvider>
    <Router>
      <div className="container">
        {/* Navigation Links */}
        <nav className="navbar">
          <div className="logo">
            <Link to="/">MyApp</Link>
          </div>
          <div className="nav-links">
            <Link to="/" className="nav-button">
              Home
            </Link>
          </div>
        </nav>

        {/* Routing */}
        <Routes>
          <Route exact path="/"
            element={
              <>
                <SearchBar  />
                <ProfileCards  />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
    </UserProvider>
  );
}
