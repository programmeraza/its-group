import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer__container">
                    <div className="footer__wrapper">
                        <div className="footer__text-flex">
                            <div className="footer__logo-flex">
                                <img src="./logo-big.png" alt="" />
                                <div className="footer__logo-icon">
                                    <p>Social network</p>
                                    <div className="footer__icon">
                                        <img src="./Telegram.svg" alt="" />
                                        <img src="./Linkedin.svg" alt="" />
                                        <img src="./Instagram.svg" alt="" />
                                        <img src="./Facebook.svg" alt="" />
                                        <img src="./mail.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="footer__ul-flex">
                                <ul className="footer__ul">
                                    <h3>All pages</h3>
                                    <Link>Home</Link>
                                    <Link>About Us</Link>
                                    <Link>Production</Link>
                                    <Link>Contacts</Link>
                                </ul>
                                <ul className="footer__ul">
                                    <h3>Our products</h3>
                                    <Link>Metals and minerals</Link>
                                    <Link>Base metals</Link>
                                    <Link>Bulk commodities</Link>
                                    <Link>Semi products</Link>
                                    <Link>Final products</Link>
                                </ul>
                                <div className="footer__title-flex">
                                    <div className="footer__title">
                                        <p>Магазин адрес</p>
                                        <h4>Tashkent Ring Automobile Road, Tashkent, Toshkent Shahri, Uzbekistan</h4>
                                    </div>
                                    <div className="footer__title">
                                        <p>Офис адрес</p>
                                        <h4>Tashkent Ring Automobile Road, Tashkent, Toshkent Shahri, Uzbekistan</h4>
                                    </div>
                                    <div className="footer__title">
                                        <p>Электронная почта</p>
                                        <h4>itsgroup@gmail.ru</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer__bottom">
                            <p>Copyright © 2025 ITS Group</p>
                            <p>Designed by <span>NDC</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
