import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
class footer extends Component {
    state = {  }
    constructor(props) {
        super(props);
        this.state = {
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: ''
        };
    }
    render() { 
        return (
            <div className='grid'>
                <div className='col-6'>
                    <h1 className='h1'>Titulo</h1>
                    <InputText value={this.state.value1} onChange={(e) => this.setState({value1: e.target.value})} />
                    <span className="ml-2">{this.state.value1}</span>
                </div>
            </div>
        );
    }
}
 
export default footer;