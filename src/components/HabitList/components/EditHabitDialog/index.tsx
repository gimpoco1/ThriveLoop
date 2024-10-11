import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { Habit } from "../../../../types/habit.types";
import EditHabitForm from "../../../EditHabitForm";

interface EditHabitDialogProps {
  habit: Habit | null;
  onClose: () => void;
}

const EditHabitDialog = ({ habit, onClose }: EditHabitDialogProps) => (
  <Dialog open={!!habit} onClose={onClose}>
    <DialogTitle>Edit Habit</DialogTitle>
    <DialogContent>
      {habit && (
        <EditHabitForm
          habitId={habit.id}
          initialName={habit.name}
          initialDescription={habit.description}
          onClose={onClose}
        />
      )}
    </DialogContent>
  </Dialog>
);

export default EditHabitDialog;
