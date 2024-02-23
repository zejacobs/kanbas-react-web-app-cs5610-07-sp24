import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {
  FaTachometerAlt,
  FaRegUserCircle,
  FaBook,
  FaRegCalendarAlt,
  FaInbox,
  FaHistory,
  FaDesktop,
  FaRegArrowAltCircleRight,
  FaRegQuestionCircle,
} from "react-icons/fa";

function KanbasNavigation() {
  const links = [
    { label: "Account", icon: <FaRegUserCircle className="fs-3" /> },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-3 wd-nav-icon" /> },
    { label: "Courses", icon: <FaBook className="fs-3 wd-nav-icon" /> },
    { label: "Calendar", icon: <FaRegCalendarAlt className="fs-3 wd-nav-icon" /> },
    { label: "Inbox", icon: <FaInbox className="fs-3 wd-nav-icon" /> },
    { label: "History", icon: <FaHistory className="fs-3 wd-nav-icon" /> },
    { label: "Studio", icon: <FaDesktop className="fs-3 wd-nav-icon" /> },
    { label: "Commons", icon: <FaRegArrowAltCircleRight className="fs-3 wd-nav-icon" /> },
    { label: "Help", icon: <FaRegQuestionCircle className="fs-3 wd-nav-icon" /> },
  ];
  const { pathname } = useLocation();

  return (
    <div className="d-none d-md-block">
      <ul className="wd-kanbas-navigation">
        <li>
          <Link to="https://northeastern.edu">
            <div className="wd-northeastern-n">N</div>
          </Link>
        </li>
        {links.map((link, index) => (
          <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
            <Link to={`/Kanbas/${link.label}`}>
              {" "}
              {link.icon} <br /> {link.label}{" "}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default KanbasNavigation;
