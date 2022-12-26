import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { Link } from "react-router-dom";

class nav_general extends Component {
    state = {  }
    render() {
        return (
            <div className='header1 flex justify-content-between align-items-center px-6 text-white'>
                <p>Tel. 301 217 9561</p>
                <p>Email. info@hotelmarquesadepinares.com</p>
                <Link to='/booking' relative='/booking'>
                    <Button label="Reservar" className='p-button-warning text-white'/>
                </Link>
                
            </div>
        );
    }
}
 
export default nav_general;