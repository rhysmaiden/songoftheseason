import React, { useEffect, useState } from "react";
import "./App.css";

//import 'bootstrap/dist/css/bootstrap.min.css';
import { isUserWhitespacable } from "@babel/types";

const TitleNav = (props) => {

  return (
    <React.Fragment>
    <div className="container-fluid titlenav">
        <h1>Song of the Season</h1>

    </div>
    </React.Fragment>
  );
};

export default TitleNav;
