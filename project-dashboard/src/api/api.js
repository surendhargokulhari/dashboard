import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000"
});


export const getProjects = () => API.get("/projects");
export const addProject = (data) => API.post("/projects", data);
export const updateProject = (id, data) => API.put(`/projects/${id}`, data);
export const deleteProject = (id) => API.delete(`/projects/${id}`);


export const getTasks = (projectId) =>
  API.get(`/tasks?projectId=${projectId}`);

export const addTask = (data) => API.post("/tasks", data);
export const updateTask = (id, data) => API.put(`/tasks/${id}`, data);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);
