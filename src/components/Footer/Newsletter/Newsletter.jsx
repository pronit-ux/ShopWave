import "./Newsletter.scss";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagramAlt,
  BiLogoLinkedin,
} from "react-icons/bi";

const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">Newsletter</span>
        <span className="big-text">Sign up for latest updates & offers</span>
        <div className="form">
          <input type="text" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
        <div className="text">
          Will be used in accordance with our Privacy Policy
        </div>
        <div className="social-icons">
          <div className="icon">
            <BiLogoFacebook size={15} />
          </div>
          <div className="icon">
            <BiLogoTwitter size={15} />
          </div>
          <div className="icon">
            <BiLogoInstagramAlt size={15} />
          </div>
          <div className="icon">
            <BiLogoLinkedin size={15} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
