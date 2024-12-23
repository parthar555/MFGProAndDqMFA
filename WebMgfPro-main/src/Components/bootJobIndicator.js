import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.scss'; // Additional styling if needed
import { FaAngleRight } from 'react-icons/fa';
import { feedback, shiftPlanner,digitalQuality,reports,myShift,formLibrary,sectionLibrary,notifications,productionSchedule, messageIcon, shiftLeaderPlanner} from './Icons';
import { GrTree } from 'react-icons/gr';




const bootJobIndicator = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [activeChildMenu, setActiveChildMenu] = useState(null);
  const [activeSubChildMenu, setActiveSubChildMenu] = useState(null);
  const menuData = [
    {
      title: 'Production Schedule',
      icon:shiftLeaderPlanner(),
      submenu:[
       
      ],
    },
    {
        title: 'My Shift',
        icon:shiftPlanner(),
        submenu: [
          { title: 'Dashboard' },
          { title: 'Tasks' },
          { title: 'Create KPI'},
          { title: 'Reports'},
          { title: 'Shift Assignment' }
        ],
      },
      {
        title: 'Messages',
        icon:digitalQuality(),
        submenu:[
          
        
        ],
      },
      {
        title: 'Notifications',
        icon:notifications(),
        submenu:[
          
        ],
      }
  ];

  return (
    <div className="menu-container" style={{background:'#eef2ff', height:'100%'}}>
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
              <div className="menu-icon">{menu?.icon}</div>
              <div className='menu-text'>{menu.title}</div>
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
                 <span className="subMenu-title">{subItem.title}</span>
                 {subItem.children && <FaAngleRight className="arrow-icon" />}
                 {activeSubmenu === subIndex && subItem.children && (
                   <div className="submenu nested-submenu">
                     {subItem.children.map((childItem, childIndex) => {
                       if (typeof childItem === 'string') {
                         return (
                           <div key={childIndex} className="submenu-item">
                             {childItem}
                           </div>
                         );
                       } else if (childItem && typeof childItem === 'object' && childItem.title) {
                         return (
                           <div
                             key={childIndex}
                             className="submenu-item"
                             onMouseEnter={() => setActiveChildMenu(childIndex)}
                             onMouseLeave={() => setActiveChildMenu(null)}
                           >
                             <span className="subMenu-title">{childItem.title} </span>
                             {childItem.subchildren && <FaAngleRight className="arrow-icon" />}
                             {activeChildMenu === childIndex && childItem.subchildren && (
                               <div className="submenu nested-childsubmenu">
                                 {childItem.subchildren.map((nestedChildItem, nestedChildIndex) => (
                                   <div
                                     key={nestedChildIndex}
                                     className="submenu-item"
                                     onMouseEnter={() =>
                                       nestedChildItem.title === 'Seasoning' ? setActiveSubChildMenu(nestedChildIndex) : null
                                     }
                                     onMouseLeave={() => setActiveSubChildMenu(null)}
                                   >
                                     {nestedChildItem.title || nestedChildItem}
                                     {nestedChildItem.additionalSubmenu && <FaAngleRight className="arrow-icon" />}
                                     {activeSubChildMenu === nestedChildIndex && nestedChildItem.additionalSubmenu && (
                                       <div className="submenu additional-submenu">
                                         {nestedChildItem.additionalSubmenu.map((additionalItem, additionalIndex) => (
                                           <div key={additionalIndex} className="submenu-item">
                                             {additionalItem}
                                           </div>
                                         ))}
                                       </div>
                                     )}
                                   </div>
                                 ))}
                               </div>
                             )}
                           </div>
                         );
                       }
                       return null;
                     })}
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

export default bootJobIndicator;