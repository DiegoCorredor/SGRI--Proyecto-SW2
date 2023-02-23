import React, { Component } from 'react';
import { Button } from 'primereact/button';
import Error404 from '../../assets/error-404.png';


class error404 extends Component {
    state = {  }
    render() { 
        function toHome(){
            window.location='/';
        }
        return (
            <div>
                <div className="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
                    <div className="flex flex-column align-items-center justify-content-center">
                        <div>
                            <div className="w-full surface-card py-8 px-5 sm:px-8 flex flex-column align-items-center" style={{ borderRadius: '53px' }}>
                                <img className='w-2' src={Error404} alt='' />
                                <h1 className="text-900 font-bold text-5xl mb-2">Ups, parece que está muy vacio por aquí</h1>
                                <div className="text-600 mb-5">Por alguna razón llegaste a este lugar, nadie del equipo se imaginó algo así.</div>
                                <div className="text-600 mb-5">Pero tranquilo, puedes volver al inicio y volver a estar seguro.</div>
                                <Button icon="pi pi-arrow-left" label="Página principal" className='p-button-primary mx-1' onClick={toHome}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default error404;