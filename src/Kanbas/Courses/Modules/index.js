import React from 'react';
import ModuleList from "./ModuleList";
import { GiSettingsKnobs } from 'react-icons/gi'; // Import the icon

function Modules() {
  return (
    <div style={{ marginTop: '30px' }}>
      <div className="float-end ">
        <button className="btn btn-danger">+ Module</button>
        <button className="dropdown btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="fa fa-check-circle text-success me-2" aria-hidden="true"></i>
          Publish All
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">UnPublish</a></li>
        </ul>
        <button className="btn btn-light">View Progress</button>
        <button className="btn btn-light">Collapse All</button>
        <button className="btn btn-light size={30}">
          <GiSettingsKnobs size={25}/>
        </button>
      </div>
      <br />
      <hr style={{ marginTop: '30px', width: '100%', padding: '0', margin: '0' }} />
      <br />
      
      <ModuleList />
    </div>
  );
}

export default Modules;
