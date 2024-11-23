import React from "react";
import { useUsers } from "./UserContext";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import CardModel from "./CardModel";
import { useState } from "react";

export default function ProfileCards() {
  const { filteredUsers } = useUsers();
  const [selectedCard,setSelectedCard] = useState(null);
  const handleClose = () => setSelectedCard(null);


  return (
    <>
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: 2,
        padding: 2,
      }}
    >
      {filteredUsers.map((user, index) => (
        <Card
          key={index}
          sx={{
            width: "23%",
            marginBottom: 2,
            boxShadow: 3,
          }} 
          onClick = {()=>  setSelectedCard(user)
          }
        >
          <CardMedia
            component="img"
            height="200"
            image={user.picture.large}
            alt={user.name.first}
            
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {`${user.name.first} ${user.name.last}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.email}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>

    {selectedCard && <CardModel user={selectedCard} isOpen={!!selectedCard} onClose={handleClose}/>}
    </>
  );
}
