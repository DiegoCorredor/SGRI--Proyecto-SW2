import React, { Component } from 'react';
import { Menu } from 'primereact/menu';

class menuAdmin extends Component {
    state = {}

    constructor(props) {
        super(props);

        this.items = [
            {
                label: 'Inventario',
                items:[
                    {label: 'Añadir elemento', icon: 'pi pi-plus', url: '/'},
                    {label: 'Buscar elemento', icon: 'pi pi-search', url: '/'},
                    {label: 'Editar elemento', icon: 'pi pi-file-edit', url: '/'},
                    {label: 'Eliminar elemento', icon: 'pi pi-delete-left', url: '/'}
                ]
            }
        ];

        this.items2 = [
            {
                label: 'Reservas',
                items:[
                    {label: 'Añadir reserva', icon: 'pi pi-plus', url: '/'},
                    {label: 'Buscar reserva', icon: 'pi pi-search', url: '/'},
                    {label: 'Editar reserva', icon: 'pi pi-file-edit', url: '/'},
                    {label: 'Cance reserva', icon: 'pi pi-file-excel', url: '/'}
                ]
            }
        ];

    }
    render() {
        
        return (
            <div>
                <div className='card mx-3 mt-3 mb-3'>
                    <Menu model={this.items}/>
                </div>
                <div className='card mx-3 mt-3 mb-3'>
                    <Menu model={this.items2}/>
                </div>
            </div>
        );
    }
}

export default menuAdmin;