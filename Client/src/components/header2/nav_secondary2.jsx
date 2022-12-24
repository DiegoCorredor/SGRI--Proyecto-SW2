import React, { Component} from 'react';
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import logo from '../../assets/logox.png';


class nav_secondary2 extends Component {
    menuRef = React.createRef();

    state = {  }

    render() { 
        function toHome(){
            window.location='/';
        }

        const start = <div className='flex justify-content-between align-items-center'>
            <img alt="logo" src={logo} height="90" className="mr-2 ml-3 mb-2"/>
        </div>;
        const end = <div>
                    <Button label="Página principal" className='p-button-primary mx-1' onClick={toHome}/>
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
 
export default nav_secondary2;