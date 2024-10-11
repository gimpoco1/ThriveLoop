import {
  ListItem,
  ListItemText,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { CiCircleCheck } from "react-icons/ci";
import dayjs from "dayjs";
import { Habit } from "../../../../types/habit.types";

interface HabitItemProps {
  habit: Habit;
  onEdit: () => void;
  onDelete: () => void;
  onComplete: () => void;
}

const isCompletedToday = (completedDates: string[] | undefined) => {
  const today = dayjs().format("YYYY-MM-DD");
  return completedDates?.includes(today) || false;
};

const HabitItem = ({ habit, onEdit, onDelete, onComplete }: HabitItemProps) => (
  <ListItem
    style={{
      backgroundColor: isCompletedToday(habit.completedDates)
        ? "#e0ffe0"
        : "inherit",
    }}
    secondaryAction={
      <>
        <Tooltip title="Mark as Complete">
          <IconButton edge="end" aria-label="complete" onClick={onComplete}>
            <CiCircleCheck />
          </IconButton>
        </Tooltip>
        <IconButton edge="end" aria-label="edit" onClick={onEdit}>
          <EditIcon />
        </IconButton>
        <IconButton edge="end" aria-label="delete" onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </>
    }
  >
    <ListItemText
      primary={habit.name}
      secondary={
        <>
          <Typography variant="body2" color="textSecondary">
            {habit.description}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            Completed Dates:{" "}
            {habit.completedDates && habit.completedDates.length > 0
              ? habit.completedDates
                  .map((date) => {
                    const parsedDate =
                      typeof date === "string" && !isNaN(Number(date))
                        ? dayjs(Number(date)).format("DD MMM")
                        : dayjs(date).format("DD MMM");
                    return parsedDate;
                  })
                  .join(", ")
              : "None"}
          </Typography>
        </>
      }
    />
  </ListItem>
);

export default HabitItem;
