import React, { useEffect, useState } from "react";
import "./App.css";
import WeekList from "./WeekList";
import UsernameInput from "./UsernameInput";
import TitleNav from "./TitleNav";
//import 'bootstrap/dist/css/bootstrap.min.css';
import { isUserWhitespacable } from "@babel/types";



const App = () => {

  
  
  return (

    <React.Fragment>
      
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />

    <TitleNav/>
    <div className="background">
    <div className="container">

      
    
      <WeekList/>
    </div>
    </div>

    </React.Fragment>
  );
};

export default App;
