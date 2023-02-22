import React, { Component} from 'react';
import { Button } from 'primereact/button';
import logo from '../../assets/logox.png';
import { Link } from "react-router-dom";

class nav_secondary extends Component {
    state = {  }
    render() {
        return (
            <nav>
                <img alt="logo" src={logo} className="logo xl:mr-2 xl:ml-3 xl:my-2 lg:mr-2 lg:ml-3 lg:my-2 md:mr-2 md:ml-3 md:my-2 sm:mr-2 sm:ml-3 sm:my-2"/>
                <Link to='/login' relative='/login'>
                    <Button icon='pi pi-verified' label="LogIn" className='p-button-success rigth xl:mx-6 lg:mx-6 md:mx-6 sm:mx-6'/>
                </Link>
            </nav>
        );
    }
}
 
export default nav_secondary;