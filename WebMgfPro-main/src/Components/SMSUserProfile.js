import React from 'react';
import { Button, Popover, OverlayTrigger, FormText } from 'react-bootstrap';

const SMSUserProfile = () => {
  const popover = (
    <Popover id="popover-basic" >
      <Popover.Body  >
        <FormText>
        Login By: T9 <br /> Login Time: Mon 9 Dec 1:02:PM <br /> Summary: Test Message <br /> Site Name: Dev4
        </FormText>
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover} rootClose>
    <div className='circle'>T9</div>
    </OverlayTrigger>
  );
};

export default SMSUserProfile;
