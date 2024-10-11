import { useQuery, useMutation } from "@apollo/client";
import {
  GET_HABITS,
  DELETE_HABIT,
  MARK_HABIT_COMPLETE,
} from "../graphql/habitQueries";
import dayjs from "dayjs";
import { Habit } from "../types/habit.types";

export const useHabitData = () => {
  const { loading, error, data } = useQuery<{ habits: Habit[] }>(GET_HABITS);
  const [deleteHabit] = useMutation(DELETE_HABIT, {
    refetchQueries: [{ query: GET_HABITS }],
  });
  const [markHabitComplete] = useMutation(MARK_HABIT_COMPLETE, {
    refetchQueries: [{ query: GET_HABITS }],
  });

  const habits = data?.habits || [];

  const handleDelete = async (id: string) => {
    await deleteHabit({ variables: { id } });
  };

  const handleComplete = async (id: string) => {
    const today = dayjs().format("YYYY-MM-DD");
    try {
      await markHabitComplete({ variables: { id, date: today } });
    } catch (error) {
      console.error("Error marking habit as complete:", error);
    }
  };

  return {
    
    habits,
    loading,
    error,
    handleDelete,
    handleComplete,
  };
};
