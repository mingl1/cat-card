import "./Footer.css";
import twitter from "../images/twitter.svg";
import twitch from "../images/twitch.svg";
import instagram from "../images/instagram.svg";
export default function Footer() {
  return (
    <div className="Footer">
      <div className="Logo">
        <img src={twitter} alt="angela" />
      </div>
      <div className="Logo">
        <img src={instagram} alt="angela" />
      </div>
      <div className="Logo">
        <img src={twitch} alt="" />
      </div>
    </div>
  );
}
