import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

import Nav from './component/Nav';
import Login from './component/Login/Login';
import Sheduler from './component/Table/Sheduler';
import AdminTable from './component/Table/Admintable';
import CalenderBooking from './component/CalenderBooking/CalenderBooking';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<Nav/>} />
    <Route path='login' index element={<Login/>} />
          <Route path="booking" element={<Sheduler/>} />
          <Route path="admin" element={<AdminTable />} />
          <Route path="calender" element={<CalenderBooking />} />
     
    </Routes>
  </BrowserRouter>

   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
