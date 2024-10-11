import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/index";
import HabitDetails from "./pages/HabitDetails/index";
import ROUTES from "./common/constants/url-routes";
function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path={ROUTES.HABIT_DEATILS} element={<HabitDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
