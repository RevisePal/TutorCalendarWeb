import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import AddActivity from "./pages/addActivity";
import EditActivity from "./pages/editActivity";
import PrivacyPolicy from "./pages/privacy";
import DeleteAccount from "./pages/delete";
import LandingPage from "./pages/landingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/landingPage" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addActivity" element={<AddActivity />} />
        <Route path="/editActivity/:id" element={<EditActivity />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/delete" element={<DeleteAccount />} />
        <Route path="/landingPage" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
