import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";

function CourseNavigation({ course }) {
  const links = ["Home", "Modules", "Piazza", "Zoom Meeting", "Assignments", "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const { startDate } = course;

  return (
    <div className="d-none d-md-block">
      <div className="wd-grade-top-container" >
        <span className="wd-semester-text"> {startDate}</span>
      </div>
      <ul className=" wd-mid-navigation">
        {links.map((link, index) => (
          <li className={` ${pathname.includes(link) && "wd-active"}`}>
            <Link
              key={index}
              to={`/Kanbas/Courses/${courseId}/${link}`}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseNavigation;