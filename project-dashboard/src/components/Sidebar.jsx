import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div
      style={{
        width: "240px",
        background: "#f8f9fa",
        height: "100vh",
        padding: "20px",
        borderRight: "1px solid #ddd"
      }}
    >
      <h5>Navigation</h5>

      <Nav className="flex-column mt-3">
        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
      </Nav>
    </div>
  );
}
