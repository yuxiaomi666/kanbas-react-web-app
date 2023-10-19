import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { AiOutlineInbox } from "react-icons/ai";
import { AiOutlineHistory } from "react-icons/ai";
import { MdMediation } from "react-icons/md";
import { RiCreativeCommonsNdFill } from "react-icons/ri";
import { BiSolidHelpCircle } from "react-icons/bi";
import "../index.css";
function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];

  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon wd-nav-account-white" />,
    Dashboard: <RiDashboard3Fill className="wd-icon" />,
    Courses: <FaBook className="wd-icon" />,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
    Inbox: <AiOutlineInbox className="wd-icon" />,
    History: <AiOutlineHistory className="wd-icon" />,
    Studio: <MdMediation className="wd-icon" />,
    Commons: <RiCreativeCommonsNdFill className="wd-icon" />,
    Help: <BiSolidHelpCircle className="wd-icon" />,
  };

  const { pathname } = useLocation();
  return (
    <div className="d-none d-md-block wd-bg-color-black">
      <ul className="wd-kanbas-navigation">
        <li className="wd-kanbas-navigation-logo">
          <img src="/Kanbas/img/neu-logo.png" style={{width: 45 }}></img>
        </li>
        {links.map((link, index) => (
          <li className={`${pathname.includes(link) && "wd-active"}`}>
            <Link
              key={index}
              to={`/Kanbas/${link}`}
            >
              {linkToIconMap[link]}
              <br />
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default KanbasNavigation;
