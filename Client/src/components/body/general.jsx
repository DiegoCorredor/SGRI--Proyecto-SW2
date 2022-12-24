import React, { Component} from 'react';
import hotel from '../../assets/hotel.jpg';
import hotel1 from '../../assets/hotel1croped.jpg';
import hotel2 from '../../assets/hotel2croped.jpg';

class general extends Component {

    state = {  }

    render() {
        return (
            <div>
                <div className='vc_row wpb_row vc_row-fluid mkdf-section template-intro vc_custom_1620807383981 mkdf-content-aligment-left mkdf-grid-section'>
                    <img className='vc_single_image-img attachment-full' src={hotel} alt='' width="100%"/>
                </div>
                <div className='text-center'>
                    <h1>Bienvenidos</h1>
                    <p className='intro'>Un espacio turístico que brinda servicio de hospedaje a visitantes tanto nacionales como de otros 
                                países, se caracteriza por ser una casona que goza de arquitectura republicana con estilo señorial 
                                revestida con un toque de modernidad y confort en sus habitaciones.</p>
                </div>
                <div className='py-4 px-4 lg:px-8 lg:mx-8'>
                    <div className='grid mt-8 pb-2 md:pb-8'>
                        <div className='flex justify-content-center col-12 lg:col-6 p-0 flex-order-1 lg:flex-order-0'>
                            <img className='w-11 rounded' src={hotel1} alt='' />
                        </div>
                        <div className='col-12 lg:col-6 my-auto flex flex-column lg:align-items-end text-center lg:text-left'>
                            <p className='text-700 text-2xl line-height-3 ml-0 md:ml-2'>
                            <p className='subtitle'>Historia:</p>La Hacienda Marquesa de Pinares fue construida en el año 1.888 y es una de las más antiguas ubicada 
                            en el Valle de Tibasosa, con más de cien años de historia que se pueden reconocer tanto en los detalles 
                            de su construcción como en la particularidad de su mobiliario. Fue restaurada en el año 2019, Sus espacios 
                            conectan al visitante con las casas propias de la época de la colonia de influencia española, con un hermoso 
                            aire de tranquilidad y comodidad.<br/><br/>
                            El paisaje campestre que rodea la Hacienda con sus palmeras, eucaliptos y pinos silvestres, invita a nuestros 
                            huéspedes a reencontrarse con la naturaleza a través de caminatas y amaneceres, Marquesa de Pinares ofrece a 
                            sus huéspedes una experiencia de confort, naturaleza y comodidad, con un toque de lujo en los más bellos 
                            paisajes Boyacenses, cerca de la mejor comida, planes y diversión.
                            </p>
                        </div>
                    </div>
                    <div className='grid mt-8 pb-2 md:pb-8'>
                        <div className='col-12 lg:col-6 my-auto flex flex-column lg:align-items-end text-center lg:text-right'>
                            <p className='text-700 text-2xl line-height-3 ml-0 md:ml-2'>
                            <p className='subtitle'>Misión:</p>La misión del Hotel es ofrecer los servicios de alojamiento y descanso con el más alto nivel de comodidad, 
                            para satisfacer las demandas y expectativas de los huéspedes, en un ambiente campestre y elegante, rodeado de naturaleza 
                            y ser la opción preferida de alojamiento y descanso.<br/>
                            <p className='subtitle'>Visión:</p>HOTEL MARQUESA DE PINARES será reconocido para 2022 como uno de los Hoteles boutique más visitados de Tibasosa, 
                            siendo la mejor opción para nacionales y extranjeros en el servicio de hospedaje. Contará con todos los requisitos para el 
                            cumplimiento de los estándares de calidad hotelera en alojamiento rural, promoviendo el paisaje cultural de la tierra Tibasoseña 
                            y el de sus alrededores. Brindará el mejor servicio hotelero de la región, uniendo esfuerzos para cumplir los requisitos de 
                            sostenibilidad, conservación del medioambiente, conservación del patrimonio cultural boyacense, y protección de la invaluable 
                            riqueza natural de la región.
                            </p>
                        </div>
                        <div className='flex justify-content-center col-12 lg:col-6 p-0 flex-order-1 lg:flex-order-0'>
                            <img className='w-11 rounded' src={hotel2} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default general;