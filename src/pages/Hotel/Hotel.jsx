import Navbar from "./../../components/Navbar/Navbar";
import Header from "./../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import hotel1 from "./../../resource/img/hotel-04.jpg";
import hotel2 from "./../../resource/img/hotel-02.jpg";
import hotel3 from "./../../resource/img/hotel-03.jpg";
import hotel4 from "./../../resource/img/hotel-04.jpg";
import hotel5 from "./../../resource/img/hotel-03.jpg";
import {faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import "./hotel.css";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [hotel1,hotel2,hotel3,hotel4,hotel5, hotel1];
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  }
  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "l"){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1;
    }
    setSlideNumber(newSlideNumber);
  }
  return (
    <div>
            {open && <div className="slider">
                        <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)}/>
                        <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")} />
                        <div className="sliderWrapper">
                          <img src={photos[slideNumber]} alt="" className="sliderImg" />
                        </div>
                        <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")} />
                    </div>}
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Ethiopian Skylight Hotel</h1>
          <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Bole Street, Addis Ababa </span>
          </div>
              <span className="hotelDistance">Excellent Location - 500m from center</span>
              <span className="hotelPriceHighLight">Book a stay over 450 ETB at this property and get a free airport taxi</span>
              <div className="hotelImages">
                {photos.map((photo, i) => (
                  <div className="hotelImageWrapper">
                      <img onClick={() => handleOpen(i)} src={photo} alt="" className="hotelImg"/>
                  </div>
                )
                )}
              </div>
              <div className="hotelDetails">
                <div className="hotelDetailTexts">
                  <p className="hotelDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorem perferendis non asperiores adipisci, id accusantium enim. 
                    Voluptatem excepturi quae autem laborum placeat culpa alias debitis adipisci veniam, recusandae commodi in exercitationem, dignissimos ut nesciunt. Adipisci beatae voluptatum expedita. 
                    Aut corrupti recusandae itaque quam iusto ullam. Sequi ea sint repudiandae.
                  </p>
                </div>
                <div className="hotelDetailPrice">
                  <h1>Perfect for a 7-Days(Week) stay!</h1>
                  <span>
                    Located in the Bole Rwanda street, this property has an Excellent Location score of 9.8!
                  </span>
                  <h2><b>12945 ETB</b> 1 Week</h2>
                  <button>Reserve or Book Now!</button>
                </div>
              </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel