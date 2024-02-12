import React from 'react'
import Imagesilver from '../assets/png/silver-card-img.png'
import ImageShadaw from '../assets/png/sliverCard-shadaw.png'
import { BtnsvgWhite } from './Icons'
import { Tiksvg } from './Icons'
import ImageEllips from '../assets/png/sliver-ellips.png'

function Ofertas() {
    return (
        <section id='ofertas' className='pt-150 pb-60 '>
            <div className="container">
                <h2 className='heading color-white mx-auto text-center'>Nuestras ofertas</h2>
                <p className='text color-white mx-auto text-center pb-60'>Te ofrecemos las mejores experiencias de juegos para tus clientes.</p>
                <div className='sliver-box position-relative'>
                    <div className="row">
                        <div className="col-lg-7 py-77">
                            <img className='silver-ellips' src={ImageEllips} alt="sliver-ellips" />
                            <img className='w_100 position-relative' src={Imagesilver} alt="silver-card-img" />
                            <img className='mix-blend d-md-block d-none mt-3' src={ImageShadaw} alt="sliverCard-shadaw" />
                        </div>
                        <div className="col-lg-5">
                            <p className='sub-text color-white '>Silver</p>
                            <p className='text color-lightWhite  max-w-401 mb-4'>Diseño predeterminado, atractivo y fácil de navegar, tecnología HTLM5.</p>
                            <h2 className='heading color-white'>$5000</h2>
                            <div className='d-flex align-items-baseline gap-3'>
                                <Tiksvg />
                                <p className='text color-lightWhite max-w-387'>Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas manuales</p>
                            </div>
                            <div className='d-flex align-items-baseline gap-3'>
                                <Tiksvg />
                                <p className='text color-lightWhite max-w-387'>Control de RTP (controlás qué porcentaje pagar)</p>
                            </div>
                            <div className='d-flex align-items-baseline gap-3'>
                                <Tiksvg />
                                <p className='text color-lightWhite max-w-387'>Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo</p>
                            </div>
                            <div className='d-flex align-items-baseline gap-3'>
                                <Tiksvg />
                                <p className='text color-lightWhite max-w-387'>Aplicación para Android y Windows de regalo.</p>
                            </div>
                            <div className='d-flex align-items-baseline gap-3'>
                                <Tiksvg />
                                <p className='text color-lightWhite max-w-387'>Tiempo de creación 2 a 3 semanas</p>
                            </div>
                            <div className='position-relative mt-5 btnn_hover cursor-pointer'>
                                <button className='btnn btn-style color-white'>Comprar ahora</button>
                                <div className='btn-svg '>
                                    <BtnsvgWhite />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Ofertas