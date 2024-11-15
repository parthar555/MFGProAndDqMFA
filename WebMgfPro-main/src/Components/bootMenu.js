import React, { useCallback, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.scss'; // Additional styling if needed
import { FaAngleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { productionSchedule, reports, shiftLeaderPlanner, shiftPlanner, workflows, workFlowsManager,notifications,feedback } from './Icons';



const Menu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  
  //swati
  const navigate = useNavigate();
  const handleClick = useCallback((menuTitle) => {
    console.log("menuTitle",menuTitle);
     if(menuTitle === 'Production Schedule'){
        navigate('/PSFigmaScreen');
      }
     }
  );

  const menuData = [
    {
      title: 'Forms Builder',
      icon: workflows(),
      submenu: [
        { title: 'Create', children :['Section of Questions','Form'] },
        { title: 'Libraries', children: ['Sections Library', 'Forms Library'] },
      ],
    },
    {
      title: 'Shift Planner',
      icon:shiftPlanner(),
      submenu: [
        { title: 'Shift Planner', children :['Start Planning'] },
        { title: 'Shift Leaders Planner', children : ['Start Planning'] },
        
      ],
    },
    {
      title: 'Shift Leader Planner',
      icon:shiftLeaderPlanner(),
      submenu: [
        { title: 'Shift Planner', children :['Start Planning'] },
        { title: 'Shift Leaders Planner', children : ['Start Planning'] },
      ],
    },
    {
        title: 'Workflows Manager ',
        icon:workFlowsManager(),
        submenu: [
          { title: 'Dashboard',children :['Build a Workflow'] },
          { title: 'Forms' ,children:['Create Form'] },
          { title: 'Task', children: ['Create Task'] },
        ],
      },
      {
        title: 'Production Schedule',
        icon:shiftLeaderPlanner(),
        submenu:[],
        },
      {
        title: 'Reports',
        icon:reports(),
        submenu:[],
      },
      {
        title: 'Notifications',
        icon:notifications(),
        submenu:[],
      },
      {
        title: 'Submit Feedback',
        icon:feedback(),
        submenu:[],
      },
  ];

  return (
    <div className="menu-container">
      {menuData.map((menu, index) => (
        <div
          key={index}
          className="menu-item"
          onMouseEnter={() => setActiveMenu(index)}
          onMouseLeave={() => {
            setActiveMenu(null);
            setActiveSubmenu(null);
          }}
        >
          
<div className="menu-title">
<div>{menu?.icon}</div>
<div className='menu-text' onClick={()=>handleClick(menu.title)}>{menu.title}</div>
</div>
{activeMenu === index && (
   <div className="submenu">
              {menu.submenu.map((subItem, subIndex) => (
                <div
                  key={subIndex}
                  className="submenu-item"
                  onMouseEnter={() => setActiveSubmenu(subIndex)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <span className='subMenu-title'>{subItem.title}</span>
                  {subItem.children && <FaAngleRight className="arrow-icon" />}
                  {activeSubmenu === subIndex && subItem.children && (
                    <div className="submenu nested-submenu">
                      {subItem.children.map((childItem, childIndex) => (
                        <div key={childIndex} className="submenu-item">
                          {childItem}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Menu;