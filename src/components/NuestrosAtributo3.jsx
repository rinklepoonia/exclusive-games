import React from 'react'
import ImageBlub from '../assets/png/bulb-section3.png'
import ImageContact from '../assets/png/contact-section3.png'
import ImageSetting from '../assets/png/setting-section3.png'
import Image1 from '../assets/png/1slot-img.png'
import Image2 from '../assets/png/2slot-img.png'
import Image3 from '../assets/png/3slot-img.png'
import Image4 from '../assets/png/4slot-img.png'
import Image5 from '../assets/png/5slot-img.png'
import Image6 from '../assets/png/6slot-img.png'
import { Arrowsvg } from './Icons'
import { Arrowsvg2 } from './Icons'
import { BtnSVG } from './Icons'


function NuestrosAtributo3() {
    return (
        <section className='bg-sec-img py-170 position-relative z-index'>
            <div className="container">
                <h2 className='heading color-black mx-auto text-center pb-60'>Nuestros Atributos de Marca</h2>
                <div className="row position-relative">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="box">
                            <div className='mx-auto'><img className='max-w-100 mb-4' src={ImageBlub} alt="bulb-section3" /></div>
                            <h3 className='sub-heading text-center'>Inteligencia</h3>
                            <p className='text color-lighBlack max-w-235 text-center'>Comprendemos a la perfección los gustos de las personas y el mundo del gaming.</p>
                        </div>

                        {/* =====arrow-svg===== */}
                        <span className='arrow-svg1 d-xl-block d-none'>
                            <Arrowsvg />
                        </span>
                        <span className='arrow-svg2 d-xl-block d-none'>
                            <Arrowsvg2 />
                        </span>
                        {/* =====arrow-svg===== */}
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="box">
                            <div className='mx-auto'><img className='max-w-100 mb-4' src={ImageContact} alt="contact-section3" /></div>
                            <h3 className='sub-heading text-center'>Proactividad</h3>
                            <p className='text color-lighBlack max-w-235 text-center'>Somos creadores de cambios que exploran nuevas formas de entretenimiento.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="box">
                            <div className='mx-auto'><img className='max-w-100 mb-4' src={ImageSetting} alt="setting-section3" /></div>
                            <h3 className='sub-heading text-center'>Innovación</h3>
                            <p className='text color-lighBlack max-w-235 text-center'>Pensamos fuera de la caja para estar siempre un paso adelante.</p>
                        </div>
                    </div>
                </div>

                {/*============== slots ===============*/}

                <h2 className='heading color-black mx-auto text-center pt-150'>Slots </h2>
                <p className='text color-lighBlack max-w-904 text-center mx-auto pb-60'>En Exclusive Games, ofrecemos una selección de más de 600 juegos de los principales desarrolladores, como Aristocrat, Amatic, EGT, Novomatic, IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo trabaja incansablemente para innovar y ampliar nuestra oferta de experiencias, garantizando la máxima seguridad con operaciones protegidas por cifrado SSL de 256 bits.</p>
                <div className="row">

                    <div className='col-lg-4 col-sm-6 col-12 position-relative card_hover mb-4'>
                        <div className='position-relative black_layer'>
                            <img className='w-100 ' src={Image1} alt="1slot-img" />
                        </div>
                        <div className='position-absolute btn_none top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center'>
                            <div className='position-relative cursor_pointer d-inline-flex justify-content-center align-items-center'>
                                <button className='btnn btn4style color-white '>Jugar</button>
                                <svg className='btn-svg' width="106" height="28" viewBox="0 0 106 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1C1 15.3594 12.6406 27 27 27H105" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-6 col-12 position-relative card_hover mb-4'>
                        <div className='position-relative black_layer'>
                            <img className='w-100 ' src={Image2} alt="2slot-img" />
                        </div>
                        <div className='position-absolute btn_none top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center'>
                            <div className='position-relative cursor_pointer d-inline-flex justify-content-center align-items-center'>
                                <button className='btnn btn4style color-white '>Jugar</button>
                                <svg className='btn-svg' width="106" height="28" viewBox="0 0 106 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1C1 15.3594 12.6406 27 27 27H105" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-6 col-12 position-relative card_hover mb-4'>
                        <div className='position-relative black_layer'>
                            <img className='w-100 ' src={Image3} alt="3slot-img" />
                        </div>
                        <div className='position-absolute btn_none top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center'>
                            <div className='position-relative cursor_pointer d-inline-flex justify-content-center align-items-center'>
                                <button className='btnn btn4style color-white '>Jugar</button>
                                <svg className='btn-svg' width="106" height="28" viewBox="0 0 106 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1C1 15.3594 12.6406 27 27 27H105" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-6 col-12 position-relative card_hover mb-4'>
                        <div className='position-relative black_layer '>
                            <img className='w-100 ' src={Image4} alt="4slot-img" />
                        </div>
                        <div className='position-absolute btn_none top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center'>
                            <div className='position-relative cursor_pointer d-inline-flex justify-content-center align-items-center'>
                                <button className='btnn btn4style color-white '>Jugar</button>
                                <svg className='btn-svg' width="106" height="28" viewBox="0 0 106 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1C1 15.3594 12.6406 27 27 27H105" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-6 col-12 position-relative card_hover mb-4'>
                        <div className='position-relative black_layer '>
                            <img className='w-100 ' src={Image5} alt="5slot-img" />
                        </div>
                        <div className='position-absolute btn_none top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center'>
                            <div className='position-relative cursor_pointer d-inline-flex justify-content-center align-items-center'>
                                <button className='btnn btn4style color-white '>Jugar</button>
                                <svg className='btn-svg' width="106" height="28" viewBox="0 0 106 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1C1 15.3594 12.6406 27 27 27H105" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-6 col-12 position-relative card_hover mb-4'>
                        <div className='position-relative black_layer '>
                            <img className='w-100 ' src={Image6} alt="6slot-img" />
                        </div>
                        <div className='position-absolute btn_none top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center'>
                            <div className='position-relative cursor_pointer d-inline-flex justify-content-center align-items-center'>
                                <button className='btnn btn4style color-white '>Jugar</button>
                                <svg className='btn-svg' width="106" height="28" viewBox="0 0 106 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1C1 15.3594 12.6406 27 27 27H105" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='position-relative max-w-162 mx-auto btnn-hover cursor-pointer'>
                    <button className='btnn btn1-style color-black text-nowrap'>Mostrar más</button>
                    <span className='btn-svg'>
                        <BtnSVG />
                    </span>
                </div>
            </div>
        </section>
    )
}

export default NuestrosAtributo3