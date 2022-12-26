import React, { Component } from 'react';
import NavBar from '../../src/components/navbarAdmin/navbarAdmin.jsx';
import Options from '../../src/components/menuAdmin/menuAdmin.jsx';
import Stats from '../../src/components/stadistics/stats.jsx';



class dashboard extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <NavBar/>
                <div className='grid grid-nogutter'>
                    <div className='col-2 brown-color'>
                        <Options/>
                    </div>
                    <div className='col-10 gray-color'>
                        <Stats/>
                        <Options/>
                        <Options/>
                        <Options/>
                        <Options/>
                        
                    </div>
                </div>
            </div>
        );
    }
}
 
export default dashboard;