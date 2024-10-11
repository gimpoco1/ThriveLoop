import { useState } from "react";
import { List } from "@mui/material";
import { Habit } from "../../types/habit.types";
import { useHabitData } from "../../hooks/use-habit";
import HabitItem from "./components/HabitItem";
import EditHabitDialog from "./components/EditHabitDialog";

function HabitList() {
  const { habits, loading, error, handleComplete, handleDelete } =
    useHabitData();
  const [editingHabit, setEditingHabit] = useState<Habit | null>(null);

  const openEditDialog = (habit: Habit) => setEditingHabit(habit);
  const closeEditDialog = () => setEditingHabit(null);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading habits</div>;

  return (
    <>
      <List>
        {habits.map((habit: Habit) => (
          <HabitItem
            key={habit.id}
            habit={habit}
            onEdit={() => openEditDialog(habit)}
            onDelete={() => handleDelete(habit.id)}
            onComplete={() => handleComplete(habit.id)}
          />
        ))}
      </List>
      <EditHabitDialog habit={editingHabit} onClose={closeEditDialog} />
    </>
  );
}

export default HabitList;
