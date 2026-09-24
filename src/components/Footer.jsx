import "../CSS/footer.css"
import { CircleArrowRight}  from "lucide-react";

function Footer(){
    return(
        <footer className="footer">
  <div className="footer-top">

    <div className="footer-news">
      <h2>
        Stay up to date
        <br />
        with the latest
        <br />
        REA One news
      </h2>

      <button type="button" className="subscribe-btn">
        <p>Subscribe</p>
        <p><CircleArrowRight width={18}/></p>
      </button>
    </div>

    <div className="footer-column">
      <h3>Explore &<br />Products</h3>
      <a href="#home">Home</a>
      <a href="#type-x">Type X</a>
      <a href="#powerbank-x">POWERBANK X</a>
      <a href="#powerbank-10">POWERBANK 10</a>
      <a href="#other-batteries">Other Batteries</a>
      <a href="#smart-monitoring">Smart Monitoring</a>
      <a href="#ev-charging">EV Charging</a>
    </div>

    <div className="footer-column">
      <h3>Support</h3>
      <a href="#support">Support</a>
      <a href="#faqs">FAQs</a>
      <a href="#service-ticket">My service ticket</a>
    </div>

    <div className="footer-column">
      <h3>About</h3>
      <a href="#about">About Us</a>
      <a href="#blogs">Blogs</a>
      <a href="#referral">Referral Program</a>
      <a href="#customer-stories">Customer Stories</a>
      <a href="#rea-impact">REA Impact</a>
    </div>

    <div className="footer-column">
      <h3>Social</h3>
      <a href="#facebook">Facebook</a>
      <a href="#instagram">Instagram</a>
      <a href="#youtube">YouTube</a>
      <a href="#linkedin">LinkedIn</a>
    </div>

  </div>

  <div className="footer-bottom">
    <span>REA © 2026 All rights reserved</span>
    <span className="footer-divider">|</span>
    <a href="#terms">Terms &amp; Conditions</a>
    <a href="#privacy">Privacy</a>
    <a href="#cookies">Cookies</a>
  </div>
</footer>
    )
}

export default Footer;