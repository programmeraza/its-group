import React from 'react'
import './Presence.scss'

const Presence = () => {
    return (
        <>
            <div className="presence">
                <div className="container">
                    <div className="presence__wrapper">
                        <h1 className="presence__title">Seamless supply chains</h1>
                        <div className="presence__cards">
                            <div className="presence__card">
                                <div className="presence__box">
                                    <img src="/MaskGroup.svg" alt="MaskGroup" />
                                    <h3>1</h3>
                                </div>
                                <div className="presence__texts">
                                    <h3>Source</h3>
                                    <p>
                                        We source high-quality commodities directly from trusted
                                        producers worldwide, ensuring reliability and consistency.
                                    </p>
                                </div>
                            </div>
                            <div className="presence__card">
                                <div className="presence__box">
                                    <img src="/Transport.svg" alt="Transport" />
                                    <h3>2</h3>
                                </div>
                                <div className="presence__texts">
                                    <h3>Transport</h3>
                                    <p>
                                        Our efficient logistics network manages land, sea, and rail
                                        transportation, ensuring timely and secure deliveries.
                                    </p>
                                </div>
                            </div>
                            <div className="presence__card">
                                <div className="presence__box">
                                    <img src="/Finance.svg" alt="Finance" />
                                    <h3>3</h3>
                                </div>
                                <div className="presence__texts">
                                    <h3>Finance</h3>
                                    <p>
                                        We provide tailored financial solutions to support trade
                                        flows, helping clients manage cash flow, mitigate risks, and
                                        secure competitive terms.
                                    </p>
                                </div>
                            </div>
                            <div className="presence__card">
                                <div className="presence__box">
                                    <img src="/Storage.svg" alt="Storage" />
                                    <h3>4</h3>
                                </div>
                                <div className="presence__texts">
                                    <h3>Storage</h3>
                                    <p>
                                        Our strategically located storage facilities enable safe and
                                        effective inventory management, ensuring product integrity
                                        and availability.
                                    </p>
                                </div>
                            </div>
                            <div className="presence__card">
                                <div className="presence__box">
                                    <img src="/Deliver.svg" alt="" />
                                    <h3>5</h3>
                                </div>
                                <div className="presence__texts">
                                    <h3>Deliver</h3>
                                    <p>
                                        We ensure on-time delivery of commodities worldwide through
                                        our efficient supply chain management.
                                    </p>
                                </div>
                            </div>
                            <div className="presence__card">
                                <div className="presence__box">
                                    <img src="/Insurance.svg" alt="Insurance" />
                                    <h3>6</h3>
                                </div>
                                <div className="presence__texts">
                                    <h3>Insurance</h3>
                                    <p>
                                        Our comprehensive insurance coverage minimizes risk,
                                        protecting cargo throughout the supply chain.
                                    </p>
                                </div>
                            </div>
                            <div className="presence__card">
                                <div className="presence__box">
                                    <img
                                        src="/Post-supplyServices.svg"
                                        alt="Post-supplyServices"
                                    />
                                    <h3>7</h3>
                                </div>
                                <div className="presence__texts">
                                    <h3>Post-supply Services</h3>
                                    <p>
                                        We provide ongoing support, including quality checks,
                                        technical consultation, and logistics optimization to ensure
                                        customer satisfaction.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Presence
