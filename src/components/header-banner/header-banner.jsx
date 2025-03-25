import Banner from "../../assets/images/top-img.jpg";
import ProfilePic from "../../assets/images/ProfilePic.png";
import X from "../../assets/images/X.svg";
import "./header-banner.css";

const Header_banner = () => {
  return (
    <header className="header">
      <img src={Banner} alt="header banner" className="banner" />
      <div className="profile-pic-username-container">
        <img className="profile-pic" src={ProfilePic} alt="profile pic" />
        <h2 className="header__title">Misstress Fionna</h2>
        <p className="header__text">Mommy is here now...~</p>
        <a
          aria-label="Mommy's X account"
          target="_blank"
          rel="noopener noreferrer"
          href="https://x.com/GoonplaMona"
          className="header__link"
        >
          <img src={X} alt="Mommy's X profile" />
        </a>
      </div>
    </header>
  );
};

export default Header_banner;
