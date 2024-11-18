import React from "react";
import { useUsers } from "./UserContext";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

export default function ProfileCards() {
  const { filteredUsers } = useUsers();

  return (
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
  );
}
