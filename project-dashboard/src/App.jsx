import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetails from "./pages/ProjectDetails";
import Sidebar from "./components/Sidebar";
import AppNavbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <AppNavbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ flex: 1 }}>
          <Routes>
           
            <Route path="/" element={<Navigate to="/projects" replace />} />

            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
