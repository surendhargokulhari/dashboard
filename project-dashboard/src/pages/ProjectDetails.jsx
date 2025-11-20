import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getTasks,
  addTask,
  updateTask,
  deleteTask
} from "../api/api";
import TaskItem from "../components/TaskItem";
import { Button, Form } from "react-bootstrap";

export default function ProjectDetails() {
  const { id } = useParams();
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const loadTasks = async () => {
    const res = await getTasks(id);
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, [id]);

  const addNewTask = async () => {
    if (!title.trim()) return;

    await addTask({
      title,
      completed: false,
      projectId: id
    });

    setTitle("");
    loadTasks();
  };

  return (
    <div className="p-3">
      <h2>Project Tasks</h2>

      <div className="d-flex mt-3">
        <Form.Control
          placeholder="New Task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button className="ms-2" onClick={addNewTask}>
          Add Task
        </Button>
      </div>

      {tasks.map((t) => (
        <TaskItem
          key={t.id}
          task={t}
          onToggle={async (taskId, data) => {
            await updateTask(taskId, data);
            loadTasks();
          }}
          onDelete={async (taskId) => {
            await deleteTask(taskId);
            loadTasks();
          }}
        />
      ))}
    </div>
  );
}
