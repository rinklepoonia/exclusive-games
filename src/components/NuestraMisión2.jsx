import React from 'react'
import Imagepoker from '../assets/png/poker-section2.png'
import ImageAviator from '../assets/png/aviator-section2.png'

function NuestraMisión2() {
    return (
        <section id='Mission' className='color-teaGreen position-relative py-100'>
            <div className='ellips ellips1-position d-lg-block d-none'></div>
            <div className='ellips ellips2-position d-lg-block d-none'></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 item-center">
                        <img className='w-100 max-w-538' src={Imagepoker} alt="poker-section2" />
                        <h2 className='heading color-white pt-60'>Nuestra Visión</h2>
                        <p className='text max-w-444 color-lightWhite mb-24'>Nuestra visión es ser líderes indiscutibles en la industria de los juegos de azar y llevar nuestra pasión por el entretenimiento más allá de las fronteras. Imagina un mundo donde la emoción y la diversión no tengan límites, y ese es el mundo que queremos crear contigo.</p>
                        <p className='btnn color-green cursor-pointer btnn-hover'>Aprende más ⟶</p>
                    </div>

                    <div className="col-lg-6 flex-lg-column flex-column-reverse item-center">
                        <div>
                            <h2 className='heading color-white'>Nuestra Misión</h2>
                            <p className='text max-w-444 color-lightWhite mb-24'>Nuestra misión es simple pero poderosa: proporcionarte la más amplia gama de soluciones de entretenimiento de alta calidad y rentabilidad. Estamos comprometidos a elevar tus expectativas y brindarte experiencias inigualables.</p>
                            <p className='btnn color-green cursor-pointer btnn-hover'>Aprende más ⟶</p>
                        </div>
                        <img className='pt-60 w-100 max-w-538 position-relative z-index' src={ImageAviator} alt="aviator-section2" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default NuestraMisión2