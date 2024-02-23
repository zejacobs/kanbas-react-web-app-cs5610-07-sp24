import Assignment3 from "./a3";
import Nav from "../Nav";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

function Labs() {
  return (
    <div>
      <Nav />
      <Link to="/Labs/a3">Assignment 3</Link> | <Link to="/Labs/a4">Assignment 4</Link>
      <Routes>
        <Route path="/a3/*" element={<Assignment3 />} />
      </Routes>
    </div>
  );
}

export default Labs;
