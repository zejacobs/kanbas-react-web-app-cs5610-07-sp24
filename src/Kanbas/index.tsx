import { Route, Routes, Navigate } from "react-router";
import "./styles.css";
import Nav from "../Nav";
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import TopBar from "./TopBar/TopBar";

function Kanbas() {
  return (
    <>
      <TopBar />
      <div className="d-flex me-2" style={{ gap: "20px" }}>
        <KanbasNavigation />
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h2>Account</h2>} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Courses/:courseId/*" element={<Courses />} />
            <Route path="Calendar" element={<h2>Calendar</h2>} />
            <Route path="Inbox" element={<h2>Inbox</h2>} />
            <Route path="History" element={<h2>History</h2>} />
            <Route path="Studio" element={<h2>Studio</h2>} />
            <Route path="Commons" element={<h2>Commons</h2>} />
            <Route path="Help" element={<h2>Help</h2>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Kanbas;
