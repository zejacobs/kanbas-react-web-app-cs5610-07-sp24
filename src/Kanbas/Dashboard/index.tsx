import React, { useState } from "react";
import { Link } from "react-router-dom";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  return (
    <div className="p-4">
      <h1>Dashboard</h1> <hr />
      <h5>Add Course</h5>
      <div className="row w-25 ms-1 mb-2">
        <input value={course.name} className="form-control" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
        <input value={course.number} className="form-control" onChange={(e) => setCourse({ ...course, number: e.target.value })} />
        <input value={course.startDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
        <input value={course.endDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
      </div>
      <span>
        <button className="btn btn-success" onClick={addNewCourse}>
          Add
        </button>
        <button className="btn btn-primary ms-1" onClick={updateCourse}>
          Update
        </button>{" "}
      </span>
      <hr />
      <h2>Published Courses ({courses.length})</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={course.image ? `/images/${course.image}` : "/images/reactjs.jpg"} className="card-img-top" style={{ height: 150 }} />
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course.id}/Home`} style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name}{" "}
                  </Link>
                  <p className="card-text">{course.id}</p>
                  <Link to={`/Kanbas/Courses/${course.id}/Home`} className="btn btn-success">
                    Go{" "}
                  </Link>
                  <span className="float-end">
                    <button
                      className="btn btn-primary"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger ms-1"
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}
                    >
                      Delete
                    </button>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
