import React from 'react';
import './OurServices.css';
import ServiceBox from '../Generics/ServiceBox'



const OurServices = () => {
  return (
    <section className="our-services">
        <img className="element-services" src="images/element-services.svg" alt="" />
            <div className="container">
                <div className="section-title">
                    <p>Our Services</p>
                    <h2>We Provide The Best Service For Consulting</h2>
                </div>
                <div className="box-section">

                    <ServiceBox title="Business Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/businessadvice"/>
                    <ServiceBox title="Startup Business" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/startupbusiness"/>
                    <ServiceBox title="Financial Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/financialadvice"/>
                    <ServiceBox title="Risk Management" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/riskmanagement"/>
                    
                </div>
                <div className="center-content">
                    <a className="btn-transparent" href="services.html">Browse Services<i
                            className="fa-regular fa-arrow-up-right"></i></a>
                </div>
            </div>
        </section>
  )
}

export default OurServices