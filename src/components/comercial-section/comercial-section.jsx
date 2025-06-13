import "./comercial-section.css";
import comercial_pic from "../../assets/images/comercial-section-pic.png";

const Comercial_section = () => {
  return (
    <div className="container">
      <div className="comercial-content">
        <div className="comercial-content__text-container">
          <p className="comercial-content__text">
            Are you ready to $pend time with Mommy...?
          </p>
          <p className="comercial-content__text">
            Buy a $ession on Mommy's Throne and DM me.~
          </p>
        </div>
        <div className="comercial-content__image-container">
          <img src={comercial_pic} alt="picture for the comercial sections" />
        </div>
        <ul className="comercial-content__list">
          <li className="btn comercial-content__item comercial-content__item--twitter">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/GoonplaMona"
              className="comercial-content__redirector"
            >
              <h3 className="comercial-content-redirector__title">
                Mommy’s Twitter
              </h3>
              <p className="comercial-content-redirector__text">
                Awww~ missing mommy already?~ Send me a DM~
              </p>
            </a>
          </li>
          <li className="btn comercial-content__item comercial-content__item--throne">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://throne.com/mommy_toga"
              className="comercial-content__redirector"
            >
              <h3 className="comercial-content-redirector__title">
                Mommy's Throne Page
              </h3>
              <p className="comercial-content-redirector__text">
                ~My Preferred Method of Payment~
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Comercial_section;
