import '../Generics/Button.css'
import Button from '../Generics/Button'
import './ShowcaseSection.css'
import React from 'react'

import img_showcase from '../../assets/images/showcase-image.svg'

const ShowcaseSection = () => {
    return (
        <section className="showcase-section">
            <div className="container">
                <div className="content">
                    <h1>We Provide The Best Business Solutions</h1>
                    <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                    <Button className="btn-yellow" text="Get Consultning" url="/services/get-consulting" />
                    <Button className="btn-transparent" text="Learn More" url="/services/consulting"/>
                </div>
                <img src={img_showcase} alt="showcase image of a man in a suit with a tablet" />
            </div>
        </section>
    )
}

export default ShowcaseSection