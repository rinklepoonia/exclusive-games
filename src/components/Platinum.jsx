import React from 'react'
import ImagePlatinum from '../assets/png/platinum-img.png'
import { BtnsvgWhite } from './Icons'
import PlatinumEllips from '../assets/png/platinum-ellips.png'
import PlatinumEllips2 from '../assets/png/platinum-ellips-2.png'
import { Tiksvg } from './Icons'

function Platinum() {
    return (
        <section className='pb-60 position-relative'>
            <img className='position-ellips-platinum d-lg-block d-none' src={PlatinumEllips} alt="platinum-ellips" />
            <img className='positon2-ellips-pltinum d-lg-block d-none' src={PlatinumEllips2} alt="platinum-ellips-2" />
            <div className="container">
                <div className='platinum-box'>
                    <div className="row flex-lg-row flex-column-reverse px-60 ">
                        <div className="col-lg-5 py-120 item-center">
                            <p className='sub-text color-white mb_0'>Platinum</p>
                            <p className='text color-lightWhite max-w-364 mb_0'>Diseño totalmente personalizado. Contáctanos para un presupuesto.</p>
                            <h2 className='heading color-white mb_0'>Consultar precio</h2>
                            <div className='d-flex align-items-center gap-2'>
                                <Tiksvg />
                                <p className='text color-lightWhite mb-0 '>Personalizable </p>
                            </div>
                            <div className='position-relative mt-40 mb-4 cursor-pointer nav-btn-hover'>
                                <button className='btnn btn-style butn color-white text-nowrap'>Comprar ahora</button>
                                <div className='btn-svg '>
                                    <BtnsvgWhite />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 py-78">
                            <img className='w-100 position-relative' src={ImagePlatinum} alt="platinum-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Platinum