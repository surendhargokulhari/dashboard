import { Form, Button } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="d-flex justify-content-between align-items-center mt-2 p-2 border rounded">
      <Form.Check
        type="checkbox"
        label={task.title}
        checked={task.completed}
        onChange={() =>
          onToggle(task.id, { ...task, completed: !task.completed })
        }
      />

      <Button variant="danger" onClick={() => onDelete(task.id)}>
        <Trash />
      </Button>
    </div>
  );
}
