import React, { useState, useEffect } from "react";
import "./Header.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";

const cards = [
  "Metalls and minerals",
  "Oil and Gas",
  "Agriculture",
  "Logistics and Storage",
];

const menuLinks = [
  "Metals and minerals",
  "Oil & Gas",
  "Agriculture",
  "Logistics and Storage",
  "Who We Are",
  "ESG",
  "Vacancies",
  "Contacts",
];

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("lock");
    } else {
      document.body.classList.remove("lock");
    }
  }, [menuOpen]);

  const handleMenuLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="header">
      <video autoPlay loop muted playsInline className="header__bg">
        <source src="/public/Logistics-Intro-Video.mp4" type="video/mp4" />
      </video>

      <div className={`header__menu ${menuOpen ? "open" : ""}`}>
        <div className="header__menu-content">
          <div className="header__menu-line-flex">
            <div className="header__line-flex"></div>
            <h1>What We Do</h1>
          </div>
          <ol className="header__links1">
            {menuLinks.slice(0, 4).map((text, idx) => (
              <Link key={idx} onClick={handleMenuLinkClick}>
                {text}
              </Link>
            ))}
          </ol>
          <ul className="header__links2">
            {menuLinks.slice(4).map((text, idx) => (
              <Link key={idx} onClick={handleMenuLinkClick}>
                {text}
              </Link>
            ))}
          </ul>
        </div>
        <div className="header__menu-img">
          <img src="./vishka.png" alt="vishka" />
          <button className="header__menu-close" onClick={() => setMenuOpen(false)}>
            <MdCancel />
          </button>
        </div>
      </div>

      <div className="container">
        <div className="header__wrapper">
          <div className="header__top">
            <img src="./logo.png" alt="logo" />
            <button className="header__burger" onClick={() => setMenuOpen((prev) => !prev)}>
              <AiOutlineMenu />
            </button>
          </div>

          <div className="header__bottom">
            <h1>Fueling Industry, Forging the Future</h1>
            <div className="header__cards">
              {cards.map((title, index) => (
                <Link
                  key={index}
                  className={`header__card ${activeIndex === index ? "active" : ""}`}
                >
                  <h2>{title}</h2>
                  {activeIndex === index && <span className="line"></span>}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
