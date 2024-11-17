import React, { useEffect, useState } from "react";
import "./ProfileCards.css"; // Include your CSS styles here

import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

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
<div>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 2,
        padding: 2,
      }}
    >
      {people.map((person, index) => (
        <Card
          key={index}
          sx={{
            width: '23%', // Ensures four cards per row with small margins
            marginBottom: 2,
            boxShadow: 3,
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image={person.photo}
            alt={person.fullName}
          />
          <CardContent>
            <Typography variant="h6" component="div" gutterBottom>
              {person.fullName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {person.email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {person.phone}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
    </div>

    // <div className="card-container">
    //   {people.map((person, index) => (
    //     <div key={index} className="card">
    //       <img src={person.photo} alt={person.fullName} className="card-img" />
    //       <div className="card-info">
    //         <h2 className="card-name">{person.fullName}</h2>
    //         <p className="card-email">{person.email}</p>
    //         <p className="card-phone">{person.phone}</p>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
}
