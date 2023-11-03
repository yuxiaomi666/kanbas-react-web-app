import { Link } from "react-router-dom";
import Nav from "../Nav"
import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import KanbasNavigation from "./KanbasNavigation";
import db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";


function Kanbas() {
    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState({
        name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });
    const addNewCourse = () => {
        setCourses([...courses,
        {
            _id: new Date().getTime().toString(),
            ...course
        }]);
    };
    const deleteCourse = (courseId) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };
    const updateCourse = () => {
        setCourses(
            courses.map((c) => 
                c._id === course._id ? course : c
        ));
    };
    return (
        <Provider store={ store }>
            {/* <div>
                <Nav />
            </div> */}
            <div className="wd-flex-row-container">
                <KanbasNavigation />
                <div className="wd-flex-grow-1 wd-content-container ">
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Account" element={<Account />} />
                        <Route path="Dashboard" element={<Dashboard 
                            courses={courses}
                            course={course}
                            setCourse={setCourse}
                            addNewCourse={addNewCourse}
                            deleteCourse={deleteCourse}
                            updateCourse={updateCourse} />} />
                        <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
                        <Route path="Calendar" element={<h1>Calendar</h1>} />
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}
export default Kanbas