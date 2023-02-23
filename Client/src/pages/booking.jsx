import React, { Component } from 'react';
import Navgeneral from '../components/header/nav_general.jsx';
import Navsecondary from '../components/header2/nav_secondary.jsx';
import Booking from '../components/booking/booking.jsx';
import Footer from '../components/footer/footer.jsx';

class booking extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <Navgeneral/>
                <Navsecondary/>
                <Booking/>
                <Footer/>
            </div>
        );
    }
}
 
export default booking;