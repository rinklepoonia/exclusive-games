import React from 'react'
import { BtnSVG } from './Icons'

function Lanza2() {
    return (
        <section className='mb-130'>
            <div className="container">
                <div className='lanza2-box lanza2-bg'>
                    <h2 className='heading text-white text-center mx-auto'>Lanza tu propia plataforma en sólo 2 semanas</h2>
                    <div className='position-relative max-w-162 text-nowrap mt-lg-5 mx-auto text-center btnn-hover'>
                        <button className='btnn btn1-style color-black'>Aprende más</button>
                        <span className='btn-svg'>
                            <BtnSVG />
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Lanza2