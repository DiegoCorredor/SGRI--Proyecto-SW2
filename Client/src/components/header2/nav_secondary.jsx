import React, { Component} from 'react';
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import logo from '../../assets/logox.png';

class nav_secondary extends Component {
    menuRef = React.createRef();

    state = {  }

    render() { 
        const start = <div className='flex justify-content-between align-items-center'>
            <img alt="logo" src={logo} height="90" className="mr-2 ml-3 mb-2"/>
        </div>;
        const end = <div>
                    <Button label="Acerca de nosotros" className='p-button-info mr-4'/>
                    <Button label="Iniciar sesión" className='p-button-success' />
                 </div>
        return (
            <div>
                <div className="header2 card">
                    <Menubar model={this.items} start={start} end={end} />
                </div>
            </div>

            
        );
    }
}
 
export default nav_secondary;