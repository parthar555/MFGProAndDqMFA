import React, { useCallback, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.scss'; // Additional styling if needed
import { FaAngleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { shiftLeaderPlanner,holds,reports,shiftPlanner,formLibrary,sectionLibrary,notifications,feedback, productionSchedule } from './Icons';




const PMOMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
 
let navigate = useNavigate();
    const handleClick = useCallback((menuTitle) => {
      console.log("menuTitle",menuTitle);
       if(menuTitle === 'Production Schedule'){
          navigate('/PSFigmaScreen');
        }
       }
    );
    const handleClick1 = useCallback((submenuTitle) => {
      console.log("menuTitle",submenuTitle);
       if(submenuTitle === 'Shift Assignment'){
          navigate('/PMOSAFigmaScreen');
        }
        if(submenuTitle === 'Dashboard'){
          navigate('/MSFigmaScreen');
        }
       }
    );
  
  const menuData = [
    {
      title: 'Libraries',
      icon: formLibrary(),
      submenu: [
      { title: 'Sections Library' },
      { title: 'Forms Library' },
      ],
    },
    
    {
      title: 'Production Schedule',
      icon:shiftLeaderPlanner(),
      submenu:[],
    },
    {
        title: 'My Shift',
        icon:shiftPlanner(),
        submenu: [
            { title: 'Dashboard'},
            { title: 'Tasks' },
            { title: 'KPI'},
            { title: 'Reports'},
            { title: 'Shift Assignment' }
          ],
      },
      {
        title: 'Holds',
        icon:holds(),
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
                  <span className='subMenu-title' onClick={()=>handleClick1(subItem.title)}>{subItem.title}</span>
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

export default PMOMenu;