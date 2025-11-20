import { useEffect, useState } from "react";
import {
  getProjects,
  addProject,
  updateProject,
  deleteProject
} from "../api/api";
import { Button, Modal, Form } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [show, setShow] = useState(false);
  const [editing, setEditing] = useState(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "Active"
  });

  const loadData = async () => {
    try {
      const res = await getProjects();
      setProjects(res.data);
    } catch (err) {
      console.error("Failed to fetch projects:", err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSubmit = async () => {
    if (!form.title.trim()) {
      alert("Title is required");
      return;
    }

    if (editing) {
      await updateProject(editing.id, form);
    } else {
      await addProject(form);
    }

    await loadData();
    setShow(false);
    setEditing(null);

    setForm({
      title: "",
      description: "",
      status: "Active"
    });
  };

  const handleEdit = (project) => {
    setEditing(project);
    setForm({
      title: project.title,
      description: project.description,
      status: project.status
    });
    setShow(true);
  };

  return (
    <div className="p-3">
      <h2 className="mb-3">Projects</h2>

      <Button className="mb-3" onClick={() => setShow(true)}>
        Add New Project
      </Button>

      {/* ⭐ CENTER TAGLINE WHEN NO PROJECTS */}
      {projects.length === 0 && (
        <div
          style={{
            textAlign: "center",
            marginTop: "120px",
            fontSize: "24px",
            color: "#777",
            fontWeight: 500
          }}
        >
          <p>No projects available.</p>
          <p>Click <b>"Add New Project"</b> to create one.</p>
        </div>
      )}

      {/* ⭐ SHOW PROJECT CARDS */}
      {projects.map((p) => (
        <ProjectCard
          key={p.id}
          project={p}
          onEdit={handleEdit}
          onDelete={async (id) => {
            await deleteProject(id);
            loadData();
          }}
        />
      ))}

      {/* MODAL */}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editing ? "Edit Project" : "Add Project"}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>

            <Form.Group className="mb-2">
              <Form.Label>Title</Form.Label>
              <Form.Control
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Description</Form.Label>
              <Form.Control
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Status</Form.Label>
              <Form.Select
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
              >
                <option>Pending</option>
                <option>Completed</option>
              </Form.Select>
            </Form.Group>

            <Button variant="primary" onClick={handleSubmit}>
              {editing ? "Update" : "Create"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
