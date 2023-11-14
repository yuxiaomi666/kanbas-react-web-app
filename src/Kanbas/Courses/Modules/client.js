import axios from "axios";
// const MODULES_URL = 'https://kanbas-node-server-app-ubbc.onrender.com';
const API_BASE = process.env.REACT_APP_API_BASE;
// const MODULES_URL = `${API_BASE}/modules`;

const findModulesByCourseId = async (courseId) => {
    const response = await axios.get(`${API_BASE}/courses/${courseId}/modules`);
    return response.data;
}

const createModule = async (courseId, module) => {
    const response = await axios.post(`${API_BASE}/courses/${courseId}/modules`, module);
    return response.data;
}

const removeModule = async (moduleId) => {
    const response = await axios.delete(`${API_BASE}/modules/${moduleId}`);
    return response.data;
}

const updateServerModule = async (module) => {
    const response = await axios.put(`${API_BASE}/modules/${module._id}`, module);
    return response.data;
}

export  { 
    findModulesByCourseId,
    createModule,
    removeModule,
    updateServerModule };

