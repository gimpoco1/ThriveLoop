import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { DELETE_HABIT, GET_HABITS } from "../../graphql/habitQueries";
import EditHabitForm from "../EditHabitForm";
import { Habit } from "../../types/habit.types";

function HabitList() {
  const { loading, error, data } = useQuery<{ habits: Habit[] }>(GET_HABITS); // Specify the type of the data
  const [deleteHabit] = useMutation(DELETE_HABIT, {
    refetchQueries: [{ query: GET_HABITS }],
  });

  const [editingHabit, setEditingHabit] = useState<Habit | null>(null); // Use Habit type for editingHabit

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading habits</p>;

  const handleDelete = async (id: string) => {
    await deleteHabit({ variables: { id } });
  };

  const openEditDialog = (habit: Habit) => {
    setEditingHabit(habit);
  };

  const closeEditDialog = () => {
    setEditingHabit(null);
  };

  return (
    <div>
      <List>
        {data?.habits.map((habit: Habit) => (
          <ListItem
            key={habit.id}
            secondaryAction={
              <>
                <IconButton
                  edge="end"
                  aria-label="edit"
                  onClick={() => openEditDialog(habit)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDelete(habit.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </>
            }
          >
            <ListItemText primary={habit.name} secondary={habit.description} />
          </ListItem>
        ))}
      </List>

      <Dialog open={!!editingHabit} onClose={closeEditDialog}>
        <DialogTitle>Edit Habit</DialogTitle>
        <DialogContent>
          {editingHabit && (
            <EditHabitForm
              habitId={editingHabit.id}
              initialName={editingHabit.name}
              initialDescription={editingHabit.description}
              onClose={closeEditDialog}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default HabitList;
