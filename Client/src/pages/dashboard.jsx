import React, { Component } from 'react';
import NavBar from '../../src/components/navbarAdmin/navbarAdmin.jsx';
import Options from '../../src/components/menuAdmin/menuAdmin.jsx';
import Stats from '../../src/components/stadistics/stats.jsx';
import { Button } from 'primereact/button';
import { Link } from "react-router-dom";

class dashboard extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <NavBar/>
                <div className='sidebar'>
                    <div className='sidebar__sidebar'>
                        <Options/>
                    </div>
                    <div className='sidebar__main'>
                        <Link to="/dashboard" relative='/dashboard'><Button icon='pi pi-home' label='/Home' className='p-button-primary mt-2 ml-2'/></Link>
                        <Stats/>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default dashboard;