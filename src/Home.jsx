import React from 'react'
import { NavLink } from 'react-router-dom'
import web from "../src/images/web3.png"
import Common from './Common'

const Home = () => {
  return (
    <>
     <Common
      name="Grow your Business with" 
      imgsrc={web}
      visit="/services" 
      btname="Get Started"

     />
        
      {/* <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center  flex-column">
                                    <h1 className="">Grow Your Business with <strong className='brand-name'>LANREDEV</strong></h1>
                                    <h2 className="my-3">We are the Team of talented developer making websites</h2>
                                <div className="mt-3">
                                <NavLink to="/services" className="btn btn-outline-primary rounded-pill">Get Started</NavLink>
                            </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={web} className="img-fluid animated"/>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
      </section> */}
    </>
  )
}

export default Home
