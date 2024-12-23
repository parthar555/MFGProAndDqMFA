import React from 'react';
import MainCard from "./MainCard";
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxesPacking, faCalendar, faOutdent } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import './MockupApp.scss';

const MockupContent = () => {
  return (
    <div className="content">
      <div className='contentWrapper'>
        {/* My Shift Button */}
        <div className='btnShift'>
          <Button variant="secondary" className='shiftCss'>
            <FontAwesomeIcon icon={faOutdent} /> My Shift
          </Button>
        </div>

        {/* Dropdowns */}
        <div>
          <Dropdown data-bs-theme="grey">
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" className='dropdowncss'>
              <FontAwesomeIcon icon={faBoxesPacking} /> Packaging
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1" active>
                Action
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div>
          <Dropdown data-bs-theme="grey">
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" className='dropdowncss'>
              <FontAwesomeIcon icon={faCalendar} /> 09:00-10:00 AM
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1" active>
                06:00-10:00 AM
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">08:00-10:00 AM</Dropdown.Item>
              <Dropdown.Item href="#/action-3">07:00-10:00 AM</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        {/* Search Bar */}
        <div className="searchBarWrapper">
          <input
            type="text"
            className="searchBar"
            placeholder="Search..."
          />
        </div>
      </div>

      {/* MainCard Component */}
      <MainCard />
    </div>
  );
};

export default MockupContent;
