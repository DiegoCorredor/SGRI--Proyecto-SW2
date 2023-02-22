import React, { Component} from 'react';
import logo from '../../assets/logox.png';
import logou from '../../assets/logo_u.png';

class footer extends Component {

    state = {  }

    render() {
        return (
            <footer className='bg_test card '>
                <div className='flex mx-6 card-container text-center sm:mx-2'>
                    <div className='flex-1  sm:mx-2'>
                        <img src={logo} alt="footer sections" className='mx-4 my-4 imgfooter sm:h-0rem md:h-3rem lg:h-5rem xl:h-9rem' />
                    </div>
                    <div className='flex-1 sm:mx-2'>
                        <h4 className="text-xl line-height-3 mb-3 text-900">Ubicanos</h4>
                        <p className="line-height-3 text-base block mb-2 text-700">Calle 4 #2-30 Este</p>
                        <p className="line-height-3 text-base block mb-2 text-700">Tibasosa</p>
                        <p className="line-height-3 text-base block mb-2 text-700">Boyacá, Colombia</p>
                        <p className="line-height-3 text-base block mb-2 text-700">(+57) 301 217 9561</p>
                    </div>
                    <div className='flex-1 sm:mx-2'>
                        <h4 className="text-xl line-height-3 mb-3 text-900">Siguenos</h4>
                        <a className="line-height-3 text-base block mb-2 text-700" href='https://www.facebook.com/hotelmarquesadepinares'><i className="pi pi-facebook"></i> Facebook</a>
                        <a className="line-height-3 text-base block mb-2 text-700" href='https://www.instagram.com/hotelmarquesadepinares/'><i className="pi pi-instagram"></i> Instagram</a>
                    </div>
                    <div className='flex-1 sm:mx-2'>
                        <img src={logou} alt="footer sections" className='mx-4 my-4 imgfooter sm:h-0rem md:h-3rem lg:h-7rem xl:h-9rem' />
                    </div>
                </div>
                <div className='flex card-container text-center'>
                    <div className='flex-1'>
                        <p className='text-base block mb-2 text-700'>&copy;Todos los derechos reservados.<br />Universidad Pedagógica y Tecnológica de Colombia - UPTC Seccional Sogamoso<br />2022</p>
                    </div>
                </div>
            </footer>
        );
    }
}
 
export default footer;




