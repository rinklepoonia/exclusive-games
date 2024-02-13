import React from 'react'
import ImageCasino from '../assets/png/casino-img.png'
import { BtnSVG } from './Icons'

function Elegirnos() {
    return (
        <section id='por-que' className='elegirnos-bg pt-241 pb-109 bg_white position-relative z-index py-50'>
            <div className="container">
                <div className="row flex-lg-row flex-column-reverse text_align">
                    <div className="col-lg-6">
                        <h2 className='heading color-black pt-3'>Por qué elegirnos</h2>
                        <p className='text color-lightblack max-w-526'>Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos todo lo invertido en fichas en la moneda que elijas. En Exclusive Games siempre sumamos nuevos juegos. Juegos crash, los juegos interactivos que más pide la gente. Con Exclusive Games empezás a ganar ya! Creamos tu plataforma en solo 2 semanas.</p>
                        <div className='position-relative max-w-162 btnn-hover cursor-pointer mx_auto'>
                            <button className='btnn btn1-style color-black'>Empezar</button>
                            <span className='btn-svg'>
                                <BtnSVG />
                            </span>
                        </div>

                    </div>
                    <div className="col-lg-6">
                        <img className='w-100 max-w-558' src={ImageCasino} alt="casino-img" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Elegirnos