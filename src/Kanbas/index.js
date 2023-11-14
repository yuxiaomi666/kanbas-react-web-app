import { Link } from "react-router-dom";
import Nav from "../Nav"
import axios from "axios";
import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import KanbasNavigation from "./KanbasNavigation";
import db from "./Database";
import { useEffect, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";


function Kanbas() {
    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState({
        name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });
    const addNewCourse = async() => {
        const response = await axios.post("http://localhost:4000/api/courses", course);
        setCourses([response.data, ...courses ]); // render again
    };
    const deleteCourse = async(courseId) => {
        await axios.delete(`http://localhost:4000/api/courses/${courseId}`);
        setCourses(courses.filter((c) => c._id !== courseId)); // no response from server, so client also need to delete
    };
    const updateCourse = async (courseId) => {
        await axios.put(`http://localhost:4000/api/courses/${courseId}`, course);
        setCourses(courses.map((c) => c._id === course._id ? course : c));
    };

    const fetchCourses = async () => {
        const response = await axios.get("http://localhost:4000/api/courses");
        setCourses(response.data);
    }

    useEffect(() => {
        fetchCourses();
    }, []);


    return (
        <Provider store={store}>
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
                        <Route path="Courses/:courseId/*" element={<Courses />} />
                        <Route path="Calendar" element={<h1>Calendar</h1>} />
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}
export default Kanbas