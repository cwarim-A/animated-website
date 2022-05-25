import React from 'react'
import { NavLink } from 'react-router-dom'
import web from "../src/images/web3.png"

const Common = (props) => {
  return (
    <>
       <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center  flex-column">
                                    <h1 className="">{props.name} <strong className='brand-name'>LANREDEV</strong></h1>
                                    <h2 className="my-3">We are the Team of talented developer making websites</h2>
                                <div className="mt-3">
                                <NavLink to={props.visit} className="btn btn-outline-primary rounded-pill">{props.btname}</NavLink>
                            </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={props.imgsrc} className="img-fluid animated"/>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
      </section> 
    </>
  )
}

export default Common
