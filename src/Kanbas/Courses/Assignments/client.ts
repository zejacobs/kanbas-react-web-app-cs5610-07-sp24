import axios from "axios";

const ASSIGNMENTS_API = "http://localhost:4000/api/assignments";
export const deleteAssignment = async (assignmentId: any) => {
  const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  return response.data;
};

export const updateAssignment = async (assignment: any) => {
  const response = await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
  return response.data;
};

export const createAssignment = async (courseId: any, assignment: any) => {
  const response = await axios.post(`${ASSIGNMENTS_API}/${courseId}/`, assignment);
  return response.data;
};

export const findAssignmentsForCourse = async (courseId: any) => {
  const response = await axios.get(`${ASSIGNMENTS_API}/${courseId}`);
  return response.data;
};
