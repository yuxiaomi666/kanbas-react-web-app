import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import Header from "./Header";
import ListHeader from "./ListHeader";
import { FaEllipsisVertical } from "react-icons/fa6";
import { BsFillCalculatorFill } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
  setAssignments,
} from "./assignmentsReducer";
import SimpleDialog from "./SimpleDialog";
import * as client from "./client";

function Assignments() {
  const { courseId } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();

  useEffect(() => {
    client.findAssignmentsByCourseId(courseId).then((assignments) =>
      dispatch(setAssignments(assignments))
    );
  }
  , [courseId]);
  
  const handleDeleteAssignment = (assignmentId) => {
    client.removeAssignment(assignmentId).then(() =>
      dispatch(deleteAssignment(assignmentId))
    );
  };
  
  const handleDeleteClick = () => {
    setIsOpen(true);
  };
  const handleYesClick = () => {
    handleDeleteAssignment(assignment._id);
    setIsOpen(false);
  };

  const handleNoClick = () => {
    setIsOpen(false);
  };
  return (
    <div className="flex-grow-1">
      <h2>Assignments for course {courseId}</h2>
      <Header />
      <div className="wd-clear-both mt-5">
        <hr />
        <ul className="list-group">
          <ListHeader />
          {assignments.map((assignment) => (
            <li className="list-group-item">
              <Link
                key={assignment._id}
                onClick={(e) => dispatch(setAssignment(assignment))}
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                className="text-decoration-none wd-fg-color-black">
                <div class="d-flex justify-content-center align-items-center">
                  <FaEllipsisVertical className="wd-button-icon me-2" />
                  <BsFillCalculatorFill className="wd-button-icon me-2 wd-fg-color-green" />
                  <div class="d-inline-block p-4 flex-grow-1">
                    {assignment.title}
                  </div>
                  <button className="btn btn-danger"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDeleteClick();
                    }}>
                    Delete
                  </button>
                  <AiOutlineCheckCircle class="wd-button-icon p-1 wd-fg-color-green" />
                  <FaEllipsisVertical className="wd-button-icon p-1" />
                </div>
              </Link>
              {isOpen && <SimpleDialog handleYesClick={handleYesClick} handleNoClick={handleNoClick}></SimpleDialog>}
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}
export default Assignments;