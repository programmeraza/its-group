import React from 'react'
import './Contact.scss'

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="container">
            <div className="contact__wrapper">
                <div className="contact__form">
                    <h1>Contact us</h1>
                    <div className="contact__inp-flex">
                        <input type="text" placeholder='Name *' />
                        <input type="tel" placeholder='Phone Number *' />
                    </div>
                    <textarea placeholder='Message'></textarea>
                    <div className="contact__check-flex">
                        <div className="contact__check">
                            <input type="checkbox" />
                            <label>By submitting this form, I confirm that I have read and accept the Privacy Policy.</label>
                        </div>
                        <button className="contact__btn">Send</button>
                    </div>
                </div>
                <img src="./antena.png" alt="antena" />
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact
