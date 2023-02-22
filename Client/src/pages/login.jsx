import React, { Component } from 'react';
import Navgeneral from '../components/header/nav_general.jsx';
import Navsecondary from '../components/header2/nav_secondary2.jsx';
import Login from '../components/login/login.jsx';
import Footer from '../components/footer/footer.jsx';

class login extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <Navgeneral/>
                <Navsecondary/>
                <Login/>
                <Footer/>
            </div>
        );
    }
}
 
export default login;