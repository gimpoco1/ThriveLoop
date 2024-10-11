
import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

function HabitForm() {
  const [habitName, setHabitName] = useState("");
  const [habitDescription, setHabitDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to backend)
    console.log("Habit Name:", habitName);
    console.log("Habit Description:", habitDescription);

    // Clear the form after submission
    setHabitName("");
    setHabitDescription("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <TextField
        label="Habit Name"
        variant="outlined"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        required
      />
      <TextField
        label="Description"
        variant="outlined"
        value={habitDescription}
        onChange={(e) => setHabitDescription(e.target.value)}
        multiline
        rows={3}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Habit
      </Button>
    </Box>
  );
}

export default HabitForm;
