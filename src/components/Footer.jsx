import React from 'react'
import ImageFooter from '../assets/png/footer-logo.png'
import Imagefooter1 from '../assets/png/footer-elli1.png'
import Imagefooter2 from '../assets/png/footer-elli2.png'
import { Insta } from './Icons'
import { Facebook } from './Icons'
import { In } from './Icons'
import { Mail } from './Icons'
import { Phone } from './Icons'

function Footer() {
    return (
        <footer className='pt-60 pb-2 bg-black position-relative overflow-hidden'>
            <img className='foote-ellips1 d-lg-block d-none' src={Imagefooter1} alt="footer-elli1" />
            <img className='footer-ellips2 d-lg-block d-none' src={Imagefooter2} alt="footer-elli2" />
            <div className="container">
                <div className="row pb-60">
                    <div className="col-lg-5">
                        <a href=""><img className='mb-4' src={ImageFooter} alt="footer-logo" /></a>
                        <p className='text color-lightWhite max-w-369'>En Exclusive Games somos un equipo apasionado de personas dedicadas al desarrollo de multiplataformas para juegos de azar</p>
                        <div className='d-flex gap-3 mt-4'>
                            <Insta />
                            <Facebook />
                            <In />
                        </div>
                    </div>

                    <div className="col-lg-7 mt-20">
                        <div className='row'>
                            <div className="col-md-4">
                                <ul>
                                    <li className='btnn color-white mb-md-4'>Menú principal</li>
                                    <li className='mb-12'><a href="" className='text color-lightWhite mb-3'>Hogar</a></li>
                                    <li className='mb-12'><a href="" className='text color-lightWhite'>Misión</a></li>
                                    <li className='mb-12'><a href="" className='text color-lightWhite pb-3'>Tragamonedas</a></li>
                                    <li className='mb-12'><a href="" className='text color-lightWhite pb-3 text-nowrap'>Por qué elegirnos</a></li>
                                    <li className='mb-12'><a href="" className='text color-lightWhite pb-3'>Ofertas</a></li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul>
                                    <li className='btnn color-white mb-md-4 text-nowrap'>Atención al cliente</li>
                                    <li className='mb-12'><a href="" className='text color-lightWhite mb-3 text-nowrap'>¿Necesitas ayuda?</a></li>
                                    <li className='mb-12'><a href="" className='text color-lightWhite text-nowrap'>política de privacidad</a></li>
                                    <li className='mb-12'><a href="" className='text color-lightWhite pb-3 text-nowrap'>Términos de servicios</a></li>

                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul>

                                    <li className='btnn color-white mb-md-4 text-nowrap'>Ponerse en contacto</li>
                                    <li className='mb-12 d-flex'>
                                        <a href="" className='text color-lightWhite  d-flex align-items-center gap-2'><Mail />  juegosexclusivos@gmail.com</a>
                                    </li>

                                    <li className='mb-12'>
                                        <a href="tel:+496170961709" className='text color-lightWhite d-flex align-items-center gap-2'><Phone />
                                            (101)342-7873</a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border_top'></div>
            <p className='text color-lightgrey max-w-459 mx-auto pt-lg-4 pt-3'>© Juegos exclusivos - Todos los derechos reservados 2023</p>
        </footer>
    )
}

export default Footer