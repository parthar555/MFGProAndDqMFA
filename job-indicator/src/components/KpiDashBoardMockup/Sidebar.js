import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faBell, faMessage, faStopwatch, faTh, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './MockupApp.scss';
import grid from '../../../public/grid.png';

const Sidebar = () => {
  // State for handling toggling of submenus
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isStopwatchOpen, setIsStopwatchOpen] = useState(false);
  const [isKpiOpen, setIsKpiOpen] = useState(false);
  
  // Toggle Functions
  const toggleSchedule = () => setIsScheduleOpen(!isScheduleOpen);
  const toggleStopwatch = () => setIsStopwatchOpen(!isStopwatchOpen);
  const toggleKpi = () => setIsKpiOpen(!isKpiOpen);

  return (
    <div className="sidebar">
      <div  className='grid'>
        <div className='sidebar-item'>
          <img src={grid} alt="KPI Dashboard Logo" className="grid" />
        </div>
      </div>
      <div className='schedule'>
        <div className="sidebar-item" onClick={toggleSchedule}>
          <FontAwesomeIcon icon={faCalendar} />
          <span>Production Schedule</span>
        </div>
      </div>
      <div className='StopwatchWrapper'>
        <div className="sidebar-item" onClick={toggleStopwatch}>
          <FontAwesomeIcon icon={faStopwatch} />
          <span>My Shift</span>
        </div>
        {isStopwatchOpen && (
          <div className="submenu">
            <div className="sidebar-item kpi">KPI's</div>
            <div className="sidebar-item">Reports</div>
            <div className="sidebar-item">Tasks</div>
          </div>
        )}
      </div>
        
      <div className='messagesMenu'>
      <div className="sidebar-item">
        <FontAwesomeIcon icon={faMessage} />
        <span>Messages</span>
      </div>
      </div>
      <div className='notification'>
        <div className="sidebar-item">
          <FontAwesomeIcon icon={faBell} />
          <span>Notification</span>
        </div>
      </div>
      <div className='ProfileBox'>
        <div className="sidebar-item profile">
          <span className='circle'>JD</span>
          <span>Profile</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
