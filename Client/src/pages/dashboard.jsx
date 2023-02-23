import React, { Component } from 'react';
import NavBar from '../../src/components/navbarAdmin/navbarAdmin.jsx';
import Options from '../../src/components/menuAdmin/menuAdmin.jsx';
import Stats from '../../src/components/stadistics/stats.jsx';
import { Button } from 'primereact/button';

class dashboard extends Component {
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
                        <Button icon='pi pi-home' label='/Home' className='p-button-primary mt-2 ml-2'/>
                        <Stats/>
                    </main>
                </div>
            </div>
        );
    }
}
 
export default dashboard;