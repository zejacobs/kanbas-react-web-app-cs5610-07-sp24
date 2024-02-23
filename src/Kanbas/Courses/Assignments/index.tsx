import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter((assignment) => assignment.course === courseId);
  const linkStyle = { "text-decoration": "none", color: "black", "font-weight": "bold" };

  return (
    <div className="flex-fill">
      <div className="row">
        <div className="col">
          <input className="form-control w-50" type="text" placeholder="Search for Assignments" />
        </div>
        <div className="col">
          <span className="float-end">
            <button className="btn btn-light border me-2">+ Group</button>
            <button className="btn btn-danger me-2">+ Assignment</button>
            <button className="btn btn-light border">
              <FaEllipsisV />
            </button>
          </span>
        </div>
      </div>
      <hr />
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              40% of Total
              <FaCheckCircle className="text-success ms-2" />
              <FaPlusCircle className="ms-2" />
              <FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <Link style={linkStyle} to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                  {assignment.title}
                </Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
export default Assignments;
