import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { Link } from "react-router-dom";

class nav_general extends Component {
    state = {  }
    render() {
        return (
            <nav className='header1 flex justify-content-between align-items-center px-6 text-white'>
                <p>Tel. 301 217 9561</p>
                <p>Email. info@hotelmarquesadepinares.com</p>
                <Link to='/booking' relative='/booking'>
                    <Button label="Reservar" icon='pi pi-bookmark' className='p-button-warning text-white'/>
                </Link>
            </nav>
        );
    }
}
 
export default nav_general;