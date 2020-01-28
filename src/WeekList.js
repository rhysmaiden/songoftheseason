import React, { useEffect, useState } from "react";
import "./App.css";
import Week from "./Week"
//import ProgressBar from "./ProgressBar"
import ProgressBar from 'react-bootstrap/ProgressBar'

//import 'bootstrap/dist/css/bootstrap.min.css';
import { isUserWhitespacable, tsConstructorType } from "@babel/types";

const WeekList = (props) => {
  const API_KEY = "fc0bd2c3a24da9b1931731c1ba2694c5";
  const USER_AGENT = "rhys";
  const user_name = props.username;

  const [username,setUsername] = useState('')
  const [weeks, setWeeks] = useState([]);

  const [search,setSearch] = useState("");
  const [query,setQuery] = useState("")

  const [yearNumber,setYearNumber] = useState("");
  const [yearQuery,setYearQuery] = useState(0);

  const[percentage,setPercentage] = useState(0.0);

  const[isGettingTracks,setGettingTracks] = useState(false);

  

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const updateYears = e => {
    setYearNumber(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    updateUsername(query);
    setYearQuery(yearNumber);
    console.log("SUBMIT");
  }

  const updateUsername = (value) => {
    console.log(value);
    setUsername(value);
    }

  useEffect(() => {
    getMonthCharts();
  }, [query]);

  
  



  const getMonthCharts = async () => {

   

    if (query == "") {
        return;
    }

    console.log("GET CHARTS");
    var today= new Date();
    var month = today.getMonth();
    var year = today.getFullYear();
    var from_date = new Date(year,month,1,0,0,0,0);
    var to_date = new Date(year,month,today.getDate(),0,0,0,0);
  
    //TODO: Make initial request
  
  
    to_date = new Date(year,month + 1,1,0,0,0,0);; 
    var month_list = [];

    var months_retrieved = 0;

    setGettingTracks(true);

    const months_to_retrieve = yearQuery * 12;
  
    for (var i = 0; i < months_to_retrieve; i++) {

        
        
        from_date.setMonth(from_date.getMonth() - 1);
        to_date.setMonth(to_date.getMonth() - 1);

        const request = 'https://ws.audioscrobbler.com/2.0/?api_key=fc0bd2c3a24da9b1931731c1ba2694c5&format=json&method=user.getweeklytrackchart&limit=1&user=' + query + '&from=' + Math.floor(from_date.getTime()/ 1000) + '&to=' + Math.floor(to_date.getTime()/ 1000);
        const response = await fetch (request);
        const chartData = await response.json();

        try {
            const topTrack = await chartData["weeklytrackchart"]["track"][0];
            const shortMonth = from_date.toLocaleString('default', { month: 'short' }).toUpperCase();
            const shortYear = from_date.getFullYear().toString().substr(-2) + "'";

            const new_track = await { 
            track: topTrack,
            image:bing,
            month:shortMonth,
            year:shortYear
            };

            if (new_track.track != undefined) {
                var image_link = new_track.track.artist["#text"] + " " + new_track.track.name + " cover";
                var bing =  'https://tse2.mm.bing.net/th?q='+image_link+' artist+spotify.com&w=300&h=300&c=7&rs=1&p=0&dpr=3&pid=1.7&mkt=en-IN&adlt=on'
                new_track.image = bing;

                
                month_list.push(new_track)
                months_retrieved += 1;

                setPercentage((months_retrieved/months_to_retrieve)*100);

                
            // percentage = months_retrieved/months_to_retrieve;

            }       
        } catch(err) { console.log(err) }
    }
    
    setGettingTracks(false);
    setWeeks(month_list);
}

  return (
    <React.Fragment>
        <div className="row input">
            <div className="col-12">
                <p className="username-label">Lastfm username</p>
                <form onSubmit={getSearch}>
                    <input className="username-field" type="text" value={search} onChange={updateSearch}></input>
                    <p className="username-label">Years back</p>
                    <input className="username-field" type="number" value={yearNumber} onChange={updateYears}></input>
                    <button type="submit">Generate</button>
                </form>
            </div>
            
        </div>

      { isGettingTracks ? (
        <ProgressBar now={percentage} label={percentage.toFixed() + '%'}/>
      ) : (
        <div></div>
      )}
        
      
      

        {weeks.map(week => (
          <Week month={week.month} year={week.year} name={week.track.name} artist={week.track.artist["#text"]} image={week.image}/>
        ))}
    </React.Fragment>
  );
};

export default WeekList;
