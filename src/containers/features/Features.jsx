import React from 'react'
import { Feature } from '../../components'
import './features.css'

const featuresData = [
  {
    title:'Software Development ',
    text:'We design, develop and deploy top notch softwares for our clients on all platform to put their business ahead of their competitors eg finance softwares, ecommerce softwares and general business softwares.'
  },
  {
    title:'Mobile App Development',
    text:'Make your business outstanding with our customized mobile app for ecommerce, social networking, finance, games and industrial softwares to put your business in limelight.'
  },
  {
    title:'Website Development',
    text:'The world is a global village and we make you connect your business to the world with a dynamic and responsive website customized solely to put your business in the forefront.'
  },
  {
    title:'Solar and CCTV Installation',
    text:'Our hardware engineers are professionals in the installation, setup and configuration of Solar power and CCTV cameras for your businss, homes, churches, schools etc.'
  }
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
        <div className='gpt3__features-heading'>
            <h1 className='gradient__text'>
            The Future is Now. Step into Future Today & Make it Happen with Our Awesome IT Services.
            </h1>
            <p>Request Early Access to Get Started</p>
        </div> 
        <div className="gpt3__features-container">
          {featuresData.map((item, index) => (
            <Feature title={item.title} text={item.text} key={item.index} />
          )

          )}
        </div>
    </div>
  )
}

export default Features