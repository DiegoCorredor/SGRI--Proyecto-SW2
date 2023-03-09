import React, { Component } from 'react';

import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

class searchelement extends Component {
    state = {}

    render() {

        const products = [
            { code: '1', name: 'Product 1', category: 'Category 1', quantity: 1 },
            { code: '2', name: 'Product 2', category: 'Category 2', quantity: 2 },
            { code: '3', name: 'Product 3', category: 'Category 3', quantity: 3 },
            { code: '4', name: 'Product 4', category: 'Category 4', quantity: 4 },
            { code: '5', name: 'Product 5', category: 'Category 5', quantity: 5 },
            { code: '6', name: 'Product 6', category: 'Category 6', quantity: 6 },
            { code: '7', name: 'Product 7', category: 'Category 7', quantity: 7 },
            { code: '8', name: 'Product 8', category: 'Category 8', quantity: 8 },
            { code: '9', name: 'Product 9', category: 'Category 9', quantity: 9 },
            { code: '10', name: 'Product 10', category: 'Category 10', quantity: 10 },
            { code: '11', name: 'Product 11', category: 'Category 11', quantity: 11 },
            { code: '12', name: 'Product 12', category: 'Category 12', quantity: 12 },
            { code: '13', name: 'Product 13', category: 'Category 13', quantity: 13 },
            { code: '14', name: 'Product 14', category: 'Category 14', quantity: 14 },
            { code: '15', name: 'Product 15', category: 'Category 15', quantity: 15 },
            { code: '16', name: 'Product 16', category: 'Category 16', quantity: 16 }
        ]
        const header = <label className="text-3xl">Resultado de la busqueda</label>;
        const footer = products.length + " elementos encontrados en total.";

        return (
            <div className='card max-w-screen'>
                <div className='align-items-center justify-content-start'>
                    <div className='align-items-center justify-content-center'>
                        <div className='py-2 px-5 sm:px-8 rounded'>
                            <h3 className='mx-2 px-2'>Consultar elementos del inventario</h3><hr />
                            <div className='card'>
                                <div className='field grid align-items-center justify-content-start'>
                                    <label className="text-900 col-fixed font-medium">Ingrese sus parametros de busqueda:</label>
                                    <div className='col-8'>
                                        <InputText className='w-full text-base' placeholder="Ingrese lo que desea buscar" required />
                                    </div>
                                    <div className='col-1'>
                                        <Button label="Buscar" icon="pi pi-search" className="p-button-success" />
                                    </div>
                                </div>
                                <DataTable value={products} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} header={header} footer={footer} className='w-100 text-center'>
                                    <Column field="code" sortable header="Code"></Column>
                                    <Column field="name" sortable header="Name"></Column>
                                    <Column field="category" sortable header="Category"></Column>
                                    <Column field="quantity" sortable header="Quantity"></Column>
                                </DataTable>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default searchelement;