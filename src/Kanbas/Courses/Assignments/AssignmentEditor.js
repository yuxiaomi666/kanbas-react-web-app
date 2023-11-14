import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../Database";
import { FaEllipsisVertical } from "react-icons/fa6";
import { AiOutlineCheckCircle } from "react-icons/ai";
import AssignmentSettings from "./AssignmentSettings";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  updateAssignment,
  setAssignment,
  reset
} from "./assignmentsReducer";
import * as client from "./client";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const { courseId } = useParams();
  const navigate = useNavigate();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();

  const handleSave = () => {
    const oldAssignment = assignments.find((a) => a._id === assignment._id);
    oldAssignment ? handleUpdateAssignment() : handleAddAssignment();
    dispatch(reset());
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  const handleCancel = () => {
    dispatch(reset());
  };

  const handleAddAssignment = () => {
    client.createAssignment(courseId, assignment).then((assignment) =>
      dispatch(addAssignment(assignment))
    );
  };

  const handleUpdateAssignment = () => {
    client.updateServerAssignment(assignment).then(() =>
      dispatch(updateAssignment(assignment))
    );
  };

  return (
    <div className="wd-flex-grow-1">
      <div className="wd-grade-top-button-container">
        <div className="h6 d-inline-block me-1">
          <AiOutlineCheckCircle class="wd-button-icon p-1 wd-fg-color-green" />
          <span className="wd-fg-color-green">Publish</span>
        </div>
        <button type="button" className="justify-content-center btn btn-light wd-bg-color-light-grey">
          <FaEllipsisVertical className="wd-button-icon p-1" />
        </button>
      </div>
      <div class="mb-3">
        <label for="name" className="form-label h6">Assignment Name</label>
        <input value={assignment.title}
          className="form-control mb-2"
          onChange={(e) => dispatch(setAssignment({
            ...assignment, title: e.target.value
          }))}
        />
      </div>
      <AssignmentSettings />
      <div className="text-center">
        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn btn-danger"
          onClick={handleCancel}
        >
          Cancel
        </Link>
        <button onClick={() => handleSave()} className="btn btn-success me-2">
          Save
        </button>
      </div>

    </div>
  );
}


export default AssignmentEditor;