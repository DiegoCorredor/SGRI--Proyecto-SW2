import React, { Component } from 'react';
import NavBar from '../../src/components/navbarAdmin/navbarAdmin.jsx';
import Options from '../../src/components/menuAdmin/menuAdmin.jsx';
import Body from '../../src/components/crud1/editelement.jsx';
import { Button } from 'primereact/button';
import { Link } from "react-router-dom";

class editelement extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <NavBar/>
                <div className='sidebar'>
                    <aside className='sidebar__sidebar brown-color'>
                        <Options/>
                    </aside>
                    <main className='sidebar__main'>
                        <Link to="/dashboard" relative='/dashboard'><Button icon='pi pi-home' label='/Home' className='p-button-primary mt-2 ml-2'/></Link>
                        <Body/>
                    </main>
                </div>
            </div>
        );
    }
}
 
export default editelement;