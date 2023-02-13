import hotel1 from "./../../resource/img/hotel-01.jpg";
import hotel2 from "./../../resource/img/hotel-02.jpg";
import hotel4 from "./../../resource/img/hotel-04.jpg";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  return ( 
      <div className="fp">
            <div className="fpItem">
              <img src={hotel1} alt="" className="fpImg"/>
              <span className="fpName">Mariot International Hotel</span>
              <span className="fpCity">Addis Ababa</span>
              <span className="fpPrice">Starting from 120 ETB</span>
              <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
              </div>
            </div>

            <div className="fpItem">
            <img src={hotel2} alt="" className="fpImg"/>
            <span className="fpName">Mariot International Hotel</span>
            <span className="fpCity">Addis Ababa</span>
            <span className="fpPrice">Starting from 120 ETB</span>
            <div className="fpRating">
              <button>8.9</button>
              <span>Excellent</span>
            </div>
            </div>
            <div className="fpItem">
            <img src={hotel4} alt="" className="fpImg"/>
            <span className="fpName">Mariot International Hotel</span>
            <span className="fpCity">Addis Ababa</span>
            <span className="fpPrice">Starting from 120 ETB</span>
            <div className="fpRating">
              <button>8.9</button>
              <span>Excellent</span>
            </div>
            </div>
            <div className="fpItem">
            <img src={hotel4} alt="" className="fpImg"/>
            <span className="fpName">Mariot International Hotel</span>
            <span className="fpCity">Addis Ababa</span>
            <span className="fpPrice">Starting from 120 ETB</span>
            <div className="fpRating">
              <button>8.9</button>
              <span>Excellent</span>
            </div>
            </div>
      </div>
  )
}

export default FeaturedProperties