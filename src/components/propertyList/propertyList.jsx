import hotel1 from "./../../resource/img/hotel-01.jpg";
import hotel2 from "./../../resource/img/hotel-02.jpg";
import hotel3 from "./../../resource/img/hotel-03.jpg";
import hotel4 from "./../../resource/img/hotel-04.jpg";
import "./propertyList.css";

const propertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img src={hotel1} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>233 Hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={hotel2} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Gust House</h1>
          <h2>233 Hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={hotel1} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>233 Hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={hotel3} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>233 Hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={hotel4} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>233 Hotels</h2>
        </div>
      </div>
    </div>
  )
}

export default propertyList