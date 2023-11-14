import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const findAssignmentsByCourseId = async (courseId) => {
    const response = await axios.get(`${API_BASE}/courses/${courseId}/assignments`);
    return response.data;
}

const createAssignment = async (courseId, assignment) => {
    const response = await axios.post(`${API_BASE}/courses/${courseId}/assignments`, assignment);
    return response.data;
}

const removeAssignment = async (assignmentId) => {
    const response = await axios.delete(`${API_BASE}/assignments/${assignmentId}`);
    return response.data;
}

const updateServerAssignment = async (assignment) => {
    const response = await axios.put(`${API_BASE}/assignments/${assignment._id}`, assignment);
    return response.data;
}

export {
    findAssignmentsByCourseId,
    createAssignment,
    removeAssignment,
    updateServerAssignment
};

