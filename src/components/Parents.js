import "./Parents.css";
import angela from "../images/mom.png";
import ming from "../images/dad.png";
export default function Parents() {
  return (
    <div className="Parents">
      <div className="Mom">
        <img src={angela} alt="angela" />
        <p>mom</p>
      </div>
      <div className="Dad">
        <img src={ming} alt="angela" />
        <p>dad</p>
      </div>
    </div>
  );
}
