import axios from "axios";

const findModulesByCourseId = async (courseId) => {
    const response = await axios.get(`http://localhost:4000/api/courses/${courseId}/modules`);
    return response.data;
}

const createModule = async (courseId, module) => {
    const response = await axios.post(`http://localhost:4000/api/courses/${courseId}/modules`, module);
    return response.data;
}

const removeModule = async (moduleId) => {
    const response = await axios.delete(`http://localhost:4000/api/modules/${moduleId}`);
    return response.data;
}

const updateServerModule = async (module) => {
    const response = await axios.put(`http://localhost:4000/api/modules/${module._id}`, module);
    return response.data;
}

export  { 
    findModulesByCourseId,
    createModule,
    removeModule,
    updateServerModule };

