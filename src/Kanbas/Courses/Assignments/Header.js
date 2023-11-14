import { FaEllipsisVertical } from "react-icons/fa6";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    setAssignment,
    reset
} from "./assignmentsReducer";
import * as client from "./client";

function Header() {
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();
    const { courseId } = useParams();
    const navigate = useNavigate();


    return (
        <>
            <div className="float-start">
                <input type="text" className="form-control" id="name" placeholder="Search for Assignment" />
            </div>
            <div className="float-end">
                <button type="button" className="btn btn-secondary btn-light wd-bg-color-light-grey">
                    <AiOutlinePlus className="wd-button-icon" />
                    Group
                </button>
                <button type="button" className="btn btn-danger" onClick={() => {
                    dispatch(setAssignment({ ...assignment, course: courseId, _id: Date.now().toString() }));
                    navigate(`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`);
                }}>
                    <AiOutlinePlus className="wd-button-icon" />
                    Assignment
                </button>
                <button type="button" className="btn btn-secondary btn-light wd-bg-color-light-grey">
                    <FaEllipsisVertical className="wd-button-icon" />
                </button>
            </div>
        </>
    );
}
export default Header;