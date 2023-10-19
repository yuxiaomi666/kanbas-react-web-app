import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../Database";
import { FaEllipsisVertical } from "react-icons/fa6";
import { AiOutlineCheckCircle } from "react-icons/ai";
import AssignmentSettings from "./AssignmentSettings";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
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
          className="form-control mb-2"  />
      </div>
      <AssignmentSettings />
      <div className="">
        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn btn-danger">
          Cancel
        </Link>
        {/* <Link onClick={handleSave}
            to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-success me-2">
        Save
      </Link> */}
        <button onClick={handleSave} className="btn btn-success me-2">
          Save
        </button>
      </div>

    </div>
  );
}


export default AssignmentEditor;