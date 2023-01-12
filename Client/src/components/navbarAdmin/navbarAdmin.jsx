import React, { Component} from 'react';
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import { Badge } from 'primereact/badge';
import logo from '../../assets/logox.png';
import { Link } from "react-router-dom";

class navbarAdmin extends Component {

    state = {  }

    render() {
        const name  = "Diego Alejandro";
    
        const start = <div className='brown-colorflex justify-content-between align-items-center'>
            <img alt="logo" src={logo} height="90" className="mr-2 ml-3 mb-2"/>
        </div>;
        const end = <div className='flex justify-content-between align-items-center'>
                        <label className="text-white pr-5 text-xl"><i className="pi pi-users mr-3 text-2xl"></i>{name}<Badge className='ml-3' value="Online" severity="success"/></label>
                        <Link to="/login" relative='/login'> <Button icon='pi pi-sign-out' className='p-button-danger mx-2'/></Link>
                    </div>
        return (
            <div>
                <div>
                    <Menubar className='header3 brown-color' model={this.items} start={start} end={end} />
                </div>
            </div>

            
        );
    }
}
 
export default navbarAdmin;