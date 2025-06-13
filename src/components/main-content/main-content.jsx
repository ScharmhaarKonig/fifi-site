import "./main-content.css";
import main__content_image from "../../assets/images/main-content-image.png";

const Main_content = () => {
  return (
    <div style={{ paddingBottom: "45px" }} className="container">
      <div className="main-content">
        <p className="main-content__text">
          Welcome Gooner. How can Mommy Fionna assist you today?
        </p>
        <p style={{ marginBottom: "16px" }} className="main-content__text">
          Are you here to be obedient...?
        </p>
        <div className="main-content__image">
          <img src={main__content_image} alt="main content image" />
        </div>
        <div className="btn main-content__link-container">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://justpaste.it/jbg9i"
            className="main-content__redirector-button"
          >
            Mommy's goon $ession Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main_content;
