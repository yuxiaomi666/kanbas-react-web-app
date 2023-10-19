import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import Header from "./Header";
import ListHeader from "./ListHeader";
import { FaEllipsisVertical } from "react-icons/fa6";
import { BsFillCalculatorFill } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div className="flex-grow-1">
      <h2>Assignments for course {courseId}</h2>
      <Header />
      <div className="wd-clear-both mt-5">
        <hr />
        <ul className="list-group">
          <ListHeader />
          {courseAssignments.map((assignment) => (
            <li className="list-group-item">
              <Link
                key={assignment._id}
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                className="text-decoration-none wd-fg-color-black">
                <div class="d-flex justify-content-center align-items-center">
                  <FaEllipsisVertical className="wd-button-icon me-2" />
                  <BsFillCalculatorFill className="wd-button-icon me-2 wd-fg-color-green" />
                  <div class="d-inline-block p-4 flex-grow-1">
                    {assignment.title}
                  </div>
                  <AiOutlineCheckCircle class="wd-button-icon p-1 wd-fg-color-green" />
                  <FaEllipsisVertical className="wd-button-icon p-1" />
                </div>
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}
export default Assignments;