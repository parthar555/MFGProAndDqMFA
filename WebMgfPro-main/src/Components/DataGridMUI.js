import React, { useState } from 'react';
// import { DataGridPro } from "@mui/x-data-grid-pro";
import { DataGrid } from "@mui/x-data-grid";

import Stack from '@mui/material/Stack';
import '../Sections/FilterdropDowncs.css'
import Box from '@mui/material/Box';


const rowsData1 = [
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

    {

        id: 13,
        col1: "TC9", col2: "TC4SEA12", col3: "TC4SEA28", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {

        id: 14,
        col1: "TC31", col2: "TC4SEA141", col3: "TC4SEA234", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {

        id: 15,
        col1: "TC46", col2: "TC4SEA17", col3: "TC4SEA23", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {

        id: 16,
        col1: "TC47", col2: "TC4SEA18", col3: "TC4SEA273", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {

        id: 17,
        col1: "TC48", col2: "TC4SEA19", col3: "TC4SEA274", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {

        id: 18,
        col1: "TC49", col2: "TC4SEA110", col3: "TC4SEA275", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {

        id: 20,
        col1: "TC50", col2: "TC4SEA111", col3: "TC4SEA276", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {

        id: 21,
        col1: "TC51", col2: "TC4SEA112", col3: "TC4SEA277", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    }, {

        id: 22,
        col1: "TC51", col2: "TC4SEA113", col3: "TC4SEA278", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {

        id: 23,
        col1: "TC52", col2: "TC4SEA114", col3: "TC4SEA279", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {

        id: 25,
        col1: "TC52", col2: "TC4SEA115", col3: "TC4SEA280", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {

        id: 26,
        col1: "TC53", col2: "TC4SEA116", col3: "TC4SEA282", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {

        id: 27,
        col1: "TC50", col2: "TC4SEA116", col3: "TC4SEA281", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {

        id: 28,
        col1: "TC40", col2: "TC4SEA117", col3: "TC4SEA276", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {

        id: 29,
        col1: "TC42", col2: "TC4SEA126", col3: "TC4SEA270", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {

        id: 30,
        col1: "TC44", col2: "TC4SEA121", col3: "TC4SEA272", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {

        id: 31,
        col1: "TC30", col2: "TC4SEA181", col3: "TC4SEA53", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {

        id: 32,
        col1: "TC53", col2: "TC4SEA121", col3: "TC4SEA276", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {

        id: 33,
        col1: "TC55", col2: "TC4SEA141", col3: "TC4SEA278", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {

        id: 34,
        col1: "TC61", col2: "TC4SEA153", col3: "TC4SEA2721", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {

        id: 35,
        col1: "TC62", col2: "TC4SEA131", col3: "TC4SEA273", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {

        id: 36,
        col1: "TC4", col2: "TC4SEA1", col3: "TC4SEA179", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {

        id: 37,
        col1: "TC61", col2: "TC4SEA521", col3: "TC4SEA252", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {

        id: 38,
        col1: "TC31", col2: "TC4SEA321", col3: "TC4SEA171", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {
        id: 39,
        col1: "TC34", col2: "TC4SEA34", col3: "TC4SEA412", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {
        id: 40,
        col1: "TC91", col2: "TC4SEA43", col3: "TC4SEA47", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {
        id: 41,
        col1: "TC43", col2: "TC4SEA63", col3: "TC4SEA110", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {
        id: 42,
        col1: "TC47", col2: "TC4SEA322", col3: "TC4SEA150", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {
        id: 43,
        col1: "TC49", col2: "TC4SEA543", col3: "TC4SEA610", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {
        id: 44,
        col1: "TC52", col2: "TC4SEA66", col3: "TC4SEA130", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {
        id: 45,
        col1: "TC13", col2: "TC4SEA03", col3: "TC4SEA010", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {
        id: 46,
        col1: "TC60", col2: "TC4SEA51", col3: "TC4SEA030", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {
        id: 47,
        col1: "TC23", col2: "TC4SEA33", col3: "TC4SEA160", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {
        id: 48,
        col1: "TC10", col2: "TC4SEA601", col3: "TC4SEA040", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {
        id: 49,
        col1: "TC60", col2: "TC4SEA54", col3: "TC4SEA042", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {
        id: 50,
        col1: "TC9", col2: "TC4SEA4", col3: "TC4SEA03", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {
        id: 51,
        col1: "TC0", col2: "TC4SEA5", col3: "TC4SEA30", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {
        id: 52,
        col1: "TC54", col2: "TC4SEA6", col3: "TC4SEA94", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {
        id: 53,
        col1: "TC442", col2: "TC4SEA861", col3: "TC4SEA95", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {
        id: 54,
        col1: "TC54", col2: "TC4SEA86", col3: "TC4SEA945", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {
        id: 55,
        col1: "TC54", col2: "TC4SEA6", col3: "TC4SEA45", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
    {
        id: 56,
        col1: "TC04", col2: "TC4SA86", col3: "TCEA945", col4: "OMS",
        col5: "DORITOS-FLAMAS", col6: "",
        col7: "30058807", col8: "ON", col9: "ON", col10: "ON",
        col11: "ON", col12: "UnPlugged", col13: ""
    },
];
const columns = [
    {
        field: "col1", headerName: 'Line', width: 100,
        sortingOrder: ['asc', 'desc', null]

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
const products = [
    {
        id: 1,
        name: "Apple Watch",
        price: "₦350,000",
        category: "Accessories",
        quantity: "7",
        rating: "5",
    },
    {
        id: 2,
        name: "Fitness watch",
        price: "₦10,000",
        category: "Fitness",
        quantity: "23",
        rating: "2",
    },
    {
        id: 3,
        name: "Beach dress",
        price: "₦25,000",
        category: "Clothing",
        quantity: "5",
        rating: "4",
    },
    {
        id: 4,
        name: "Washing machine",
        price: "₦260,000",
        category: "Electronics",
        quantity: "10",
        rating: "4",
    },
    {
        id: 5,
        name: "Blue Jeans",
        price: "₦10,000",
        category: "Clothing",
        quantity: "50",
        rating: "5",
    },
    {
        id: 6,
        name: "Samsung Watch",
        price: "₦270,000",
        category: "Accessories",
        quantity: "7",
        rating: "3",
    },
    {
        id: 7,
        name: "Yoga mat",
        price: "₦15,000",
        category: "Fitness",
        quantity: "15",
        rating: "4",
    },
    {
        id: 8,
        name: "Jumpsuit",
        price: "₦15,700",
        category: "Clothing",
        quantity: "30",
        rating: "5",
    },
    {
        id: 9,
        name: "Hand mixer",
        price: "₦50,000",
        category: "Electronics",
        quantity: "10",
        rating: "4",
    },
    {
        id: 10,
        name: "Pallazo",
        price: "₦12,000",
        category: "Clothing",
        quantity: "4",
        rating: "3",
    },
];
function escapeRegExp(value) {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
const DataGridMUI = (props) => {
    console.log("askdsakhd " + JSON.stringify(props.rowsData))
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

   

    return (
        <div  >
            <div style={{ background: 'white' }}>
                <Box style={{ height: 480, width: '86%', marginLeft: 40 }}>
                    <DataGrid rows={props.rowsData} columns={columns}
                        initialState={{ pinnedColumns: { left: ['col1', 'col2', 'col3'] } }}
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
                
            </div>
        </div>
    );
}

export default DataGridMUI;