import React from 'react'
import Image1 from '../assets/png/luxery-role-imh.png'
import Image2 from '../assets/png/luxery-spadecard-img.png'
import Image3 from '../assets/png/luxery-heartcard-img.png'
import Image4 from '../assets/png/luxery-dice-img.png'
import { BtnSVG } from './Icons'
import { Tiksvg } from './Icons'

function Luxury() {
    return (
        <section className='pb-60'>
            <div className="container">
                <div className='luxury-box position-relative platinum-bg'>
                    <div className='position-absolute top-14 left-25 d-lg-block d-none'>
                        <img src={Image1} alt="luxery-role-imh" />
                    </div>
                    <div className='position-absolute top-60 left-19 d-lg-block d-none'>
                        <img src={Image2} alt="luxery-spadecard-img" />
                    </div>
                    <div className='position-absolute top-14 right-25 d-lg-block d-none'>
                        <img src={Image3} alt="luxery-heartcard-img" />
                    </div>
                    <div className='position-absolute bottom-20 right-19 d-lg-block d-none'>
                        <img src={Image4} alt="luxery-dice-img" />
                    </div>
                    <div className='max-w-419 mx-auto text-center'>
                        <p className='sub-text color-white mx-auto text-center'>Luxury</p>
                        <p className='text max-w-391 text-center color-lightWhite mx-auto text-center'>lleva tu experiencia de juego al siguiente nivel. Con todas las características de la versión Silver y la potencia adicional de la tecnología React .</p>
                        <h2 className='heading color-white mx-auto text-center'>$9000</h2>
                        <div className='d-flex align-items-start'>
                            <span>
                                <Tiksvg />
                            </span>

                            <p className='text color-white max-w-387 text-center ps-3'>Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas manuales</p>
                        </div>
                        <div className='d-flex align-items-start'>
                            <span>
                                <Tiksvg />
                            </span>
                            <p className='text color-white max-w-387 text-center ps-3'>Control de RTP (controlás qué porcentaje pagar)</p>
                        </div>
                        <div className='d-flex'>
                            <span>
                                <Tiksvg />
                            </span>
                            <p className='text color-white max-w-387 text-center ps-3'>Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo</p>
                        </div>
                        <div className='d-flex'>
                            <span>
                                <Tiksvg />
                            </span>
                            <p className='text color-white max-w-387 text-center ps-3'>Aplicación para Android y Windows de regalo.</p>
                        </div>
                        <div className='d-flex '>
                            <span>
                                <Tiksvg />
                            </span>
                            <p className='text color-white max-w-387 text-center ps-3'>Tiempo de creación 2 a 3 semanas</p>
                        </div>

                        <div className='position-relative mx-auto max-w-162 text-nowrap mt-5 btnn-hover cursor-pointer'>
                            <button className='btnn btn1-style color-black'>Comprar ahora</button>
                            <span className='btn-svg'>
                                <BtnSVG />
                            </span>
                        </div>



                    </div>
                </div>

            </div>
        </section>
    )
}

export default Luxury