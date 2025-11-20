import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000"
});

// Projects API
export const getProjects = () => API.get("/projects");
export const addProject = (data) => API.post("/projects", data);
export const updateProject = (id, data) => API.put(`/projects/${id}`, data);
export const deleteProject = (id) => API.delete(`/projects/${id}`);

// Tasks API
export const getTasks = (projectId) =>
  API.get(`/tasks?projectId=${projectId}`);

export const addTask = (data) => API.post("/tasks", data);
export const updateTask = (id, data) => API.put(`/tasks/${id}`, data);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);
