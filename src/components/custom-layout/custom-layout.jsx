import Comercial_section from "../comercial-section/comercial-section";
import Header_banner from "../header-banner/header-banner";
import Main_content from "../main-content/main-content";
import "./custom-layout.css";

const Custom_layout = () => {
  return (
    <div className="background">
      <div className="profile">
        <Header_banner />
        <Main_content />
        <Comercial_section />
      </div>
    </div>
  );
};

export default Custom_layout;
