import React, { useCallback, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.scss'; // Additional styling if needed
import { FaAngleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { productionSchedule, reports, shiftLeaderPlanner, shiftPlanner, workflows, workFlowsManager, notifications, feedback } from './Icons';



const bootsmsMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const navigate = useNavigate();
  const handleClick = useCallback((menuTitle) => {
    navigate('/SMSScreen');
  }
  );

  const menuData = [
    {
      title: 'White Bag Management',
      submenu: [
       ],
    },
    {
      title: 'System Verification',
      submenu: [
       ],
    },
    {
      title: 'Service Health',
      submenu: [
       ],
    },
    {
      title: 'Bags Consumption ',
      submenu: [
      ],
    },
    {
      title: 'Refresh',
      submenu: [],
    },
  ];

  return (
    <div className="menu-container">
      {menuData.map((menu, index) => (
        <div
          key={index}
          className="menu-item"
          // onMouseEnter={() => setActiveMenu(index)}
          onMouseLeave={() => {
            setActiveMenu(null);
            setActiveSubmenu(null);
          }}
        >

          <div className="menu-title" style={{padding:10, borderRadius:10, }} >
            <div>{menu?.icon}</div>
            <div style={{}} className='sms-menu-title' onClick={() => handleClick(menu.title)}>{menu.title}</div>
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

export default bootsmsMenu;