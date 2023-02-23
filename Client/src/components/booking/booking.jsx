import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';

class booking extends Component {
    state = {  }
    reload = () => {
        window.location.reload(true);
    }
    render() { 
        return (
            <div>
                <div className='flex align-items-center justify-content-center my-8'>
                    <div className='align-items-center justify-content-center'>
                        <div className='gray-color py-8 px-5 sm:px-8 rounded'>
                            <h4 className='text-900 text-3xl font-medium text-center'>Bienvenido</h4><hr/>
                            <p className="text-600 font-medium text-center">Rellene por favor el formulario para continuar con el proceso de reserva.</p>
                            <div className='card'>
                                <div className='formgrid grid'>
                                    <div className='field col-5'>
                                        <label className="block text-900 font-medium mb-2">Tipo de servicio</label>
                                        <Dropdown className='w-full' placeholder="Elija el tipo de servicio" required/>
                                    </div>
                                    <div className='field col-5'>
                                        <label className="block text-900 font-medium mb-2">Tipo de reservación</label>
                                        <Dropdown className='w-full' placeholder="Elija el tipo de reservación" required/>
                                    </div>
                                    <div className='field col-2'>
                                        <label className="block text-900 font-medium mb-2">Cantidad</label>
                                        <InputText className='w-full' type="number" placeholder="00" required />
                                    </div>
                                </div>
                                <div className='formgrid grid'>
                                    <div className='field col-3'>
                                        <label className="block text-900 font-medium mb-2">Fecha inicial</label>
                                        <Calendar value={this.state.date1} onChange={(e) => this.setState({ date1: e.value })} />
                                    </div>
                                    <div className='field col-3'>
                                        <label className="block text-900 font-medium mb-2">Fecha final</label>
                                        <Calendar value={this.state.date2} onChange={(e) => this.setState({ date2: e.value })} />
                                    </div>
                                    <div className='field col-6'>
                                        <label className="block text-900 font-medium mb-2">Nombre cliente</label>
                                        <InputText className='w-full' type="text" placeholder="Ingrese su nombre" required />
                                    </div>
                                </div>
                                <div className='formgrid grid'>
                                    <div className='field col-3'>
                                        <label className="block text-900 font-medium mb-2">Cedula</label>
                                        <InputText className='w-full' type="number" placeholder="99999999" required />
                                    </div>
                                    <div className='field col-3'>
                                        <label className="block text-900 font-medium mb-2">Telefono</label>
                                        <InputText className='w-full' type="number" placeholder="321 123 1234" required />
                                    </div>
                                    <div className='field col-6'>
                                        <label className="block text-900 font-medium mb-2">Email</label>
                                        <InputText className='w-full' type="email" placeholder="correo@correo.com" required />
                                    </div>
                                </div>
                                <div className='formgrid grid'>
                                    <div className='field col-2'>
                                        <label className="block text-900 font-medium mb-2"># de niños</label>
                                        <InputText className='w-full' type="number" placeholder="00" required />
                                    </div>
                                    <div className='field col-2'>
                                        <label className="block text-900 font-medium mb-2"># de adultos</label>
                                        <InputText className='w-full' type="number" placeholder="00" required />
                                    </div>
                                    <div className='field col-8'>
                                        <label className="block text-900 font-medium mb-2">Observaciones</label>
                                        <InputTextarea className='w-full' rows={5} cols={30} />
                                    </div>
                                </div>
                                <div className='formgrid grid'>
                                    <div className='field col-6'></div>
                                    <div className='field col-3'>
                                        <Button label="Limpiar" className="w-full p-3 text-xl p-button-danger" onClick={this.reload}/>
                                    </div>
                                    <div className='field col-3'>
                                        <Button label="Reservar" className="w-full p-3 text-xl p-button-success"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default booking;