import React from "react";
import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import db from "../Database";
import { BiGlassesAlt } from 'react-icons/bi'

function Courses() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const course = db.courses.find((course) => course._id === courseId);
  const [, , , , screen] = pathname.split("/");

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <GiHamburgerMenu style={{ marginRight: '10px' }} size="1.5em" />
          <div style={{ margin: 0, marginRight: '880px', fontSize: '20px' }}>
              <span style={{ color: 'red' }}>Courses {course?.name}</span> &gt; <span style={{ color: 'grey' }}>{screen}</span>
          </div>
          <button className="btn btn-light" style={{ marginLeft: 'auto' }}><BiGlassesAlt size={20} /> Student View</button>
      </div>
      <hr />

      <CourseNavigation />

      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          {/* Routing for Different Course Pages */}
          <Routes>
            <Route path="/" element={<Navigate to="Home" replace />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>

    </div>
  );
}

export default Courses;
