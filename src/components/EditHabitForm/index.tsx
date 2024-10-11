
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { TextField, Button, Box } from "@mui/material";
import { GET_HABITS, UPDATE_HABIT } from "../../graphql/habitQueries";

interface EditHabitFormProps {
  habitId: string;
  initialName: string;
  initialDescription: string;
  onClose: () => void; 
}

function EditHabitForm({
  habitId,
  initialName,
  initialDescription,
  onClose,
}: EditHabitFormProps) {
  const [habitName, setHabitName] = useState(initialName);
  const [habitDescription, setHabitDescription] = useState(initialDescription);

  const [updateHabit] = useMutation(UPDATE_HABIT, {
    refetchQueries: [{ query: GET_HABITS }],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateHabit({
      variables: {
        id: habitId,
        name: habitName,
        description: habitDescription,
      },
    });
    onClose(); // Close the edit form after updating
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
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
        Update Habit
      </Button>
    </Box>
  );
}

export default EditHabitForm;
