import React, { Component} from 'react';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import logo from '../../assets/logox.png';
import { Link } from "react-router-dom";

class navbarAdmin extends Component {

    state = {  }

    render() {
        const name  = "Diego Alejandro";
        return (
            <nav className='brown-color'>
                <img alt="logo" src={logo} className="logo xl:mr-2 xl:ml-3 xl:my-2 lg:mr-2 lg:ml-3 lg:my-2 md:mr-2 md:ml-3 md:my-2 sm:mr-2 sm:ml-3 sm:my-2"/>
                <div className='rigth xl:mx-6 lg:mx-6 md:mx-6 sm:mx-6'>
                    <label className="text-white pr-5 text-xl nameblock">
                        <i className="pi pi-users mr-3 text-2xl"></i>{name}
                        <Badge className='ml-3' value="Online" severity="success"/>
                    </label>
                    <Link to="/login" relative='/login'>
                        <Button icon='pi pi-sign-out' className='p-button-danger mr-3'/>
                    </Link>
                </div>
            </nav>
        );
    }
}
 
export default navbarAdmin;