import ModuleList from "../Modules/ModuleList";
import { GiSettingsKnobs } from 'react-icons/gi';
import { BiImport, BiSelection } from 'react-icons/bi';
import { TbFileImport } from 'react-icons/tb';
import { GrOverview } from 'react-icons/gr';
import { FaBullhorn } from 'react-icons/fa';
import { RiNumbersFill } from 'react-icons/ri';
import { MdNotificationsActive } from 'react-icons/md'; 

function Home() {
  return (
    <div className="row" style={{ marginTop: '30px' }}>
      <div className="col-8">
        <div>
          <div className="float-end">
            <button className="dropdown btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fa fa-check-circle text-success me-2" aria-hidden="true"></i>
              Publish All
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">UnPublish</a></li>
            </ul>
            <button className="btn btn-light">View Progress</button>
            <button className="btn btn-light">Collapse All</button>
            <button className="btn btn-light">
              <GiSettingsKnobs size={25} />
            </button>
          </div>
          <br />
          <hr style={{ marginTop: '20px' }} />
          <ModuleList />
        </div>
      </div>
      <div className="col-4">
        <h2>Course Status</h2>
        <button className="btn btn-light me-2">Unpublished</button>
        <button className="btn btn-success">Published</button>
        <br /><br />

        <div className="list-group">
          <button className="list-group-item list-group-item-action me-4"><BiImport size={25} /> Import Existing Content</button>
          <button className="list-group-item list-group-item-action me-4"><TbFileImport size={25}/> Import From Commons</button>
          <button className="list-group-item list-group-item-action me-4"><BiSelection size={25} /> Choose Home Page</button>
          <button className="list-group-item list-group-item-action me-4"><GrOverview size={25} /> View Course Stream</button>
          <button className="list-group-item list-group-item-action me-4"><FaBullhorn size={25} /> New Announcement</button>
          <button className="list-group-item list-group-item-action me-4"><RiNumbersFill size={25} /> New Analytics</button>
          <button className="list-group-item list-group-item-action me-4"><MdNotificationsActive size={25} /> View Course Notification</button>
        </div>
        <br />


        <h2>To Do</h2>
        <hr />
        <h4 style={{ color: 'red' }}><i className="far fa-surprise"></i> Grade A1</h4>
        <p>100 points Sep 18</p>
        <div className="float-end">
            <i className="fas fa-calendar-week"></i> <span style={{ color: 'red' }}>Calendar</span>
        </div>
        <br />

        <h2>Coming Up</h2>
        <hr />
        <div>
            <i className="fas fa-calendar-week"></i> <span style={{ color: 'red' }}>Lecture</span><br />CS4550, 12631, 202410 Sep 7 at 10:45am
        </div>
        <br />
        <div>
            <i className="fas fa-calendar-week"></i> <span style={{ color: 'red' }}>Lecture</span><br />CS5610, 14567, 202410 Sep 9 at 11:45am
        </div>
        <br />
      </div>
    </div>
  );
}

export default Home;
