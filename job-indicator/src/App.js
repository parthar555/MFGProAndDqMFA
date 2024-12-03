import React from 'react'
import { Routes, Route, Navigate, Link, Router, useParams, useLocation } from "react-router-dom";
import './App.css';
import AddKpi from './components/sections/addKpi';
import { getSearchParameters } from './utils/utils';

function App() {
var params = getSearchParameters();
console.log('uuuuuuuu', params.page)
const pickPageToDisplay = () => {
  switch(params.page) {
    case 'add-kpi':
      return <AddKpi />
    default:
      return <div>No page Found</div>
  }
}
  return (
    <div>
     {pickPageToDisplay()}
    </div>
  );
}

export default App;
