import React from 'react'
import ImagePlatinum from '../assets/png/platinum-img.png'
import { BtnsvgWhite } from './Icons'
import PlatinumEllips from '../assets/png/platinum-ellips.png'
import PlatinumEllips2 from '../assets/png/platinum-ellips-2.png'
// import

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
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.456 7.45506C13.6673 7.2539 13.9485 7.14268 14.2402 7.14489C14.5319 7.1471 14.8114 7.26256 15.0196 7.4669C15.2279 7.67124 15.3486 7.94848 15.3563 8.24013C15.364 8.53177 15.2581 8.81501 15.061 9.03006L9.07597 16.5151C8.97305 16.6259 8.84885 16.7149 8.71077 16.7766C8.57269 16.8384 8.42357 16.8716 8.27235 16.8744C8.12112 16.8772 7.97087 16.8495 7.8306 16.7929C7.69033 16.7363 7.56292 16.652 7.45597 16.5451L3.48697 12.5761C3.37644 12.4731 3.28779 12.3489 3.2263 12.2109C3.16481 12.0729 3.13175 11.9239 3.12908 11.7728C3.12642 11.6218 3.1542 11.4718 3.21078 11.3317C3.26737 11.1916 3.35158 11.0643 3.45841 10.9575C3.56524 10.8507 3.69249 10.7665 3.83257 10.7099C3.97265 10.6533 4.1227 10.6255 4.27375 10.6282C4.42481 10.6308 4.57378 10.6639 4.71178 10.7254C4.84977 10.7869 4.97398 10.8755 5.07697 10.9861L8.21797 14.1256L13.426 7.48806C13.4353 7.47648 13.4453 7.46546 13.456 7.45506ZM12.076 15.1651L13.456 16.5451C13.5629 16.6518 13.6902 16.7359 13.8303 16.7923C13.9705 16.8488 14.1205 16.8765 14.2716 16.8737C14.4226 16.8709 14.5716 16.8377 14.7095 16.7761C14.8475 16.7144 14.9716 16.6257 15.0745 16.5151L21.0625 9.03006C21.17 8.92387 21.2551 8.79708 21.3126 8.65728C21.3701 8.51748 21.3988 8.36752 21.397 8.21638C21.3952 8.06523 21.363 7.91599 21.3023 7.77756C21.2416 7.63914 21.1536 7.51437 21.0436 7.41071C20.9336 7.30705 20.8038 7.22662 20.662 7.17423C20.5202 7.12184 20.3693 7.09856 20.2183 7.10578C20.0674 7.113 19.9194 7.15057 19.7832 7.21625C19.6471 7.28193 19.5256 7.37438 19.426 7.48806L14.2165 14.1256L13.489 13.3966L12.0745 15.1651H12.076Z" fill="url(#paint0_linear_286_22309)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_286_22309" x1="26.4852" y1="16.3828" x2="14.0628" y2="-1.11632" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#51C8EF" />
                                            <stop offset="1" stop-color="#7AF57A" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <p className='text color-lightWhite mb-0 '>Personalizable </p>
                            </div>

                            <div className='position-relative mt-40 mb-4 btnn_hover cursor-pointer'>
                                <button className='btnn btn-style color-white text-nowrap'>Comprar ahora</button>
                                <div className='btn-svg '>
                                    <BtnsvgWhite />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 py-78">
                            <img className='w-100' src={ImagePlatinum} alt="platinum-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Platinum