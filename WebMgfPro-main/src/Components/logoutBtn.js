import React from 'react';
import { Button, Popover, OverlayTrigger } from 'react-bootstrap';

const DJButtonWithPopover = () => {
  // Popover content for the Logout button
  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        <Button variant="danger" size="sm">
          Logout
        </Button>
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover} rootClose>
    <div className='circle'>T9</div>
    </OverlayTrigger>
  );
};

export default DJButtonWithPopover;
