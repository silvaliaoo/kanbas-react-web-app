import db from "../../Database";
import { useParams } from "react-router-dom";
import { FiSettings} from 'react-icons/fi';

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);

  return (
    <div className="col">
      <div className="float-end">
        <button className="btn btn-light">
          <i className="fas fa-file-import" aria-hidden="true"></i> Import
        </button>
        <button className="btn btn-light">
          <i className="fas fa-file-export" aria-hidden="true"></i> Export
        </button>
        <button className="btn btn-light">
          <FiSettings size={25} />
        </button>
      </div>

      <div className="container mt-5">
        <div className="row mb-4">
          <div className="col-md-6">
            <h5>Student Names</h5> 
            <input type="text" className="form-control" placeholder="Search Students" />
          </div>
          <div className="col-md-6">
            <h5>Assignment Names</h5>
            <input type="text" className="form-control" placeholder="Search Assignments" />
          </div>
        </div>

        <div>
          <button className="btn btn-light">
            <i className="fas fa-filter" aria-hidden="true"></i>Apply Filters
          </button>
        </div>

        {/* The table with dynamic data */}
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Student Name</th>
                {assignments.map((assignment, index) => (
                  <th key={assignment._id}>{assignment.title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {enrollments.map((enrollment) => {
                const user = db.users.find((user) => user._id === enrollment.user);
                return (
                  <tr key={enrollment._id}>
                    <td>{user.firstName} {user.lastName}</td>
                    {assignments.map((assignment) => {
                      const grade = db.grades.find(
                        (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                      return <td key={`${enrollment._id}-${assignment._id}`}>{grade?.grade || "-"}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Grades;
