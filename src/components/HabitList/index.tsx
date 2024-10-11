import React from "react";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import { FiDelete } from "react-icons/fi";

// Dummy habit data
const dummyHabits = [
  { id: 1, name: "Exercise", description: "Work out for at least 30 minutes." },
  { id: 2, name: "Read", description: "Read a book for 20 minutes." },
  { id: 3, name: "Meditate", description: "Meditate for 10 minutes." },
];

function HabitList() {
  return (
    <List>
      {dummyHabits.map((habit) => (
        <ListItem
          key={habit.id}
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <FiDelete />
            </IconButton>
          }
        >
          <ListItemText primary={habit.name} secondary={habit.description} />
        </ListItem>
      ))}
    </List>
  );
}

export default HabitList;
