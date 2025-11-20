import { Navbar, Container, Nav, Form } from "react-bootstrap";
import { useState } from "react";

export default function AppNavbar() {
  const [dark, setDark] = useState(true);

  return (
    <Navbar
      bg={dark ? "dark" : "light"}
      variant={dark ? "dark" : "light"}
      expand="lg"
      className="shadow-sm px-3"
      style={{ position: "sticky", top: 0, zIndex: 1000 }}
    >
      <Container fluid>

        {/* Brand */}
        <Navbar.Brand className="fw-bold d-flex align-items-center gap-2">
          <i className="bi bi-kanban-fill"></i>
          Mini Project Dashboard
        </Navbar.Brand>

        {/* Toggle Button */}
        <Navbar.Toggle aria-controls="nav-links" />

        {/* Collapsible Area */}
        <Navbar.Collapse id="nav-links">
          <Nav className="ms-auto d-flex align-items-center gap-3">

            <Nav.Link href="projects/0071"  className="d-flex align-items-center gap-1">
              <i className="bi bi-list-task"></i>
              Tasks
            </Nav.Link>

            {/* DARK / LIGHT MODE SWITCH */}
            <div className="ms-3 d-flex align-items-center">
              <i className={`bi ${dark ? "bi-moon-stars-fill" : "bi-brightness-high-fill"} me-2`}></i>
              <Form.Check
                type="switch"
                id="dark-mode"
                checked={dark}
                onChange={() => setDark(!dark)}
              />
            </div>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}
