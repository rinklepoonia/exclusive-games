import React from 'react'
import ImageEllos1 from '../assets/png/ellos-img1.png'
import ImageEllos2 from '../assets/png/ellos-img2.png'
import ImageEllos3 from '../assets/png/ellos-img3.png'
import { BtnsvgWhite } from './Icons'

function Ellos() {
    return (
        <section className='pt-60'>
            <div className="container">
                <h2 className='heading color-white mx-auto text-center pb-60'>Ellos eligieron apostar con nosotros</h2>
                <div className="row justify-content-center">
                    <div className='col-lg-4 col-md-6 position-relative card_hover mb-5'>
                        <div className='position-relative black_layer'>
                            <img className='w-100 ' src={ImageEllos1} alt="ellos-img1" />
                        </div>
                        <div className='position-absolute btn_none top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center'>
                            <div className='position-relative cursor_pointer d-inline-flex justify-content-center align-items-center btn-hover'>
                                <button className='btnn btn4style color-white '>Rcasinovip</button>
                                <div className='btn-svg '>
                                    <BtnsvgWhite />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 position-relative card_hover mb-5'>
                        <div className='position-relative black_layer'>
                            <img className='w-100 ' src={ImageEllos2} alt="ellos-img2" />
                        </div>
                        <div className='position-absolute btn_none top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center'>
                            <div className='position-relative cursor_pointer d-inline-flex justify-content-center align-items-center btn-hover'>
                                <button className='btnn btn4style color-white '>Rcasinovip</button>
                                <div className='btn-svg '>
                                    <BtnsvgWhite />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 position-relative card_hover mb-5'>
                        <div className='position-relative black_layer'>
                            <img className='w-100 ' src={ImageEllos3} alt="ellos-img3" />
                        </div>
                        <div className='position-absolute btn_none top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center'>
                            <div className='position-relative cursor_pointer d-inline-flex justify-content-center align-items-center btn-hover'>
                                <button className='btnn btn4style color-white '>Rcasinovip</button>
                                <div className='btn-svg '>
                                    <BtnsvgWhite />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='text color-white max-w-883 text-center mx-auto pb-60'>Clientes satisfechos que confiaron en Exclusive Games y han disfrutado de emocionantes experiencias de juego.<br className='d-lg-block d-none' />
                    Ahora, la próxima apuesta está en tus manos.<br className='d-lg-block d-none' />
                    Elige ganar. Elige exclusive game.</p>
            </div>
        </section>
    )
}

export default Ellos 