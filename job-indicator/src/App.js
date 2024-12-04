import React from 'react'
import { Routes, Route, Navigate, Link, Router, useParams, useLocation } from "react-router-dom";
import './App.scss';
import AddKpi from './components/sections/addKpi';
import { getSearchParameters } from './utils/utils';

function App() {
var params = getSearchParameters();
const pickPageToDisplay = () => {
  switch(params.page) {
    case 'add-kpi':
      return <AddKpi />
    default:
      return <div>No page Found</div>
  }
}
  return (
    <div className='row'>
      <div className='col m-4 ms-5'>
        {pickPageToDisplay()}
      </div>
     
    </div>
  );
}

export default App;
