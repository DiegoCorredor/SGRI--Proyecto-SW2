import React, { Component} from 'react';
import logo from '../../assets/logo_navbar.png';
import logou from '../../assets/logo_u.png';

class footer extends Component {

    state = {  }

    render() {
        return (
            <div>
                <div className='py-4 px-4 mx-0 mt-8 bg_test'>
                    <div className='grid'>
                        <div className="col-6">
                            <div className="flex flex-wrap align-items-center justify-content-center">
                                <img src={logo} alt="footer sections" width="200"/>
                            </div>
                            <div className="flex flex-wrap align-items-center justify-content-center">
                                <img src={logou} alt="footer sections" width="500"/>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="grid justify-content-end">
                                <div className="col-6 md:col-3">
                                    <h4 className="text-2xl line-height-6 mb- text-900">Ubicanos</h4>
                                    <p className="line-height-3 text-xl block mb-2 text-700">Calle 4 #2-30 Este</p>
                                    <p className="line-height-3 text-xl block mb-2 text-700">Tibasosa</p>
                                    <p className="line-height-3 text-xl block mb-2 text-700">Boyacá, Colombia</p>
                                    <p className="line-height-3 text-xl block mb-2 text-700">(+57) 301 217 9561</p>
                                </div>
                                <div className="col-6 md:col-3">
                                    <h4 className="text-2xl line-height-3 mb-3 text-900">Siguenos</h4>
                                    <a className="line-height-3 text-xl block mb-2 text-700" href='https://www.facebook.com/hotelmarquesadepinares'><i className="pi pi-facebook"></i> Facebook</a>
                                    <a className="line-height-3 text-xl block mb-2 text-700" href='https://www.instagram.com/hotelmarquesadepinares/'><i className="pi pi-instagram"></i> Instagram</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid justify-content-center text-center'>
                        <div className='col-12 md:col-12'>
                            <p className='text-xl block mb-2 text-700'>Todos los derechos reservados.<br/>Universidad Pedagógica y Tecnológica de Colombia<br/>UPTC Seccional Sogamoso<br/>2022</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default footer;




