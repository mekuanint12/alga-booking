import Navbar from "./../../components/Navbar/Navbar";
import Header from "./../../components/Header/Header";
import SearchItem from "./../../components/searchItem/SearchItem";
import { useState} from "react";
import { DateRange } from 'react-date-range';
import {format} from "date-fns"; 
import "./list.css";
import { useLocation } from "react-router-dom";

const List = () => {
  const [showOpenDate, setShowOpenDate] = useState(false);
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
            <div className="listSearch">
              <h1 className="lsTitle">Search</h1>
                    <div className="lsItem">
                      <label>Destination</label>
                      <input type="text" placeholder={destination}/>
                    </div>
                  <div className="lsItem">
                    <label>Check-in Date</label>
                    <span onClick={() => setShowOpenDate(!showOpenDate)}>{`${format(date[0].startDate,"MM/dd/yyyy" )} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span> 
                    {showOpenDate && <DateRange minDate={new Date()} editableDateInputs={true} onChange={(item) => setDate([item.selection])} moveRangeOnFirstSelection={false} ranges={date} className="date"/>}
                  </div>
                  <div className="lsItem">
                    <label >Options</label>
                    <div className="lsOptions">

                    <div className="lsOptionItem">
                      <span className="lsOptionText">Min Price <small>per night</small> </span>
                      <input min={1} type="number" className="lsOptionInput"/>
                    </div>
                    <div className="lsOptionItem">
                      <span className="lsOptionText">Max Price <small>per night</small> </span>
                      <input min={1} type="number" className="lsOptionInput"/>
                    </div>
                    <div className="lsOptionItem">
                      <span className="lsOptionText">Adult </span>
                      <input min={1} type="number" className="lsOptionInput" placeholder={options.adult}/>
                    </div>
                    <div className="lsOptionItem">
                      <span className="lsOptionText">Children </span>
                      <input min={0} type="number" className="lsOptionInput"  placeholder={options.children}/>
                    </div>
                    <div className="lsOptionItem">
                      <span className="lsOptionText">Room </span>
                      <input min={1} type="number" className="lsOptionInput"  placeholder={options.room}/>
                    </div>
                    </div>
                  </div>
                  <button>Search</button>
          </div>
          <div className="listResult">
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default List