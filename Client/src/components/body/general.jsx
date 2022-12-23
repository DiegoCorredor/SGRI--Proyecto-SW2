import React, { Component} from 'react';
import hotel from '../../assets/hotel.jpg';


class general extends Component {

    state = {  }

    render() {
        return (
            <div className='banner'>
                <img className='image' src={hotel} alt=''/>
            </div>
        );
    }
}
 
export default general;