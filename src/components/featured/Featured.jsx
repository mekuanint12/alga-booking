import city1 from "./../../resource/img/city-01.jpg";
import city2 from "./../../resource/img/city-02.jpg";
import city3 from "./../../resource/img/city-03.jpg";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src={city1} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Addis Ababa</h1>
          <h2>123 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={city2}  alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Hawassa</h1>
          <h2>23 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={city3}  alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Bahir Dar</h1>
          <h2>51 Properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured