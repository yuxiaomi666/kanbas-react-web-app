import React, { useEffect, useState} from "react";
import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import Breadcrumb from "./breadcrumb";
import axios from "axios";

function Courses() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const [empty, kanbas, coursesStr, id, screen] = pathname.split("/");
  const [course, setCourse] = useState({});

  const findCourseById = async() => {
    const response = await axios.get(`http://localhost:4000/api/courses/${courseId}`);
    setCourse(response.data);
  }

  useEffect(() => {
    findCourseById();
  }
  , []);
  
  return (
    <>
      <div className=" d-none d-md-block">
        < Breadcrumb course={course}/>
      </div>
      
      <div>
        <div
          className="d-flex"
        >
          <CourseNavigation course={course} />
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Courses;
