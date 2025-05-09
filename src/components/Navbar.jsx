import React from 'react'
import Logo from '../assets/img/logos/logo.svg'
function Nav() {
    return (

        <nav class="navbar navbar-expand-md fixed-top" id="navbar" data-navbar-soft-on-scroll="data-navbar-soft-on-scroll">
            <div className="container-fluid px-0"><a href="/"><img className="navbar-brand w-75 d-md-none" src={Logo} alt="logo" /></a><a className="navbar-brand fw-bold d-none d-md-block" href="/">Brainwave.io</a><a className="btn btn-primary btn-sm ms-md-x1 mt-lg-0 order-md-1 ms-auto" href="#">Get Started Now </a><button className="navbar-toggler border-0 pe-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse justify-content-md-end" id="navbar-content" data-navbar-collapse="data-navbar-collapse">
                    <ul className="navbar-nav gap-md-2 gap-lg-3 pt-x1 pb-1 pt-md-0 pb-md-0" data-navbar-nav="data-navbar-nav">
                        <li className="nav-item"> <a className="nav-link lh-xl" href="#home">Home</a></li>
                        <li className="nav-item"> <a className="nav-link lh-xl" href="#about">About us</a></li>
                        <li className="nav-item"> <a className="nav-link lh-xl" href="#service">Support</a></li>
                        <li className="nav-item"> <a className="nav-link lh-xl" href="#pricing">Pricing</a></li>
                        <li className="nav-item"> <a className="nav-link lh-xl" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Nav