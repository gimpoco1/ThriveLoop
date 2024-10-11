import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { TextField, Button, Box } from "@mui/material";
import { ADD_HABIT, GET_HABITS } from "../../graphql/habitQueries";


function HabitForm() {
  const [habitName, setHabitName] = useState("");
  const [habitDescription, setHabitDescription] = useState("");

  const [addHabit] = useMutation(ADD_HABIT, {
    refetchQueries: [{ query: GET_HABITS }],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addHabit({ variables: { name: habitName, description: habitDescription } });
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
