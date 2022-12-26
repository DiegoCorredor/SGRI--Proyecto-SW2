import React, { Component} from 'react';
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import { Badge } from 'primereact/badge';
import logo from '../../assets/logox.png';


class navbarAdmin extends Component {

    state = {  }

    render() { 
        function toLogin(){
            window.location='/login';
        }

        const name  = "Diego Alejandro Corredor Rojas";
    
        const start = <div className='flex justify-content-between align-items-center'>
            <img alt="logo" src={logo} height="90" className="mr-2 ml-3 mb-2"/>
        </div>;
        const end = <div className='flex justify-content-between align-items-center'>
                        <label className="text-white pr-5 text-2xl"><i className="pi pi-users mr-3 text-2xl"></i>{name}<Badge className='ml-3' value="Online" severity="success"/></label> 
                        <Button icon='pi pi-sign-out' className='p-button-danger mx-2' onClick={toLogin}/>
                    </div>
        return (
            <div>
                <div>
                    <Menubar className='header3' model={this.items} start={start} end={end} />
                </div>
            </div>

            
        );
    }
}
 
export default navbarAdmin;