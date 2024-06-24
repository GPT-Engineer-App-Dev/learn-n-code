import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CoursePage from "./pages/CoursePage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/courses/:courseId" element={<CoursePage />} />
      </Routes>
    </Router>
  );
}

export default App;
