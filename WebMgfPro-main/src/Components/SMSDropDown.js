import React from 'react';
import { Popover, OverlayTrigger, FormText } from 'react-bootstrap';
import Button from '@mui/material/Button';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
const SMSDropDown = () => {
    const popover = (
        <Popover id="popover" style={{  }}>
            <Popover.Body style={{ }} >
                {/* <FormText>
                    Login By: T9 <br /> Login Time: Mon 9 Dec 1:02:PM <br /> Summary: Test Message <br /> Site Name: Dev4 Login By: T9
                </FormText> */}
                <div style={{ display: 'flex', flexDirection: 'row' , justifyContent:'space-between'}}>
                    <FormText variant=""
                        style={{ margin: 10 , fontSize:'15', fontWeight:'bold'}}
                    >Department</FormText>
                    <Button variant="text"
                        style={{ marginRight: 10 }}
                        endIcon={<ArrowDropDown />}>All(5)</Button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between' }}>
                    <FormText variant="contained"
                       style={{ margin: 10 , fontSize:'15', fontWeight:'bold'}}
                    >Line</FormText>
                    <Button variant="text"
                        style={{ marginRight: 10 }}
                        endIcon={<ArrowDropDown />}>All(3)</Button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between' }}>
                    <FormText variant="contained"
                        style={{ margin: 10 , fontSize:'15', fontWeight:'bold'}}
                    >Loop</FormText>
                    <Button variant="text"
                        style={{ marginRight: 10 }}
                        endIcon={<ArrowDropDown />}>All(6)</Button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Button variant="outlined"
                        style={{ margin: 10, borderColor:'black', color:'black', background:'lightblue' }}
                    >Clear</Button>
                    <Button variant="outlined"
                        style={{ margin: 10, borderColor:'black', color:'black', background:'lightblue' }}
                        >Apply</Button>
                </div>
            </Popover.Body>

        </Popover>
    );

    return (
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover} rootClose>
            <Button variant="contained"
                style={{ marginRight: 10 }}
                endIcon={<ArrowDropDown />}>Filter</Button>
        </OverlayTrigger>
    );
};

export default SMSDropDown;
