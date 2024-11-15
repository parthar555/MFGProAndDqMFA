import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.scss'; // Additional styling if needed
import { FaAngleRight } from 'react-icons/fa';
import { feedback, shiftPlanner,digitalQuality,reports,myShift,formLibrary,sectionLibrary,notifications,productionSchedule, workFlowsManager, shiftLeaderPlanner} from './Icons';
import { GrTree } from 'react-icons/gr';




const Menu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [activeChildMenu, setActiveChildMenu] = useState(null);
  const [activeSubChildMenu, setActiveSubChildMenu] = useState(null);
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
      submenu:[
        { title: 'Production Schedule' },
      ],
    },
    {
        title: 'My Shift',
        icon:shiftPlanner(),
        submenu: [
          { title: 'Dashboard' },
          { title: 'Tasks' },
          { title: 'KPI'},
          { title: 'Reports'},
          { title: 'Shift Assignment' }
        ],
      },
      {
        title: 'Digital Quality',
        icon:digitalQuality(),
        submenu:[
          { title: 'FCP1',
            children :[{ title:'PAE',
              subchildren:[
                'PAE Dashboard','PAE FCP'
              ]
            }, {
              title:'Lab',
              subchildren:[
                'Lab Dashboard','Test History','Seasoning','+ All'
              ]
            }, {
              title:'Weak Link',
              subchildren:[
                'Weak Link Dashboard','Weak Link Single Page','Quality Wall Report'
              ]
            },{
              title:'Food Safety',
            }] },
          { title: 'FCC1' ,children :[{ title:'PAE',
            subchildren:[
              'PAE Dashboard','PAE FCP'
            ]
          }, {
            title:'Lab',
            subchildren:[
              'Lab Dashboard','Test History','Seasoning','+ All'
            ]
          }, {
            title:'Weak Link',
            subchildren:[
              'Weak Link Dashboard','Weak Link Single Page','Quality Wall Report'
            ]
          },{
            title:'Food Safety'
           
          }] },
          { title: 'PC1', 
            children: [
              {
                title: 'Potatoe Receiving',
                
              },
              {
                title: 'Slice Thickness',
                subchildren:[
                  'Slice Dashboard','+ Slice Thickness','+ Poatato Slicer..'
                ]
              },
              {
                title: 'PAE',
                subchildren:[
                  'PAE Dashboard','+ Post Optyx'
                ]
              },
              {
                title: 'Lab',
                subchildren: [
                  { title: 'Lab Dashboard' },
                  { title: 'Test History' },
                  { title: 'Seasoning Dashboard' },
                  { title: '+ All' },
                  { title: 'Seasoning',
                    additionalSubmenu: ['+ PC1SEA1', '+ PC1SEA10','+ PC1SEA11','+ PC1SEA12','+ PC1SEA13','+ PC1SEA14','+ PC1SEA15','+ PC1SEA16','+ PC1SEA17','+ PC1SEA18'],
                   },
                  { title: 'Oil' },
                  { title: '+ Moisture' },
                  { title: '+ Breakage' },
                  { title: '+ Other' },
                  { title: '+ Color' },
                 
                 
                ],
              },
              'Weak Link',
              'Food Safety',
            ],
            },
          { title: 'PC2', children: ['Potatoe Receiving','Slice Thickness','PAE', 'Lab', 'Weak Link','Food Safety'] },
          
        ],
      },
      {
        title: 'Reports',
        icon:reports(),
        submenu:[
          { title: 'Report1' },
          { title: 'Report2' },
        ],
      },
      {
        title: 'Notifications',
        icon:notifications(),
        submenu:[
          { title: 'Notification' },
          
        ],
      },
      {
        title: 'Submit Feedback',
        icon:feedback(),
        submenu:[
          { title: 'Feedback' },
        
        ],
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

export default Menu;