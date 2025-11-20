import { Card, Button } from "react-bootstrap";
import { PencilSquare, Trash, Eye, EyeSlash, EyeSlashFill, EmojiHeartEyes, Eyeglasses, Eyedropper } from "react-bootstrap-icons";

export default function ProjectCard({ project, onEdit, onDelete }) {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
        <Card.Text><strong>Status:</strong> {project.status}</Card.Text>

        <Button className="mb-2" variant="primary" onClick={() => onEdit(project)}>
          <PencilSquare /> Edit
        </Button>{" "}
        <Button className="mb-2" variant="danger" onClick={() => onDelete(project.id)}>
          <Trash /> Delete
        </Button>{" "}
        <Button className="mb-2" variant="success" href={`/projects/${project.id}`}>
          <EyeSlashFill /> View Tasks
        </Button>
      </Card.Body>
    </Card>
  );
}
