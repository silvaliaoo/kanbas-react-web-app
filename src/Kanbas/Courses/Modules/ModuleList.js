import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <ul className="list-group">
      <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="list-group-item">
      <button onClick={() => dispatch(updateModule(module))} className="btn btn-primary">
        Update
        </button>

        <button
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}
          style={{ marginRight: '5px' }}
          className="btn btn-success"
        >
          Add
        </button>
        <input
          value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
          style={{ flex: 1, margin: '0 5px' }}
        />
        <textarea
          value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
          style={{ flex: 1, margin: '0 5px' }}
        />
      </li>


      {
        modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item">
            <div className="d-flex justify-content-end">
                <button
                  onClick={() => dispatch(deleteModule(module._id))}
                  className="btn btn-danger me-2"
                >
                  Delete
                </button>
                
                <button
                  onClick={() => dispatch(setModule(module))}
                  className="btn btn-secondary"
                >
                  Edit
                </button>
              </div>


             <h3>{module.name}</h3>
             <p>{module.description}</p>
             {
                module.lessons && (
                    <ul className="list-group">
                        {
                            module.lessons.map((lesson, index) => (
                                <li key={index} className="list-group-item">
                                    <h4>{lesson.name}</h4>
                                    <p>{lesson.description}</p>
                                </li>
                            ))
                        }
                    </ul>
                )
             }
           </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;