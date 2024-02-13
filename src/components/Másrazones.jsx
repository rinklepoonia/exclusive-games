import React from 'react'
import ImageMas from '../assets/png/img-777.png'
import ImageMas1 from '../assets/png/bulb-img777.png'
import ImageMas2 from '../assets/png/contacts-img777.png'
import ImageMas3 from '../assets/png/dollers-img777.png'


function Másrazones() {
    return (
        <section className='position-relative pt-60'>
            <div className='container'>
                <div className='ellips-mas ellips-mas-position d-lg-block d-none'></div>
                <div className='ellips ellips2-mas-position d-lg-block d-none'></div>
                <div className="row align-text">
                    <div className="col-lg-6 mas-img-property">
                        <img className='w-100 h-100 object-fit-cover position-relative max-w-558' src={ImageMas} alt="img-777" />
                    </div>
                    <div className="col-lg-6">
                        <div className='d-flex flex-column item-center'>
                            <h2 className='heading color-white mb-60 pt-4'>Más razones para elegirnos</h2>
                            <div className=' d-flex flex-column gap-24'>
                                <div className='mas-box py-24 cursor-pointer'>
                                    <div className='d-flex align-items-center gap-37 '>
                                        <img className='ms-56 max-w-558' src={ImageMas1} alt="bulb-img777" />
                                        <div className='max-w- 127 pr-20'>
                                            <p className='sub-text color-white mb-0'>200</p>
                                            <p className='text color-white text-nowrap mb-0'>Páginas creadas</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='mas-box py-24 cursor-pointer'>
                                    <div className='d-flex align-items-center gap-37 '>
                                        <img className='ms-56' src={ImageMas2} alt="contacts-img777" />
                                        <div className='max-w- 127 pr-20'>
                                            <p className='sub-text color-white mb-0'>98%</p>
                                            <p className='text color-white text-nowrap mb-0'>Clientes Satisfechas</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='mas-box py-24 cursor-pointer'>
                                    <div className='d-flex align-items-center gap-37 '>
                                        <img className='ms-56' src={ImageMas3} alt="dollers-img777" />
                                        <div className='max-w- 127 pr-20'>
                                            <p className='sub-text color-white mb-0'>200</p>
                                            <p className='text color-white text-nowrap mb-0'>Divisas Disponibles</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Másrazones