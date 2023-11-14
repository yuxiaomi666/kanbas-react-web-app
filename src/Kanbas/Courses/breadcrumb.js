import React from "react";
import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
import db from "../Database";
import { FaBars } from "react-icons/fa";

function Breadcrumb( {course} ) {
    const { courseId } = useParams();
    const { pathname } = useLocation();
    const [empty, kanbas, coursesStr, id, screen] = pathname.split("/");
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