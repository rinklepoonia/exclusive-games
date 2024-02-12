import React from 'react'
import Imgejackport from '../assets/png/jackpot-img.png'
import Imagejackport1 from '../assets/png/outerBox-img1.png'
import Imagejackport2 from '../assets/png/outerBox-img-2.png'
import ImageJuegos1 from '../assets/png/ezugi1-img.png'
import ImageJuegos2 from '../assets/png/roulette -img2.png'
import ImageJuegos3 from '../assets/png/betting-img3.png'
import { Tiksvg } from './Icons'
import { BtnsvgWhite } from './Icons'

function Potenciando() {
    return (
        <section className='jackport-bg-img mb-5 position-relative'>
            <div className="container">
                <div className='ellips ellips-potenciado d-lg-block d-none'></div>
                <div className='ellips ellips-potenciado3 d-lg-block d-none'></div>
                <div className="row">

                    <div className="col-lg-6">
                        <img className='w-100 h-100' src={Imgejackport} alt="jackpot-img" />
                    </div>
                    {/* ellips */}
                    <div className='ellips-center ellips-potenciado2 d-lg-block d-none'></div>
                    {/* ellips */}
                    <div className="col-lg-6">
                        <h2 className='heading color-white pt-5'>Potenciando sus elecciones</h2>
                        <p className='text color-lightWhite'>Con Exclusive Game lo mejor está de tu lado.</p>
                        <div className='d-flex align-items-center gap-2 mb-3'>
                            < Tiksvg />
                            <p className='text color-lightWhite mb-0'>Tecnología HTML5</p>
                        </div>
                        <div className='d-flex align-items-center gap-2 mb-3'>
                            < Tiksvg />
                            <p className='text color-lightWhite mb-0'>Versión PC y móvil</p>
                        </div>
                        <div className='d-flex align-items-center gap-2 mb-3'>
                            < Tiksvg />
                            <p className='text color-lightWhite mb-0'>Control de RTP (controlás qué porcentaje pagar)</p>
                        </div>
                        <div className='d-flex align-items-center gap-2 mb-3'>
                            < Tiksvg />
                            <p className='text color-lightWhite mb-0 max-w-320'>Bonos editables, happy hours, Jackpots, códigos  promocionales.</p>
                        </div>
                        <div className='d-flex align-items-center gap-2 mb-3'>
                            < Tiksvg />
                            <p className='text color-lightWhite mb-0'>Aplicación para android y windows de regalo.</p>
                        </div>
                        <p className='text color-lightWhite mt-lg-4'>Te reintegramos todo lo invertido en fichas en la moneda que elijas.</p>


                    </div>
                </div>

                {/* ========== */}
                <div className='lanza-box position-relative'>
                    <div className='d-lg-block d-none'>
                        <div className='jackport-img1'>
                            <img src={Imagejackport1} alt="outerBox-img1" />
                        </div>
                        <div className='jackport-img2'>
                            <img src={Imagejackport2} alt="outerBox-img-2" />
                        </div>
                        <div>
                        </div>

                    </div>
                    <h2 className='heading color-white max-w-520 text-center mx-auto'>lanza tu propia plataforma en sólo 2 semanas</h2>
                </div>

                {/* ============ */}
                <h2 className='heading color-white mx-auto text-center pt-150 pb-60'>Juegos en vivo</h2>
                <div className="row  justify-content-center">

                    <div className='col-lg-4 col-md-6 position-relative card_hover mb-2'>
                        <div className='position-relative black_layer '>
                            <img className='w-100' src={ImageJuegos1} alt="ezugi1-img" />
                        </div>
                        <div className='position-absolute btn_none top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center'>
                            <div className='mt-4  position-relative cursor_pointer d-inline-flex justify-content-center align-items-center'>
                                <button className='btnn btn4style color-white '>Jugar</button>
                                <div className='btn-svg '>
                                    <BtnsvgWhite />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 position-relative card_hover mb-2'>
                        <div className='position-relative black_layer '>
                            <img className='w-100' src={ImageJuegos2} alt="roulette -img2" />
                        </div>
                        <div className='position-absolute btn_none top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center'>
                            <div className='mt-4  position-relative cursor_pointer d-inline-flex justify-content-center align-items-center'>
                                <button className='btnn btn4style color-white '>Jugar</button>
                                <div className='btn-svg '>
                                    <BtnsvgWhite />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 position-relative card_hover mb-2'>
                        <div className='position-relative black_layer '>
                            <img className='w-100' src={ImageJuegos3} alt="betting-img3" />
                        </div>
                        <div className='position-absolute btn_none top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center'>
                            <div className='mt-4  position-relative cursor_pointer d-inline-flex justify-content-center align-items-center'>
                                <button className='btnn btn4style color-white '>Jugar</button>
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

export default Potenciando 