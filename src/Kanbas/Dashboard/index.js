import db from "../Database";
import { Link } from "react-router-dom";
import { GiNotebook } from 'react-icons/gi';
import {GiSettingsKnobs} from 'react-icons/gi';


function Dashboard() {
  const courses = db.courses;
  
  return (
    <div style={{ paddingLeft: '50px' }}>
      <h1>Dashboard</h1>
      <hr />
      <h2 style={{ paddingLeft: '20px' }}>Published Courses ({courses.length})</h2>
      <hr />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {courses.map((course, index) => (
          <div className="col" key={course._id}>
            <div className="card h-100">
            <div style={{ position: 'relative' }}>
            <img src={course.image} className="card-img-top" alt="..." style={{ width: "100%", maxHeight: "300px" }} />

            <GiSettingsKnobs 
                style={{ 
                    position: 'absolute', 
                    top: '10px', 
                    right: '10px',
                    fontSize: '30px',
                    color: 'white'
                }} 
            />
            </div>

              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <Link
                  to={`/Kanbas/Courses/${course._id}`}
                  className="btn btn-primary"
                >
                  {course.name}
                </Link>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <GiNotebook size={30} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
