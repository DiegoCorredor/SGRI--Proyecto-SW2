import React, { Component } from 'react';
import { Button } from 'primereact/button';

class nav_general extends Component {
    state = {  }
    render() { 
        function toBooking(){
            window.location='/booking';
        }
        return (
            <div className='header1 flex justify-content-between align-items-center px-6 text-white'>
                <p>Tel. 301 217 9561</p>
                <p>Email. info@hotelmarquesadepinares.com</p>
                <Button label="Reservar" className='p-button-warning text-white' onClick={toBooking}/>
            </div>
        );
    }
}
 
export default nav_general;