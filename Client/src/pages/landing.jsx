import React, { Component } from 'react';
import Navgeneral from '../components/header/nav_general.jsx';
import Navsecondary from '../components/header2/nav_secondary.jsx';
import General from '../components/body/general.jsx';
import Footer from '../components/footer/footer.jsx';

class Landing extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <Navgeneral/>
                <Navsecondary/>
                <General/>
                <Footer/>
            </div>
        );
    }
}
 
export default Landing;