import {
  FaBars,
  FaBook,
  FaCalendar,
  FaChevronDown,
  FaDesktop,
  FaHistory,
  FaInbox,
  FaRegArrowAltCircleRight,
  FaRegQuestionCircle,
  FaTachometerAlt,
  FaUser,
} from "react-icons/fa";
import "./topbar.css";

function TopBar() {
  return (
    <>
      <div className="d-block d-md-none wd-nav-bar">
        <div className="row">
          <div className="col">
            <div className="dropdown">
              <button className="btn" type="button" id="kanbasnav-dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                <FaBars />
              </button>
              <ul className="dropdown-menu kanbasnav-dropdown" aria-labelledby="kanbasnav-dropdownMenuButton">
                <li>
                  <button className="btn btn-light border float-end">X</button>
                </li>
                <li>
                  <a className="dropdown-item" href="/Kanbas/Account/Profile/screen.html">
                    <FaUser id="account-icon" className="me-2" />
                    Account
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/Kanbas/Dashboard/screen.html">
                    <FaTachometerAlt className="me-2" />
                    Dashboard
                  </a>
                </li>
                <li className="wd-active">
                  <a className="dropdown-item" href="/Kanbas/Courses/Home/screen.html">
                    <FaBook className="me-2" />
                    Courses
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <FaCalendar className="me-2" />
                    Calendar
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <FaInbox className="me-2" />
                    Inbox
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <FaHistory className="me-2" />
                    History
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <FaDesktop className="me-2" />
                    Studio
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <FaRegArrowAltCircleRight className="me-2" />
                    Commons
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <FaRegQuestionCircle className="me-2" />
                    Help
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col text-center">Kanbas</div>
          <div className="col">
            <div className="dropdown">
              <button className="btn float-end" type="button" id="kanbasnav-dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                <FaChevronDown />
              </button>
              <ul className="dropdown-menu kanbasnav-dropdown" aria-labelledby="kanbasnav-dropdownMenuButton">
                <li>
                  <a href="/Kanbas/Courses/Home/screen.html">
                    <i className="fa fa-home me-2"></i>Home
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-crosshairs me-2"></i>Modules
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-plug me-2"></i>Piazza
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-plug me-2"></i>Zoom Meetings
                  </a>
                </li>
                <li>
                  <a href="/Kanbas/Courses/Assignments/screen.html">
                    <i className="fa fa-pencil-square-o me-2"></i>Assignments
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-rocket me-2"></i>Quizzes
                  </a>
                </li>
                <li>
                  <a href="/Kanbas/Courses/Grades/screen.html">
                    <i className="fa fa-bar-chart me-2"></i>Grades
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-users me-2"></i>People
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-plug me-2"></i>Panopto Video
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-comments-o me-2"></i>Discussions
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-bullhorn me-2"></i>Announcements
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-file-text-o me-2"></i>Pages
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-folder-o me-2"></i>Files
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-newspaper-o me-2"></i>Rubrics
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-bullseye me-2"></i>Outcomes
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-circle-thin me-2"></i>Collaborations
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-tasks me-2"></i>Syllabus
                  </a>
                </li>
                <li>
                  <a href="/Kanbas/Courses/Settings/CourseDetails/screen.html">
                    <i className="fa fa-cog me-2"></i>Settings
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TopBar;
