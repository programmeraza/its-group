import React from 'react'
import './About.scss'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <div className="about">
        <div className="container">
            <div className="about__wrapper">
                <div className="about__content">
                    <h1>About us</h1>
                    <p>We are international trading company focusing in supply of metallurgy, oil&gas, and agriculture products. With a strong presence across Europe, Asia, Africa, and the Middle East, we connect producers with global markets, through integrated solutions that combine sourcing, logistics, storage, and finance. This seamless approach ensures efficient, transparent, and reliable supply chains, delivering value at every stage of the process.</p>
                    <Link>
                        <p>View more</p>
                        <img src="./arrow.svg" alt="arrow" />
                    </Link>
                </div>
                <img src="./kanyon.png" alt="kanyon" />
            </div>
        </div>
      </div>
    </>
  )
}

export default About
