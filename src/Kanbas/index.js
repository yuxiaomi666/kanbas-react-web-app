import { Link } from "react-router-dom";
import Nav from "../Nav"
import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import KanbasNavigation from "./KanbasNavigation";

function Kanbas() {
    return (
        // <div>
        //     <Nav />
        // </div>
        <div className="wd-flex-row-container">
            <KanbasNavigation />
            <div className="wd-flex-grow-1 wd-content-container ">
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<Account />} />
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Courses/:courseId/*" element={<Courses />} />
                    <Route path="Calendar" element={<h1>Calendar</h1>} />
                </Routes>
            </div>
        </div>

    );
}
export default Kanbas