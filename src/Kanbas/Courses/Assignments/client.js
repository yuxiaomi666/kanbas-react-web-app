import axios from "axios";

const findAssignmentsByCourseId = async (courseId) => {
    const response = await axios.get(`http://localhost:4000/api/courses/${courseId}/assignments`);
    return response.data;
}

const createAssignment = async (courseId, assignment) => {
    const response = await axios.post(`http://localhost:4000/api/courses/${courseId}/assignments`, assignment);
    return response.data;
}

const removeAssignment = async (assignmentId) => {
    const response = await axios.delete(`http://localhost:4000/api/assignments/${assignmentId}`);
    return response.data;
}

const updateServerAssignment = async (assignment) => {
    const response = await axios.put(`http://localhost:4000/api/assignments/${assignment._id}`, assignment);
    return response.data;
}

export {
    findAssignmentsByCourseId,
    createAssignment,
    removeAssignment,
    updateServerAssignment
};

