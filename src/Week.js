import React, { useEffect, useState } from "react";
import "./App.css";

//import 'bootstrap/dist/css/bootstrap.min.css';
import { isUserWhitespacable } from "@babel/types";

const Week = (props) => {

  return (
    <React.Fragment>
    <div className="row">
        <div className="col-2 my-auto"> 
  <p className="month">{props.month}<sup>{props.year}</sup></p>  
            
    
        </div>
        <div className="col-8 monthrow">
            <div className="row">
                <div className="col-3 albumDiv">
                    <img className="albumArt" src={props.image}/>
                </div>
                <div className="col-9 my-auto">
                    <p className="artist">{props.artist}</p>
                    <p className="song">{props.name}</p>
                </div>
            </div>
        
        </div>
        <div className="col-2">

        </div>

    </div>
    </React.Fragment>
  );
};

export default Week;
