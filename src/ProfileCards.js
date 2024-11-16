import React, { useEffect, useState } from "react";
import "./ProfileCards.css"; // Include your CSS styles here

export default function ProfileCards({ users }) {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    // Only process and set people data once when `users` changes
    if (users && users.length > 0) {
      const formattedPeople = users.map((person) => ({
        fullName: `${person.name.first} ${person.name.last}`,
        photo: person.picture.large,
        email: person.email,
        phone: person.phone,
      }));
      setPeople(formattedPeople);
    }
  }, [users]); // This effect runs whenever `users` changes

  return (
    <div className="card-container">
      {people.map((person, index) => (
        <div key={index} className="card">
          <img src={person.photo} alt={person.fullName} className="card-img" />
          <div className="card-info">
            <h2 className="card-name">{person.fullName}</h2>
            <p className="card-email">{person.email}</p>
            <p className="card-phone">{person.phone}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
