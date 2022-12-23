import React, { Component } from 'react';
import Navgeneral from '../components/header/nav_general.jsx';
import Navsecondary from '../components/header2/nav_secondary.jsx';



class Landing extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <Navgeneral/>
                <Navsecondary/>
            </div>
        );
    }
}
 
export default Landing;