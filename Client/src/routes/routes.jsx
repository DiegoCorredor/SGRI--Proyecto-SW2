import {createBrowserRouter} from 'react-router-dom';
import React from 'react';
import Landing from '../pages/landing.jsx';
import Login from '../pages/login.jsx';
import Booking from '../pages/booking.jsx';
import Error404 from '../pages/error404.jsx';
import Dashboard from '../pages/dashboard.jsx';
import Addelement from '../pages/addelement.jsx';

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
    },
    {
        path: '*',
        element: <Error404/>

    },
    {
        path: '/dashboard',
        element: <Dashboard/>
    },
    {
        path:'/addelement',
        element: <Addelement/>
    }
]) 