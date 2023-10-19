import React from "react";
import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
import db from "../Database";
import { FaBars } from "react-icons/fa";

function Breadcrumb() {
    const { courseId } = useParams();
    const { pathname } = useLocation();
    const [empty, kanbas, courses, id, screen] = pathname.split("/");
    const course = db.courses.find((course) => course._id === courseId);
    return (
        <div className="wd-breadcrumb">
            <FaBars className="wd-breadcrumb-icon"/>
            <nav className="wd-breadcrumb-style" aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a className="wd-breadcrumb-color-red" href=" "> {course._id} </a ></li>
                    <li className="breadcrumb-item active" aria-current="page">{screen}</li>
                </ol>
            </nav>
            <hr />
        </div>
    )
}

export default Breadcrumb;