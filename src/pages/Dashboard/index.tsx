import { Container, Typography, Box, Paper, Button } from "@mui/material";
import HabitList from "../../components/HabitList";
import HabitForm from "../../components/HabitForm";
import messages from "./messages";

function Dashboard() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" gutterBottom>
        {messages.title}
      </Typography>

      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={3}
        marginTop={3}
      >
        {/* Habit Form */}
        <Paper elevation={3} sx={{ flex: 1, padding: 2 }}>
          <Typography variant="h6" gutterBottom>
            {messages.addNewHabit}{" "}
          </Typography>
          <HabitForm />
        </Paper>

        {/* Habit List */}
        <Paper elevation={3} sx={{ flex: 2, padding: 2 }}>
          <Typography variant="h6" gutterBottom>
            {messages.yourHabits}
          </Typography>
          <HabitList />
        </Paper>
      </Box>

      <Button variant="contained" color="primary" sx={{ marginTop: 3 }}>
        {messages.viewHabitInsights}
      </Button>
    </Container>
  );
}

export default Dashboard;
