import db from "../../Database";
import { useParams } from "react-router-dom";
import { FaFileImport } from "react-icons/fa";
import { FaFileExport } from "react-icons/fa";
import { AiTwotoneSetting } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";


function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div className="wd-flex-grow-1">
      <div class="wd-grade-top-button-container">
        <button type="button" class="btn btn-light wd-bg-color-light-grey">
          <FaFileImport />
          Import
        </button>
        <button type="button" class="btn btn-light wd-bg-color-light-grey">
          <FaFileExport />
          Export
        </button>
        <button type="button" class="btn btn-light wd-bg-color-light-grey">
          <AiTwotoneSetting />
        </button>
      </div>
      <div class="wd-clear-both">
        <div class="container wd-grade-search-container">
          <div class="row">
            <div class="col">
              <div class="mb-3">
                <label for="studentName" class="form-label">Student Names</label>
                <div>
                  <input type="search"
                    class="form-control"
                    id="studentName"
                    title="Type the name of the student to search for"
                    placeholder="Search Students"/>
                </div>

              </div>
            </div>
            <div class="col">
              <label for="assignmentName" class="form-label">Assignment Names</label>
              <input type="search"
                class="form-control"
                id="assignmentName"
                title="Type the name of the assignment to search for"
                placeholder="Search assignment"/>
            </div>
          </div>
        </div>
        <div class="wd-grade-filter">
          <button type="button" class="btn btn-light wd-bg-color-light-grey">
            <FaFilter/>
            <span>Apply Filters</span>
          </button>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="thead-light">
              <th>Student Name</th>
              {assignments.map((assignment) => (<th scope="col">{assignment.title}</th>))}
            </thead>
            <tbody>
              {enrollments.map((enrollment) => {
                const user = db.users.find((user) => user._id === enrollment.user);
                return (
                  <tr>
                    <td>{user.firstName} {user.lastName}</td>
                    {assignments.map((assignment) => {
                      const grade = db.grades.find(
                        (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                      return (<td>{grade?.grade || ""}</td>);
                    })}
                  </tr>);
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Grades;