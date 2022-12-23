import React, { Component} from 'react';
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';

class nav_secondary extends Component {
    menuRef = React.createRef();

    state = {  }

    render() { 
        const start = <img alt="logo" src="" height="40" className="mr-2"></img>;
        const end = <div>
                    <Button label="Acerca de nosotros" className='p-button-info mr-4' />
                    <Button label="Iniciar sesión" className='p-button-success' />
                 </div>
        return (
            <div>
                <div className="card header2">
                    <Menubar model={this.items} start={start} end={end} />
                </div>
            </div>

            
        );
    }
}
 
export default nav_secondary;