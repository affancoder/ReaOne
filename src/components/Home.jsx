import { useEffect, useState } from "react";

import "../CSS/home.css";
import "../CSS/navbar.css";
import "../CSS/footer.css";
import Footer from "./Footer";

import logo from "../assets/images/logo.png";
import WhiteBgLogo from "../assets/images/whitebg-logo.png";

import heroBg from "../assets/images/hero-bg.webp";
import heroBg2 from "../assets/images/hero-bg2.webp";

import secondaryBg1 from "../assets/images/seconday-bg.jpg";
import secondaryBg2 from "../assets/images/seconday-bg2.webp";

import f1 from "../assets/images/f1.webp";
import blacktypex from "../assets/images/black-typeX.webp";
import typeX from "../assets/images/typeX.webp";
import monitoring from "../assets/images/monitoring.webp";
import PowerBankX from "../assets/images/powerbankX.webp";
import microinverter from "../assets/images/microinverter.webp";
import battery1 from "../assets/images/battery-powerbankX.webp";
import battery2 from "../assets/images/battery-2.webp";
import electric from "../assets/images/electric.mp4";
import call from "../assets/images/call.png";

import partner1 from "../assets/images/partner1.webp";
import partner2 from "../assets/images/partner2.webp";
import partner3 from "../assets/images/partner3.webp";
import partner4 from "../assets/images/partner4.webp";
import partner5 from "../assets/images/partner5.webp";
import partner6 from "../assets/images/partner6.webp";

import { Phone, Squircle } from "lucide-react";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobilePage, setMobilePage] = useState("main");
  const [scrolled, setScrolled] = useState(false);

  // =========================
  // HERO SLIDER
  // =========================

  const heroImages = [heroBg, heroBg2];

  const [heroSlide, setHeroSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // =========================
  // MOBILE MENU
  // =========================

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

  // =========================
  // NAVBAR SCROLL
  // =========================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =========================
  // PRODUCT SLIDER
  // =========================

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  return (
    <main className="home">
      {/* =========================
          ANNOUNCEMENT BAR
      ========================= */}

      <div className="announcement-bar">
        <p>
          Claim your battery rebate through the Cheaper Home Batteries Program.
          <span className="responsive-btn">Learn more</span>
        </p>

        <button type="button" className="desktop-btn">
          Learn more
        </button>
      </div>

      {/* =========================
          NAVIGATION
      ========================= */}

      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        {/* Logo */}

        <a href="/" className="navbar-logo">
          <img src={logo} alt="REA One" className="navbar-logo-default" />

          <img src={WhiteBgLogo} alt="REA One" className="navbar-logo-white" />
        </a>

        {/* Desktop Navigation */}

        <nav className="navbar-links">
          {/* Solar Panels */}

          <div className="nav-item nav-dropdown">
            <span>Solar Panels</span>

            <div className="dropdown-menu">
              <div className="dropdown-products">
                <div className="dropdown-product">
                  <img src={blacktypex} alt="Type X solar panel" />

                  <h3>Type X</h3>

                  <a href="#learn-more">Learn More</a>
                </div>

                <div className="dropdown-product">
                  <img src={microinverter} alt="Microinverters" />

                  <h3>Microinverters</h3>

                  <a href="#learn-more">Learn More</a>
                </div>
              </div>

              <div className="dropdown-links">
                <a href="#why-solar">Why Solar</a>

                <a href="#residential">Residential Solar</a>

                <a href="#commercial">Commercial Solar</a>

                <a href="#battery">Add-on Battery</a>
              </div>
            </div>
          </div>

          {/* Battery Storage */}

          <div className="nav-item nav-dropdown">
            <span>Battery Storage</span>

            <div className="dropdown-menu">
              <div className="dropdown-products">
                <div className="dropdown-product">
                  <img src={battery1} alt="POWERBANK X" />

                  <h3>POWERBANK X</h3>

                  <a href="#learn-more">Learn More</a>
                </div>

                <div className="dropdown-product">
                  <img src={battery2} alt="POWERBANK 10" />

                  <h3>POWERBANK 10</h3>

                  <a href="#learn-more">Learn More</a>
                </div>

                <div className="dropdown-product">
                  <img src={battery2} alt="Other Batteries" />

                  <h3>Other Batteries</h3>

                  <a href="#learn-more">Learn More</a>
                </div>
              </div>

              <div className="dropdown-links">
                <a href="#why-solar">Why Solar and Battery</a>

                <a href="#cheaper">Cheaper Home Batteries Program</a>
              </div>
            </div>
          </div>

          {/* Ecosystem */}

          <div className="nav-item nav-dropdown">
            <span>Ecosystem</span>

            <div className="dropdown-menu dropdown-menu-simple">
              <div className="dropdown-simple-links">
                <a href="#smart-monitoring">Smart Monitoring</a>

                <a href="#ev-charging">EV Charging</a>

                <a href="#hot-water">Hot Water</a>
              </div>
            </div>
          </div>

          {/* Discover */}

          <div className="nav-item nav-dropdown">
            <span>Discover</span>

            <div className="dropdown-menu dropdown-menu-simple">
              <div className="dropdown-simple-links">
                <a href="#about">About Us</a>

                <a href="#blogs">Blogs</a>

                <a href="#referral">Referral Program</a>

                <a href="#customer-stories">Customer Stories</a>

                <a href="#rea-impacts">REA Impacts</a>
              </div>
            </div>
          </div>

          {/* Support */}

          <div className="nav-item nav-dropdown">
            <span>Support</span>

            <div className="dropdown-menu dropdown-menu-simple">
              <div className="dropdown-simple-links">
                <a href="#support">Support</a>

                <a href="#faqs">FAQs</a>

                <a href="#service-ticket">My Service Ticket</a>
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
            <Phone size={17} strokeWidth={1.7} />
          </button>

          <button type="button" aria-label="Contact">
            <Squircle size={17} strokeWidth={1.7} />
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

        {/* =========================
            MOBILE MENU
        ========================= */}

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
              <button type="button" onClick={() => setMobilePage("solar")}>
                <span>
                  <img src={call} width={16} alt="" />
                  &nbsp;1300 360 047
                </span>

                <span></span>
              </button>

              <button type="button" onClick={() => setMobilePage("solar")}>
                <span>Solar Panels</span>
                <span>›</span>
              </button>

              <button type="button" onClick={() => setMobilePage("battery")}>
                <span>Battery Storage</span>
                <span>›</span>
              </button>

              <button type="button" onClick={() => setMobilePage("ecosystem")}>
                <span>Ecosystem</span>
                <span>›</span>
              </button>

              <button type="button" onClick={() => setMobilePage("discover")}>
                <span>Discover</span>
                <span>›</span>
              </button>

              <button type="button" onClick={() => setMobilePage("support")}>
                <span>Support</span>
                <span>›</span>
              </button>
            </nav>
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
                <img src={blacktypex} alt="Type X solar panel" />

                <h3>Type X</h3>

                <a href="#learn-more" onClick={closeMenu}>
                  Learn More
                </a>
              </div>

              <div className="mobile-product-card">
                <img src={microinverter} alt="Microinverters" />

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
                <img src={battery1} alt="POWERBANK X" />

                <h3>POWERBANK X</h3>

                <a href="#learn-more" onClick={closeMenu}>
                  Learn More
                </a>
              </div>

              <div className="mobile-product-card">
                <img src={battery2} alt="POWERBANK 10" />

                <h3>POWERBANK 10</h3>

                <a href="#learn-more" onClick={closeMenu}>
                  Learn More
                </a>
              </div>

              <div className="mobile-product-card">
                <img src={battery2} alt="Other Batteries" />

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

      {/* =========================
          HERO SLIDER
      ========================= */}

      <section
        className="hero"
        style={{
          backgroundImage: `url(${heroImages[heroSlide]})`,
        }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="hero-label">REA ONE</p>

          <h1>One System. True Energy Independence.</h1>

          <div className="hero-actions">
            <a href="#quote" className="hero-button">
              Get Quote
            </a>

            <a href="#how-it-works" className="hero-button">
              See How it Works
            </a>
          </div>
        </div>
      </section>

      {/* =========================
          COMPANY STATISTICS
      ========================= */}

      <section className="stats-section">
        <div className="stat-item">
          <strong>12,488</strong>
          <span>INSTALLS IN AUSTRALIA</span>
        </div>

        <div className="stat-item">
          <strong>38</strong>
          <span>IN-HOUSE INSTALLERS</span>
        </div>

        <div className="stat-item">
          <strong>34</strong>
          <span>YEARS EXPERIENCE</span>
        </div>

        <div className="stat-item">
          <strong>25</strong>
          <span>YEARS WARRANTY</span>
        </div>
      </section>

      {/* Energy Solution */}

      <section
        className="hero"
        style={{
          backgroundImage: `url(${[secondaryBg1, secondaryBg2][heroSlide]})`,
        }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">

          <h1>Everything You Need. In ONE Solution</h1>
          <p className="energy-content">Transform your energy future with a complete solar and battery solution.</p>
          <p className="energy-content2">REA One brings solar and battery together as a single, intelligent ecosystem. One system that learns your patterns. One solution that stores what you need. One source of power when the grid can’t deliver. Lower your bills. Eliminate outages. Scale as your life grows. This is energy independence, by design.</p>
        </div>
      </section>

      {/* =========================
          ENERGY SYSTEM
      ========================= */}

      <section className="system-section">
        <div className="system-top-gradient"></div>

        <div className="system-content">
          <div className="system-video">
            <video src={electric} autoPlay muted loop playsInline />
          </div>

          <div className="system-features">
            <article className="system-feature">
              <span className="feature-line"></span>

              <h3>ONE Bill - Dramatically Lower</h3>

              <p>
                Stop watching electricity bills climb. Generate and use your own
                solar energy by taking control of your bills and creating a
                smarter, more efficient energy system.
              </p>
            </article>

            <article className="system-feature">
              <span className="feature-line"></span>

              <h3>ONE Decision - Lifetime Earnings</h3>

              <p>
                Don't waste the sun on your roof. Empower your home to capture,
                store and use energy when you need it most, helping you make the
                most of every unit your system produces.
              </p>
            </article>

            <article className="system-feature">
              <span className="feature-line"></span>

              <h3>ONE System - Always Powered</h3>

              <p>
                It goes ahead of power-price spikes during the day and helps
                keep your home running when the grid can't deliver. More energy
                independence, less uncertainty.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =========================
          CUSTOMER STORIES
      ========================= */}

      <section className="stories-section">
        <div className="stories-header">
          <h2>Over 10,000 Australian Homes Trust REA</h2>

          <p>See what REA customers had to say:</p>
        </div>

        <div className="story-card">
          <button
            type="button"
            className="story-arrow story-arrow-left"
            aria-label="Previous story"
          >
            ‹
          </button>

          <div className="story-image">
            <img src={f1} alt="REA customer story" />
          </div>

          <div className="story-content">
            <h3>Mark Webber F1 Legend</h3>

            <div className="story-rating">★★★★★</div>

            <p>
              "First class experience with the REA team, Michael designed a
              customised solution to meet our energy needs and we have now
              installed multiple solar and battery systems with them. Best in
              the industry!"
            </p>
          </div>

          <button
            type="button"
            className="story-arrow story-arrow-right"
            aria-label="Next story"
          >
            ›
          </button>
        </div>

        <div className="story-dots">
          <span className="active"></span>
          <span></span>
          <span></span>
        </div>

        <div className="story-stats">
          <div className="story-stat">
            <strong>#1</strong>
            <span>Queensland's Top Provider</span>
          </div>

          <div className="story-stat">
            <strong>15+</strong>
            <span>Years of Innovation</span>
          </div>

          <div className="story-stat">
            <strong>4.8/5</strong>
            <span>Google Reviews</span>
            <small>(522 Reviews)</small>
          </div>
        </div>

        <a href="#customer-stories" className="stories-button">
          Read Customer Stories
        </a>
      </section>

      {/* =========================
          PRODUCT GRID
      ========================= */}

      <section className="product-grid-section">
        <div className="product-grid">
          {/* Card 1 */}

          <article className="product-card card1">
            <h3>Type X</h3>

            <p>Up to 550W supercharged by FusionCell. Power, refined.</p>

            <div className="product-buttons">
              <a href="#quote">Get Quote</a>

              <a href="#learn-more">Learn More</a>
            </div>

            <div className="product-image">
              <img src={typeX} alt="Type X" />
            </div>
          </article>

          {/* Card 2 */}

          <article className="product-card card2">
            <h3>POWERBANK X</h3>

            <p>The next generation of home energy storage.</p>

            <div className="product-buttons">
              <a href="#quote">Get Quote</a>

              <a href="#learn-more">Learn More</a>
            </div>

            <div className="product-image">
              <img src={PowerBankX} alt="POWERBANK X" />
            </div>
          </article>

          {/* Card 3 */}

          <article className="product-card product-card-dark">
            <h3>POWERBANK</h3>

            <p>Proven battery storage for energy independence.</p>

            <div className="product-buttons">
              <a href="#quote">Get Quote</a>

              <a href="#learn-more">Learn More</a>
            </div>

            <div className="product-image">
              <img src={PowerBankX} alt="POWERBANK" />
            </div>
          </article>

          {/* Card 4 */}

          <article className="product-card card4">
            <h3>Other Batteries</h3>

            <p>Compatible with the solutions you already use.</p>

            <div className="product-buttons">
              <a href="#quote">Get Quote</a>

              <a href="#learn-more">Learn More</a>
            </div>

            <div className="product-image">
              <img src={PowerBankX} alt="Other Batteries" />
            </div>
          </article>
        </div>
      </section>

      {/* =========================
          PRODUCT SLIDER
      ========================= */}

      <section className="product-slider-section">
        <div className="product-slider">
          <button
            type="button"
            className="product-slider-arrow product-slider-prev"
            onClick={previousSlide}
            aria-label="Previous product"
          >
            ←
          </button>

          <div className="product-slider-window">
            <div
              className="product-slider-track"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {/* Slide 1 */}

              <div className="product-slide card1">
                <div className="product-slide-content">
                  <h2>Smart Monitoring</h2>

                  <p>Track your energy use and savings in real time.</p>

                  <div className="product-buttons">
                    <a href="#quote">Get Quote</a>

                    <a href="#learn-more">Learn More</a>
                  </div>
                </div>

                <img src={monitoring} alt="Smart Monitoring" />
              </div>

              {/* Slide 2 */}

              <div className="product-slide card3">
                <div className="product-slide-content">
                  <h2>EV Charging</h2>

                  <p>Charge your EV faster with smart home charging.</p>

                  <div className="product-buttons">
                    <a href="#quote">Get Quote</a>

                    <a href="#learn-more">Learn More</a>
                  </div>
                </div>

                <img src={PowerBankX} alt="POWERBANK" />
              </div>

              {/* Slide 3 */}

              <div className="product-slide card4">
                <div className="product-slide-content">
                  <h2>Hot Water</h2>

                  <p>Efficient hot water powered by clean energy.</p>

                  <div className="product-buttons">
                    <a href="#quote">Get Quote</a>

                    <a href="#learn-more">Learn More</a>
                  </div>
                </div>

                <img src={PowerBankX} alt="Other Batteries" />
              </div>
            </div>
          </div>

          <button
            type="button"
            className="product-slider-arrow product-slider-next"
            onClick={nextSlide}
            aria-label="Next product"
          >
            →
          </button>
        </div>

        {/* Dots */}

        <div className="product-slider-dots">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              type="button"
              className={currentSlide === index ? "active" : ""}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to product ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* =========================
          QUICK LINKS
      ========================= */}

      <section className="quick-links-section">
        <a href="#assessment" className="quick-link">
          <span>Get a free energy assessment</span>

          <span className="quick-arrow">›</span>
        </a>

        <a href="#plans" className="quick-link">
          <span>Compare payment plans</span>

          <span className="quick-arrow">›</span>
        </a>

        <a href="#calculator" className="quick-link">
          <span>Online energy calculator</span>

          <span className="quick-arrow">›</span>
        </a>
      </section>

      {/* =========================
          PORSCHE
      ========================= */}

      <section className="porsche-section">
        <div className="porsche-overlay"></div>

        <div className="porsche-content">
          <h2>
            REA ONE × Porsche: Driving the Next Generation of Energy Innovation
          </h2>

          <p>
            We share Porsche's passion for intelligent performance, where
            innovation meets emotion and design meets purpose.
            <br />
            Together, we've built a seamless ecosystem to generate, store, and
            drive.
          </p>

          <a href="#porsche" className="porsche-button">
            Discover REA ONE × Porsche
          </a>
        </div>
      </section>

      {/* =========================
          TRUSTED PARTNERS
      ========================= */}

      <div className="partner-heading">
        <h1>Trusted by the best</h1>
      </div>

      <div className="partners-slider">
        <div className="partners-window">
          <div className="partners-track">
            <div className="partner-logo">
              <img src={partner1} alt="Partner 1" />
            </div>

            <div className="partner-logo">
              <img src={partner2} alt="Partner 2" />
            </div>

            <div className="partner-logo">
              <img src={partner3} alt="Partner 3" />
            </div>

            <div className="partner-logo">
              <img src={partner4} alt="Partner 4" />
            </div>

            <div className="partner-logo">
              <img src={partner5} alt="Partner 5" />
            </div>

            <div className="partner-logo">
              <img src={partner6} alt="Partner 6" />
            </div>

            {/* Duplicate for continuous loop */}

            <div className="partner-logo">
              <img src={partner1} alt="Partner 1" />
            </div>

            <div className="partner-logo">
              <img src={partner2} alt="Partner 2" />
            </div>

            <div className="partner-logo">
              <img src={partner3} alt="Partner 3" />
            </div>

            <div className="partner-logo">
              <img src={partner4} alt="Partner 4" />
            </div>

            <div className="partner-logo">
              <img src={partner5} alt="Partner 5" />
            </div>

            <div className="partner-logo">
              <img src={partner6} alt="Partner 6" />
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          FOOTER
      ========================= */}

      <Footer />
    </main>
  );
}

export default Home;
