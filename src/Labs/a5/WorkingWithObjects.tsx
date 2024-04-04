import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const [module, setModule] = useState({
    id: "123",
    name: "Test Module",
    description: "I am a module",
    course: "CS1234",
  });
  const ASSIGNMENT_URL = `${API_BASE}/a5/assignment`;
  const MODULE_URL = `${API_BASE}/a5/module`;

  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);

  const getAssignmentURL = `${API_BASE}/a5/assignment`;
  const getTitleURL = `${API_BASE}/a5/assignment/title`;
  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a href={getAssignmentURL}>Get Assignment</a>
      <h4>Retrieving Properties</h4>
      <a href={getTitleURL}>Get Title</a>
      <h3>Modifying Properties</h3>
      <input
        onChange={(e) =>
          setAssignment({
            ...assignment,
            title: e.target.value,
          })
        }
        value={assignment.title}
        type="text"
      />
      <button onClick={updateTitle}>Update Title to: {assignment.title}</button>
      <button onClick={fetchAssignment}>Fetch Assignment</button>
      <h4>Module</h4>
      <a href={`${MODULE_URL}`}>Get Module</a> <br />
      <a href={`${MODULE_URL}/name`}>Get Module Name</a> <br />
      <a href={`${MODULE_URL}/name/${module.name}`}>Update Module Name</a>
      <input type="text" onChange={(e) => setModule({ ...module, name: e.target.value })} value={module.name} /> <br />
      <a href={`${MODULE_URL}/description/${module.description}`}>Update Module Description</a>
      <input type="text" onChange={(e) => setModule({ ...module, description: e.target.value })} value={module.description} />
      <h4>Assignment</h4>
      <a href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>Update Assignment Score</a>
      <input type="number" onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value) })} value={assignment.score} /> <br />
      <a href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>Update Assignment Completion</a>
      <input type="checkbox" onChange={() => setAssignment({ ...assignment, completed: !assignment.completed })} checked={assignment.completed} />
    </div>
  );
}
export default WorkingWithObjects;
