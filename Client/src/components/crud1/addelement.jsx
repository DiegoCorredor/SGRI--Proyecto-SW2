import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';


class addelement extends Component {
    

    constructor(props){
        super(props);
        this.state={
            nameElement: '',
            typeElement: '',
            countElement: '',
            stateElement: '',
            valueElement: '',
            dependencyElement: '',
            dateStart: '',
            descriptonElement: '',
            optionsTypeElement: [
        ]
        }
    }

    getTypeElements () {
        axios.get('http://localhost:4000/dropdowns/typeElement').then(res=> {
            this.setState({optionsTypeElement: res.data.data})
        });
    }

    getStatuses(){
        axios.get('http://localhost:4000/dropdowns/statuses').then(res=> {
            this.setState({optionsStatuses: res.data.data})
        });
    }

    getDependencies(){
        axios.get('http://localhost:4000/dropdowns/dependencies').then(res=> {
            this.setState({optionsStatuses: res.data.data})
        });
    }

    componentDidMount(){
        this.getTypeElements();
    }

    render(){
        return(
            <div className='card max-w-screen'>
                <div className=' align-items-center justify-content-start'>
                    <div className='align-items-center justify-content-center'>
                        <div className='py-2 px-5 sm:px-8 rounded'>
                        <h3 className='mx-2 px-2'>Agregar elemento al inventario</h3><hr/>
                            <div className='card'>
                                <div className='formgrid grid'>
                                    <div className='field col-6'>
                                        <label className="block text-900 font-medium mb-2">Nombre del árticulo</label>
                                        <InputText className='w-full' placeholder="Ej. Bombillo" required/>
                                    </div>
                                    <div className='field col-4'>
                                        <label className="block text-900 font-medium mb-2">Tipo de árticulo</label>
                                        <Dropdown className='w-full' value={this.state.typeElement} options={this.state.optionsTypeElement} onChange={(e) => {this.setState({typeElement:e.target.value});console.log(e.target.value);}} placeholder="Elija el tipo de árticulo" optionLabel='typeElement' required/>
                                    </div>
                                    <div className='field col-2'>
                                        <label className="block text-900 font-medium mb-2">Cantidad</label>
                                        <InputText className='w-full' type="number" placeholder="00" required />
                                    </div>
                                </div>
                                <div className='formgrid grid'>
                                    <div className='field col-5'>
                                        <label className="block text-900 font-medium mb-2">Estado del árticulo</label>
                                        <Dropdown className='w-full' placeholder="Elija el estado del árticulo" required/>
                                    </div>
                                    <div className='field col-2'>
                                        <label className="block text-900 font-medium mb-2">Valor del árticulo</label>
                                        <InputText className='w-full' type="number" placeholder="00" required />
                                    </div>
                                    <div className='field col-5'>
                                        <label className="block text-900 font-medium mb-2">Dependencia a la que pertenece</label>
                                        <Dropdown className='w-full' placeholder="Elija la dependencia del árticulo" required/>
                                    </div>
                                </div>
                                <div className='formgrid grid'>
                                    <div className='field col'>
                                        <label className="block text-900 font-medium mb-2">Observaciones</label>
                                        <InputTextarea className='w-full' rows={5} cols={30} />
                                    </div>
                                </div>
                                <div className='formgrid grid justify-content-end'>
                                    <div className='field'>
                                        <Button label="Limpiar" icon="pi pi-eraser" className="p-button-danger mx-1"/>
                                        <Button label="Guardar" icon="pi pi-save" className="p-button-success mx-1"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default addelement;