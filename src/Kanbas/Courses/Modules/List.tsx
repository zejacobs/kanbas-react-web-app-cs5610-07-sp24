import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaRegCheckCircle } from "react-icons/fa";
import { useParams } from "react-router";

function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <div className="flex-fill">
      <div className="row">
        <div className="col">
          <span id="module-buttons" className="float-end">
            <button className="btn btn-light border">Collapse All</button>
            <button className="btn btn-light border">Expand All</button>
            <button className="btn btn-light border">View Progress</button>
            <div className="btn btn-light border">
              <FaRegCheckCircle className="text-success me-1" />
              <select className="btn-light border-0">
                <option>Publish All</option>
                <option>Unpublish All</option>
                <option>Unpublish All</option>
              </select>
            </div>
            <button className="btn btn-danger">+ Module</button>
            <button className="btn btn-light border">
              <FaEllipsisV />
            </button>
          </span>
        </div>
      </div>
      <hr />

      <ul className="list-group wd-modules">
        {modulesList.map((module, index) => (
          <li key={index} className="list-group-item" onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {
              <ul className="list-group">
                {module.lessons?.map((lesson, index) => (
                  <li className="list-group-item" key={index}>
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            }
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ModuleList;
