import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import {BsFillInboxesFill} from "react-icons/bs";
import {FaHistory} from "react-icons/fa";
import {LuComputer} from "react-icons/lu";
import {LiaCreativeCommonsSa} from "react-icons/lia";
import {BiSolidHelpCircle} from "react-icons/bi";
import "./index.css";
import neu from '../neu.png';


function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];

  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon-account" />,
    Dashboard: <RiDashboard3Fill className="wd-icon" />,
    Courses: <FaBook className="wd-icon" />,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
    Inbox: <BsFillInboxesFill className="wd-icon" />,
    History: <FaHistory className="wd-icon" />,
    Studio: <LuComputer className="wd-icon" />,
    Commons: <LiaCreativeCommonsSa className="wd-icon" />,
    Help: <BiSolidHelpCircle className="wd-icon" />,
  };
  

  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation" style={{height: '100%'}}>
        <div className="navigation-logo-container">
          <img src={neu} alt="logo" className="logo-img" /> 
        </div>


      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {linkToIconMap[link]}
          <br/>
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;