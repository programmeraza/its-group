import React, { useState } from 'react'
import './Map.scss'

const Map = () => {

    const [activeItem, setActiveItem] = useState(null);

    const handleAccordionClick = (id) => {
        setActiveItem(activeItem === id ? null : id);
    };

    return (
        <>
            <div className="map">
                <div className="container">
                    <div className="map__wrapper">
                        <h1 className="map__title">Our Global presence</h1>
                        <div className="map__boxes">
                            <div className="map__flag">
                                <div className={`map__box ${activeItem === "uae" ? "active" : ""}`}>
                                    <input
                                        type="checkbox"
                                        id="uae"
                                        checked={activeItem === "uae"}
                                        onChange={() => handleAccordionClick("uae")}
                                    />
                                    <label htmlFor="uae">
                                        <img src="/uae.svg" alt="UAE Flag" />
                                        <h2>UAE</h2>
                                    </label>
                                    <div className="map__box_text">
                                        <div className="map__info">
                                            <img src="/MapPin.svg" alt="Location" />
                                            <p>
                                                Jumeirah Lake Towers AG Silver Tower, Cluster 1 32nd
                                                Floor, Unit C PO Box: 340808 Dubai, UAE
                                            </p>
                                        </div>
                                        <div className="map__info">
                                            <img src="/gmail.svg" alt="Email" />
                                            <p>info@bbenergy.com</p>
                                        </div>
                                        <div className="map__info">
                                            <img src="/Phone.svg" alt="Phone" />
                                            <p>+998 99 123 45 67</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={`map__box ${activeItem === "tur" ? "active" : ""}`}>
                                    <input
                                        type="checkbox"
                                        id="tur"
                                        checked={activeItem === "tur"}
                                        onChange={() => handleAccordionClick("tur")}
                                    />
                                    <label htmlFor="tur">
                                        <img src="/turkey.svg" alt="Turkey Flag" />
                                        <h2>Turkey</h2>
                                    </label>
                                    <div className="map__box_text">
                                        <div className="map__info">
                                            <img src="/MapPin.svg" alt="Location" />
                                            <p>
                                                Jumeirah Lake Towers AG Silver Tower, Unit C PO Box:
                                                340808 Dubai, UAE
                                            </p>
                                        </div>
                                        <div className="map__info">
                                            <img src="/gmail.svg" alt="Email" />
                                            <p>info@bbenergy.com</p>
                                        </div>
                                        <div className="map__info">
                                            <img src="/Phone.svg" alt="Phone" />
                                            <p>+998 99 123 45 67</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={`map__box ${activeItem === "uzb" ? "active" : ""}`}>
                                    <input
                                        type="checkbox"
                                        id="uzb"
                                        checked={activeItem === "uzb"}
                                        onChange={() => handleAccordionClick("uzb")}
                                    />
                                    <label htmlFor="uzb">
                                        <img src="/uae.svg" alt="Uzbekistan Flag" />
                                        <h2>Uzbekistan</h2>
                                    </label>
                                    <div className="map__box_text">
                                        <div className="map__info">
                                            <img src="/MapPin.svg" alt="Location" />
                                            <p>
                                                Jumeirah Lake Towers AG Silver Tower, Cluster 1 32nd
                                                Floor, Unit C PO Box: 340808 Dubai, UAE
                                            </p>
                                        </div>
                                        <div className="map__info">
                                            <img src="/gmail.svg" alt="Email" />
                                            <p>info@bbenergy.com</p>
                                        </div>
                                        <div className="map__info">
                                            <img src="/Phone.svg" alt="Phone" />
                                            <p>+998 99 123 45 67</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="map__image">
                                <img src="/map.png" alt="World Map" />
                                <div className="map__cards">
                                    <div className="map__card">
                                        <h1>40+</h1>
                                        <p>Commodities</p>
                                    </div>
                                    <div className="map__card">
                                        <h1>+30</h1>
                                        <p>Countries</p>
                                    </div>
                                    <div className="map__card">
                                        <h1>+5mln</h1>
                                        <p>ton. Products traded</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Map
