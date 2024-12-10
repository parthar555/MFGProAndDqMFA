import React, { useState } from 'react';
import { DataGrid, GridRowsProp, GridColDef, GridCellParams } from "@mui/x-data-grid";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import TextField from '@mui/material/TextField';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import ReactDOM from 'react-dom/client';
import './FilterdropDowncs.css'
import Box from '@mui/material/Box';
import SMSDropDown from '../Components/SMSDropDown';

const rows = [
    {

        id: 1,
        col1: "TC4", col2: "TC4SEA6", col3: "TC4SEA22", col4: "OMS",
        col5: "DORITOS-SWEET&TANYGY BBQ", col6: "",
        col7: "30058802", col8: "OFF", col9: "OFF", col10: "OFF",
        col11: "ON", col12: "Plugged", col13: ""

    },
    {

        id: 2,
        col1: "TC5", col2: "TC4SEA7", col3: "TC4SEA23", col4: "OMS",
        col5: "DORI-FLAMAS", col6: "",
        col7: "30058803", col8: "OFF", col9: "ON", col10: "OFF",
        col11: "ON", col12: "Plugged", col13: ""
    },
    {

        id: 3,
        col1: "TC6", col2: "TC4SEA3", col3: "TC4SEA24", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058804", col8: "ON", col9: "OFF", col10: "ON",
        col11: "ON", col12: "Plugged", col13: ""
    },
    {

        id: 4,
        col1: "TC4", col2: "TC4SEA5", col3: "TC4SEA25", col4: "OMS",
        col5: "DORITOS-SWEET&TANYGY BBQ", col6: "",
        col7: "30058805", col8: "OFF", col9: "ON", col10: "OFF",
        col11: "OFF", col12: "UnPlugged", col13: ""
    }, {

        id: 5,
        col1: "TC7", col2: "TC4SEA6", col3: "TC4SEA26", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058806", col8: "ON", col9: "OFF", col10: "OFF",
        col11: "ON", col12: "UnPlugged", col13: ""
    }, {

        id: 6,
        col1: "TC4", col2: "TC4SEA1", col3: "TC4SEA27", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {

        id: 7,
        col1: "TC4", col2: "TC4SEA6", col3: "TC4SEA22", col4: "OMS",
        col5: "DORITOS-SWEET&TANYGY BBQ", col6: "",
        col7: "30058802", col8: "OFF", col9: "OFF", col10: "OFF",
        col11: "ON", col12: "Plugged", col13: ""
    },
    {

        id: 8,
        col1: "TC5", col2: "TC4SEA7", col3: "TC4SEA23", col4: "OMS",
        col5: "DORI-FLAMAS", col6: "",
        col7: "30058803", col8: "OFF", col9: "ON", col10: "OFF",
        col11: "ON", col12: "Plugged", col13: ""
    },
    {

        id: 9,
        col1: "TC6", col2: "TC4SEA3", col3: "TC4SEA24", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058804", col8: "ON", col9: "OFF", col10: "ON",
        col11: "ON", col12: "Plugged", col13: ""
    },
    {

        id: 10,
        col1: "TC4", col2: "TC4SEA5", col3: "TC4SEA25", col4: "OMS",
        col5: "DORITOS-SWEET&TANYGY BBQ", col6: "",
        col7: "30058805", col8: "OFF", col9: "ON", col10: "OFF",
        col11: "OFF", col12: "UnPlugged", col13: ""
    }, {

        id: 11,
        col1: "TC7", col2: "TC4SEA6", col3: "TC4SEA26", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058806", col8: "ON", col9: "OFF", col10: "OFF",
        col11: "ON", col12: "UnPlugged", col13: ""
    }, {

        id: 12,
        col1: "TC4", col2: "TC4SEA1", col3: "TC4SEA27", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
];
const columns = [
    {
        field: "col1", headerName: 'Line', width: 100

    },
    { field: "col2", headerName: "Loop", width: 100 },
    { field: "col3", headerName: "PKG Line", width: 100 },
    { field: "col4", headerName: "Type", width: 100 },
    { field: "col5", headerName: "Flavour Desc", width: 200 },
    { field: "col6", headerName: "Sch. Material Code", width: 200 },
    { field: "col7", headerName: "Scanned Material Code", width: 200 },
    {
        field: "col8", headerName: "Override", width: 100,

        renderCell: (params) => (
            <Stack direction="row" spacing={1} alignItems={'center'} height={'100%'}>
                {
                    params.row.col8 === 'ON' ?
                        <div class="circle-green"></div>
                        : <div class="circle-red"></div>
                }

                <p style={{ fontSize: 13 }}>{params.row.col8}</p>

            </Stack>
        ),


    },
    {
        field: "col9", headerName: "Bypass", width: 100,
        renderCell: (params) => (
            <Stack direction="row" spacing={1} alignItems={'center'} height={'100%'}>
                {
                    params.row.col9 === 'ON' ?
                        <div class="circle-green"></div>
                        : <div class="circle-red"></div>
                }

                <p style={{ fontSize: 13 }}>{params.row.col9}</p>

            </Stack>
        ),

    },
    {
        field: "col10", headerName: "COMode", width: 100, renderCell: (params) => (
            <Stack direction="row" spacing={1} alignItems={'center'} height={'100%'}>
                {
                    params.row.col10 === 'ON' ?
                        <div class="circle-green"></div>
                        : <div class="circle-red"></div>
                }

                <p style={{ fontSize: 13 }}>{params.row.col10}</p>

            </Stack>
        ),
    },
    {
        field: "col11", headerName: "Fault", width: 100,
        renderCell: (params) => (
            <Stack direction="row" spacing={1} alignItems={'center'} height={'100%'}>
                {
                    params.row.col10 === 'ON' ?
                        <div class="circle-green"></div>
                        : <div class="circle-red"></div>
                }

                <p style={{ fontSize: 13 }}>{params.row.col10}</p>

            </Stack>
        ),

    },
    { field: "col12", headerName: "Cable Status", width: 100 },
    { field: "col13", headerName: "WB Recovery", width: 200 },

];


function SMSScreen() {
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        console.log("called handleclick")
        setIsLoading(true);
        setIsVisible(!isVisible); // Toggle dropdown visibility
        return(
            <SMSDropDown/>
        )
    };

    return (
        <div  >
            <div style={{ background: 'white' }}>
                <div style={{ width: '88%', paddingTop: 10, margin: 10, display: 'flex', justifyContent: 'right', marginRight: 30 }}>
                        <SMSDropDown/>
                    <TextField
                        label="Search"
                        id="outlined-size-small"
                        size="small"
                        showGridlines
                    />
                </div>
                <Box style={{ height: 480, width: '86%', marginLeft: 40 }}>

                    <DataGrid rows={rows} columns={columns} Height="auto"
                        sx={{
                            ".MuiTablePagination-displayedRows, .MuiTablePagination-selectLabel": {
                                "margin-top": "1em",
                                "margin-bottom": "1em"

                            },
                            '.MuiDataGrid-columnHeader': {
                                backgroundColor: "#187bcd",
                                color: "white",
                                fontWeight: 'bold',
                            },
                            '.MuiDataGrid-root.MuiDataGrid-columnHeaderTitle': {
                                fontWeight: 'bold',
                                overFlow: 'visible'
                            },
                            '.MuiDataGrid-iconButtonContainer': {
                                visibility: 'visible',
                            },
                            '.MuiDataGrid-sortIcon': {
                                opacity: 'inherit !important',
                                color: "white",
                            },
                            ".MuiDataGrid-menuIconButton": {
                                opacity: 'inherit !important',
                                color: "white",
                                sortable: true,
                                visibility: 'visible',
                            },
                            ".MuiDataGrid-column:hover": {
                                backgroundColor: "red" // Or 'transparent' or whatever color you'd like
                            },
                            "& .MuiDataGrid-columnHeaders": {
                                // currently unused, changed to container--top
                                backgroundColor: 'rgb(69,153,236)',
                                color: 'white',
                              },
                           


                        }}
                        showCellVerticalBorder
                        disableColumnMenu={false}

                    />
                </Box>
                <div style={{ marginTop: 40, marginBottom: 40, display: 'flex', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                    <Button variant="contained" style={{ marginRight: 10 }}>Login</Button>
                    <Button variant="contained" style={{ marginRight: 10 }}>Logout</Button>
                    <Button variant="contained" style={{ marginRight: 10 }}>Web Request</Button>
                    <Button variant="contained" style={{ marginRight: 10 }}>Override</Button>
                    <Button variant="contained" style={{ marginRight: 10 }}>Bypass</Button>
                    <Button variant="contained" style={{ marginRight: 10 }}>Reset</Button>

                </div>
            </div>
        </div>
    );
}

export default SMSScreen;