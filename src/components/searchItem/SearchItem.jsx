import { Link } from "react-router-dom";
import "./searchItem.css";
import image1 from "./../../resource/img/hotel-06.jpg";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={image1} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">Ethiopian Skylight Hotel</h1>
        <span className="siDistance">2Km from airport</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">Ethiopian Skylight Hotel is 0.3miles from Bole International Airport and has Indoor and spa and sauna. </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">2500 ETB</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/sff`}>
          <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;