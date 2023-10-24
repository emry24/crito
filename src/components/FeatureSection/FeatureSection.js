import React from 'react'
import './FeatureSection.css'
import BoxItem from '../Generics/BoxItem';
import SectionTitle from '../Generics/SectionTitle';
import Button from '../Generics/Button';


import icon_hands from '../../assets/images/icon-hands.svg'
import icon_lightboulb from '../../assets/images/icon-lightboulb.svg'
import icon_charts from '../../assets/images/icon-charts.svg'
import icon_engineringbox from '../../assets/images/icon-engineringbox.svg'

const FeatureSection = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="features-box">
          <SectionTitle subtitle="Features" title="Our Accounting Is Trusted By Thousand Of Companies"/>
          <div className="center-content">
          <Button className="btn-yellow" text="Learn More" url="/services/learn-more" />
          </div>
        </div>
        <div className="grid-box">
          <div className="box-item">
            <img src={icon_hands} alt="Shaking hand icon" />
            <BoxItem title="Business Advice" subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
          </div>
          <div className="box-item">
            <img src={icon_lightboulb} alt="Lightboulb icon" />
            <BoxItem title="Startup Business" subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
          </div>
          <div className="box-item">
            <img src={icon_charts} alt="Statistics icon" />
            <BoxItem title="Financial Advice" subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
          </div>
          <div className="box-item">
            <img src={icon_engineringbox} alt="Engineringbox icon" />
            <BoxItem title="Risk Management" subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
          </div>

        </div>
      </div>
    </section>

  )
}

export default FeatureSection