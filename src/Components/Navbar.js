import React from 'react'
import mainimg from '../imgs/Maincard.png'
import mens from '../imgs/mens.png'
import cosmetic from '../imgs/cosmetics.png'
import kids from '../imgs/kids.png'
import acces from '../imgs/accessories.png'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" >A-Fashion</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page">Home</a>
                            <a className="nav-link" >Contact</a>
                            <a className="nav-link" >Pricing</a>
                            <a className="nav-link disabled">Support</a>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="row">
                <div className="col-6 d-flex" style={{ backgroundColor: '#FAE3D8' }}>
                    <div className='align-self-center text-center'>
                        <h1>Women's Collection</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus itaque unde deleniti.</p>
                        <a >shop now</a>
                    </div>
                    <img src={mainimg} alt="" />
                </div>
                <div className="col-6 ">
                    <div className="container">
                        <div className="row">
                            <div className="col  d-flex" style={{backgroundColor:'#BCE3D6'}}>
                                <div className='align-self-center text-center'>
                                    <h1>Men's</h1>
                                    <p>best of Collection</p>
                                </div>
                                <img src={mens} alt="" height={250}/>
                            </div>
                            <div className="col d-flex" style={{backgroundColor:'#D8D3F1'}}>
                            <div className='align-self-center text-center'>
                                    <h1>fashion</h1>
                                    <p>best of Collection</p>
                                </div>
                                <img src={cosmetic} alt="" height={250}/>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col d-flex" style={{backgroundColor:'#FCDBE6'}}>
                            <div className='align-self-center text-center'>
                                    <h1>Kids</h1>
                                    <p>best of Collection</p>
                                </div>
                                <img src={kids} alt="" height={250}/>
                            </div>
                            <div className="col  d-flex" style={{backgroundColor:'#CEE1F5'}}>
                                <div className='align-self-center text-center'>
                                    <h1>Accessory</h1>
                                    <p>best of Collection</p>
                                </div>
                                <img src={acces} alt="" height={250}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar
