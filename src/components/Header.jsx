import React from 'react'
import ImageHead from '../assets/png/nav-img.png'
import { BtnSVG } from './Icons'
import { BtnsvgWhite } from './Icons'

function Header() {
    // function showNav() {
    //     document.body.classList.toggle('overFlowHidden')
    // onClick = { showNav() }
    // }
    // const menuIcon = document.getElementById("menuIcon");
    // console.log(menuIcon)
    // menuIcon.addEventListener("click", function () {
    //     document.body.classList.toggle("overFlowHidden")
    // })
    return (
        <header className='bg-img  min-vh-100 d-flex flex-column'>
            <div className='nav-bg py-24 w-100'>
                <div className='container'>
                    <nav className='d-flex align-items-center justify-content-between  navbar-hide- on-scroll fixed -top'>
                        <a href=""><img src={ImageHead} alt="nav-img" /></a>
                        <label for='menuIcon' className='d-lg-none d-flex'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                        {/* <label className='menuIcon d-lg-none d-flex'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </label> */}
                        <input type='checkbox' id='menuIcon' hidden />
                        <ul className='d-flex gap-28 mb-0 menuList ps-0'>
                            <li><a href="" className='link color-white position-relative underline'>Hogar</a></li>
                            <li><a href="#Mission" className='link color-white position-relative underline'>Misión</a></li>
                            <li><a href="" className='link color-white position-relative underline'>Tragamonedas</a></li>
                            <li><a href="#por-que" className='link color-white text-nowrap position-relative underline'>Por qué elegirnos</a></li>
                            <li><a href="#ofertas" className='link color-white position-relative underline'>Ofertas</a></li>
                            <li className='d-lg-none d-block'><button className='btnn btn-style color-white '>Acceso</button></li>
                        </ul>
                        <div className='position-relative d-lg-block d-none nav-btn-hover cursor-pointer'>
                            <button className='btnn btn-style color-white nav-btn-hover'>Acceso</button>
                            <div className='btn-svg '>
                                <BtnsvgWhite />
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <div className='flex-grow d-flex align-items-center'>
                <div className="container">
                    <h1 className='main-heading color-white max-w-505 text-center mx-auto '>Exclusive Games. Pasión por ganar</h1>
                    <p className='text color-lightWhite max-w-727 mx-auto text-center pb-4'>En Exclusive Games somos un equipo apasionado de personas dedicados al desarrollo de multiplataformas para juegos de azar. A lo largo de nuestra vida consumimos todo tipo de juegos hasta que un día decidimos crear los propios.</p>
                    <div className='position-relative max-w-162 mx-auto btnn-hover cursor-pointer'>
                        <button className='btnn btn1-style color-black'>Empezar</button>
                        <span className='btn-svg'>
                            <BtnSVG />
                        </span>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header