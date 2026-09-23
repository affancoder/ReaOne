import { useState } from "react";

import "../CSS/home.css";
import "../CSS/navbar.css";

import logo from "../assets/images/logo.png";
import heroBg from "../assets/images/hero-bg.webp";
import blacktypex from "../assets/images/black-typeX.webp";
import microinverter from "../assets/images/microinverter.webp";
import battery1 from "../assets/images/battery-powerbankX.webp";
import battery2 from "../assets/images/battery-2.webp";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobilePage, setMobilePage] = useState("main");

  const openMenu = () => {
    setMenuOpen(true);
    setMobilePage("main");
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setMobilePage("main");
  };

  const goBack = () => {
    setMobilePage("main");
  };

  return (
    <main className="home">

      {/* Announcement Bar */}
      <div className="announcement-bar">
        <p>
          Claim your battery rebate through the Cheaper Home Batteries Program
        </p>

        <button type="button">
          Learn more
        </button>
      </div>


      {/* Navigation */}
      <header className="navbar">

        {/* Logo */}
        <a href="/" className="navbar-logo">
          <img src={logo} alt="REA One" />
        </a>


        {/* Desktop Navigation */}
        <nav className="navbar-links">

          {/* Solar Panels */}
          <div className="nav-item nav-dropdown">
            <span>Solar Panels</span>

            <div className="dropdown-menu">

              <div className="dropdown-products">

                <div className="dropdown-product">
                  <img
                    src={blacktypex}
                    alt="Type X solar panel"
                  />

                  <h3>Type X</h3>

                  <a href="#learn-more">
                    Learn More
                  </a>
                </div>

                <div className="dropdown-product">
                  <img
                    src={microinverter}
                    alt="Microinverters"
                  />

                  <h3>Microinverters</h3>

                  <a href="#learn-more">
                    Learn More
                  </a>
                </div>

              </div>

              <div className="dropdown-links">

                <a href="#why-solar">
                  Why Solar
                </a>

                <a href="#residential">
                  Residential Solar
                </a>

                <a href="#commercial">
                  Commercial Solar
                </a>

                <a href="#battery">
                  Add-on Battery
                </a>

              </div>

            </div>
          </div>


          {/* Battery Storage */}
          <div className="nav-item nav-dropdown">
            <span>Battery Storage</span>

            <div className="dropdown-menu">

              <div className="dropdown-products">

                <div className="dropdown-product">
                  <img
                    src={battery1}
                    alt="POWERBANK X"
                  />

                  <h3>POWERBANK X</h3>

                  <a href="#learn-more">
                    Learn More
                  </a>
                </div>

                <div className="dropdown-product">
                  <img
                    src={battery2}
                    alt="POWERBANK 10"
                  />

                  <h3>POWERBANK 10</h3>

                  <a href="#learn-more">
                    Learn More
                  </a>
                </div>

                <div className="dropdown-product">
                  <img
                    src={battery2}
                    alt="Other Batteries"
                  />

                  <h3>Other Batteries</h3>

                  <a href="#learn-more">
                    Learn More
                  </a>
                </div>

              </div>

              <div className="dropdown-links">

                <a href="#why-solar">
                  Why Solar and Battery
                </a>

                <a href="#cheaper">
                  Cheaper Home Batteries Program
                </a>

              </div>

            </div>
          </div>


          {/* Ecosystem */}
          <div className="nav-item nav-dropdown">
            <span>Ecosystem</span>

            <div className="dropdown-menu dropdown-menu-simple">

              <div className="dropdown-simple-links">

                <a href="#smart-monitoring">
                  Smart Monitoring
                </a>

                <a href="#ev-charging">
                  EV Charging
                </a>

                <a href="#hot-water">
                  Hot Water
                </a>

              </div>

            </div>
          </div>


          {/* Discover */}
          <div className="nav-item nav-dropdown">
            <span>Discover</span>

            <div className="dropdown-menu dropdown-menu-simple">

              <div className="dropdown-simple-links">

                <a href="#about">
                  About Us
                </a>

                <a href="#blogs">
                  Blogs
                </a>

                <a href="#referral">
                  Referral Program
                </a>

                <a href="#customer-stories">
                  Customer Stories
                </a>

                <a href="#rea-impacts">
                  REA Impacts
                </a>

              </div>

            </div>
          </div>


          {/* Support */}
          <div className="nav-item nav-dropdown">
            <span>Support</span>

            <div className="dropdown-menu dropdown-menu-simple">

              <div className="dropdown-simple-links">

                <a href="#support">
                  Support
                </a>

                <a href="#faqs">
                  FAQs
                </a>

                <a href="#service-ticket">
                  My Service Ticket
                </a>

              </div>

            </div>
          </div>

        </nav>


        {/* Desktop Actions */}
        <div className="navbar-actions">

          <button type="button" aria-label="Help">
            ?
          </button>

          <button type="button" aria-label="Phone">
            ◔
          </button>

          <button type="button" aria-label="Contact">
            ○
          </button>

        </div>


        {/* Mobile Hamburger */}
        <button
          type="button"
          className="mobile-menu-button"
          onClick={openMenu}
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>


        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

          {/* Main Mobile Menu */}
          <div
            className={`mobile-menu-page mobile-main-page ${
              mobilePage === "main" ? "active" : ""
            }`}
          >

            <div className="mobile-menu-header">

              <img src={logo} alt="REA One" />

              <button
                type="button"
                className="mobile-menu-close"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                ×
              </button>

            </div>


            <nav className="mobile-main-links">

              <button
                type="button"
                onClick={() => setMobilePage("solar")}
              >
                <span>Solar Panels</span>
                <span>›</span>
              </button>

              <button
                type="button"
                onClick={() => setMobilePage("battery")}
              >
                <span>Battery Storage</span>
                <span>›</span>
              </button>

              <button
                type="button"
                onClick={() => setMobilePage("ecosystem")}
              >
                <span>Ecosystem</span>
                <span>›</span>
              </button>

              <button
                type="button"
                onClick={() => setMobilePage("discover")}
              >
                <span>Discover</span>
                <span>›</span>
              </button>

              <button
                type="button"
                onClick={() => setMobilePage("support")}
              >
                <span>Support</span>
                <span>›</span>
              </button>

            </nav>


            <div className="mobile-menu-actions">

              <button type="button" aria-label="Help">
                ?
              </button>

              <button type="button" aria-label="Phone">
                ◔
              </button>

              <button type="button" aria-label="Contact">
                ○
              </button>

            </div>

          </div>


          {/* Solar Panels Inner Page */}
          <div
            className={`mobile-menu-page mobile-inner-page ${
              mobilePage === "solar" ? "active" : ""
            }`}
          >

            <div className="mobile-inner-header">

              <button
                type="button"
                className="mobile-back-button"
                onClick={goBack}
                aria-label="Back"
              >
                ←
              </button>

              <h2>Solar Panels</h2>

              <button
                type="button"
                className="mobile-menu-close"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                ×
              </button>

            </div>


            <div className="mobile-product-grid">

              <div className="mobile-product-card">
                <img
                  src={blacktypex}
                  alt="Type X solar panel"
                />

                <h3>Type X</h3>

                <a href="#learn-more" onClick={closeMenu}>
                  Learn More
                </a>
              </div>

              <div className="mobile-product-card">
                <img
                  src={microinverter}
                  alt="Microinverters"
                />

                <h3>Microinverters</h3>

                <a href="#learn-more" onClick={closeMenu}>
                  Learn More
                </a>
              </div>

            </div>


            <div className="mobile-inner-links">

              <a href="#why-solar" onClick={closeMenu}>
                Why Solar
              </a>

              <a href="#residential" onClick={closeMenu}>
                Residential Solar
              </a>

              <a href="#commercial" onClick={closeMenu}>
                Commercial Solar
              </a>

              <a href="#battery" onClick={closeMenu}>
                Add-on Battery
              </a>

            </div>

          </div>


          {/* Battery Storage Inner Page */}
          <div
            className={`mobile-menu-page mobile-inner-page ${
              mobilePage === "battery" ? "active" : ""
            }`}
          >

            <div className="mobile-inner-header">

              <button
                type="button"
                className="mobile-back-button"
                onClick={goBack}
                aria-label="Back"
              >
                ←
              </button>

              <h2>Battery Storage</h2>

              <button
                type="button"
                className="mobile-menu-close"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                ×
              </button>

            </div>


            <div className="mobile-product-grid">

              <div className="mobile-product-card">
                <img
                  src={battery1}
                  alt="POWERBANK X"
                />

                <h3>POWERBANK X</h3>

                <a href="#learn-more" onClick={closeMenu}>
                  Learn More
                </a>
              </div>

              <div className="mobile-product-card">
                <img
                  src={battery2}
                  alt="POWERBANK 10"
                />

                <h3>POWERBANK 10</h3>

                <a href="#learn-more" onClick={closeMenu}>
                  Learn More
                </a>
              </div>

              <div className="mobile-product-card">
                <img
                  src={battery2}
                  alt="Other Batteries"
                />

                <h3>Other Batteries</h3>

                <a href="#learn-more" onClick={closeMenu}>
                  Learn More
                </a>
              </div>

            </div>


            <div className="mobile-inner-links">

              <a href="#why-solar" onClick={closeMenu}>
                Why Solar and Battery
              </a>

              <a href="#cheaper" onClick={closeMenu}>
                Cheaper Home Batteries Program
              </a>

            </div>

          </div>


          {/* Ecosystem Inner Page */}
          <div
            className={`mobile-menu-page mobile-inner-page ${
              mobilePage === "ecosystem" ? "active" : ""
            }`}
          >

            <div className="mobile-inner-header">

              <button
                type="button"
                className="mobile-back-button"
                onClick={goBack}
                aria-label="Back"
              >
                ←
              </button>

              <h2>Ecosystem</h2>

              <button
                type="button"
                className="mobile-menu-close"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                ×
              </button>

            </div>


            <div className="mobile-inner-links">

              <a href="#smart-monitoring" onClick={closeMenu}>
                Smart Monitoring
              </a>

              <a href="#ev-charging" onClick={closeMenu}>
                EV Charging
              </a>

              <a href="#hot-water" onClick={closeMenu}>
                Hot Water
              </a>

            </div>

          </div>


          {/* Discover Inner Page */}
          <div
            className={`mobile-menu-page mobile-inner-page ${
              mobilePage === "discover" ? "active" : ""
            }`}
          >

            <div className="mobile-inner-header">

              <button
                type="button"
                className="mobile-back-button"
                onClick={goBack}
                aria-label="Back"
              >
                ←
              </button>

              <h2>Discover</h2>

              <button
                type="button"
                className="mobile-menu-close"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                ×
              </button>

            </div>


            <div className="mobile-inner-links">

              <a href="#about" onClick={closeMenu}>
                About Us
              </a>

              <a href="#blogs" onClick={closeMenu}>
                Blogs
              </a>

              <a href="#referral" onClick={closeMenu}>
                Referral Program
              </a>

              <a href="#customer-stories" onClick={closeMenu}>
                Customer Stories
              </a>

              <a href="#rea-impacts" onClick={closeMenu}>
                REA Impacts
              </a>

            </div>

          </div>


          {/* Support Inner Page */}
          <div
            className={`mobile-menu-page mobile-inner-page ${
              mobilePage === "support" ? "active" : ""
            }`}
          >

            <div className="mobile-inner-header">

              <button
                type="button"
                className="mobile-back-button"
                onClick={goBack}
                aria-label="Back"
              >
                ←
              </button>

              <h2>Support</h2>

              <button
                type="button"
                className="mobile-menu-close"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                ×
              </button>

            </div>


            <div className="mobile-inner-links">

              <a href="#support" onClick={closeMenu}>
                Support
              </a>

              <a href="#faqs" onClick={closeMenu}>
                FAQs
              </a>

              <a href="#service-ticket" onClick={closeMenu}>
                My Service Ticket
              </a>

            </div>

          </div>

        </div>

      </header>


      {/* Hero */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <p className="hero-label">
            REA ONE
          </p>

          <h1>
            One System. True Energy Independence.
          </h1>

          <div className="hero-actions">

            <a
              href="#quote"
              className="hero-button"
            >
              Get Quote
            </a>

            <a
              href="#how-it-works"
              className="hero-button"
            >
              See How it Works
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;