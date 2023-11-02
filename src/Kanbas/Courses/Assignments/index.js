import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { AiFillCheckCircle } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  return (

      <div className="container-fluid" style={{ marginTop: '30px' }}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <input type="text" className="form-control w-25" placeholder="Search for Assignments" />
          <div>
            <button className="btn btn-light me-2">+ Group</button>
            <button className="btn btn-danger me-2">+ Assignments</button>
            <button className="btn btn-light"><BsThreeDotsVertical /></button>
          </div>
        </div>
        <hr />

      <h2>Assignments {courseId}</h2>
      <ul className="list-group">
        {courseAssignments.map((assignment) => (
          <li key={assignment._id} className="list-group-item icon-before" style={{ fontSize: '1.25rem', padding: '15px', borderLeft: '5px solid green' }}>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
              {assignment.title}
            </Link>{assignment.description}
            <span className="float-end">
            <AiFillCheckCircle style={{ color: 'green' }} className="me-2" />
            <BsThreeDotsVertical />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Assignments;
