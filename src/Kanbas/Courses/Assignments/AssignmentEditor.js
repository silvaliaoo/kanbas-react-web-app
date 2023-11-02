import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../Database";
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiFillCheckCircle } from 'react-icons/ai';


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '30px', paddingRight: '20px'}}>
        <button className="btn btn-light" style={{ color: 'green' }}>
          <AiFillCheckCircle style={{ color: 'green' }} size={25} className="me-2" />
          Published
        </button>
        <button className="btn btn-light">
          <BsThreeDotsVertical />
        </button>
      </div>

      <h2>Assignment Name</h2>
      <input value={assignment.title}
             className="form-control mb-2" />
             <hr />
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '10px', paddingRight: '20px' }}>
        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
              className="btn btn-danger">
          Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-success">
          Save
        </button>
      </div>
      <hr />
    </div>
  );
}


export default AssignmentEditor;