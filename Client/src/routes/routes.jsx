import {createBrowserRouter} from 'react-router-dom';
import React from 'react';
import Landing from '../pages/landing.jsx';
import Login from '../pages/login.jsx';
import Booking from '../pages/booking.jsx';




export default createBrowserRouter([
    {
        path: '/',
        element: <Landing/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/booking',
        element: <Booking/>
    }
]) 