import {createBrowserRouter} from 'react-router-dom';
import React from 'react';
import Landing from '../pages/landing.jsx';



export default createBrowserRouter([
    {
        path: '/',
        element: <Landing/>
    }
]) 