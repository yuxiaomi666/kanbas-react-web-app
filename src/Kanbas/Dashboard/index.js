import db from "../Database";
import { Link } from "react-router-dom";
import { useState } from "react";

function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }) {
  // const courses = db.courses;


  return (
    <div class="wd-dashboard-grid flex-wrap">
      <div class="row m-4">
        <h3>Dashboard</h3>
        <hr />
      </div>
      <div class="wd-indented-row">
        Published Courses ({courses.length})
        <h5>Course</h5>
        <input value={course.name} className="form-control" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
        <input value={course.number} className="form-control" onChange={(e) => setCourse({ ...course, number: e.target.value })} />
        <input value={course.startDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
        <input value={course.endDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
        <button className="btn btn-success"
        onClick={addNewCourse} >
          Add
        </button>
        <button className="btn btn-primary"
        onClick={updateCourse} >
          Update
        </button>

        <hr />
      </div>

      <div class="row row-col s-1 row-col s-md-3 g-4 m-4 mt-0">
        {courses.map((course, index) => (
          <div class="col flex-grow-0 wd-dashboard-card-item">
            <div class="card wd-dashboard-card">
              <img
                src="/Kanbas/img/bright-blue.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <Link
                  key={course._id}
                  to={`/Kanbas/Courses/${course._id}`}
                >
                  <h5 class="card-title">
                    {course.name}
                    </h5>
                  <button className="btn btn-danger"
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}>
                    Delete
                  </button>
                  <button className="btn btn-success"
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}>
                    Edit
                  </button>

                  <div class="card-text">{course.number}</div>
                  <div>{course.startDate}</div>
                  </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

