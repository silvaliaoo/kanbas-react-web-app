import db from "../Database";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import { GiNotebook } from 'react-icons/gi';
import {GiSettingsKnobs} from 'react-icons/gi';

function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }
  ) {
  
  return (
    <div style={{ paddingLeft: '50px' }}>
      <h1>Dashboard</h1>
      <hr />
      <h2 style={{ paddingLeft: '20px' }}>Published Courses ({courses.length})</h2>
      <hr />
      <h5>Course</h5>
      <input value={course.name} className="form-control mb-3"
            onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <input value={course.number} className="form-control mb-3"
            onChange={(e) => setCourse({ ...course, number: e.target.value })} />
      <input value={course.startDate} className="form-control mb-3" type="date"
            onChange={(e) => setCourse({ ...course, startDate: e.target.value })}/>
      <input value={course.endDate} className="form-control mb-3" type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
      <button onClick={addNewCourse} className="btn btn-success">
        Add
      </button>
      <button onClick={updateCourse} className="btn btn-primary" style={{ marginLeft: '10px' }}>
        Update
      </button>
      <br />
      <br />



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
                  className="btn btn-primary" style={{ backgroundColor: 'transparent', color:"black", border:"none"}}
                >
                  {course.name}
                  <button
                    className="btn btn-warning"
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}
                    style={{ marginLeft: '10px' }}
                    >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}
                    style={{ marginLeft: '10px' }}
                  >
                    Delete
                  </button>

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
