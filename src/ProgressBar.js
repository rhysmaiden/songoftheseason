import React, { useEffect, useState } from "react";
import "./App.css";

//import 'bootstrap/dist/css/bootstrap.min.css';
import { isUserWhitespacable, tsPropertySignature } from "@babel/types";

const ProgressBar = (props) => {

  return (
    <React.Fragment>
        <div className="progress-bar-label">
            <p>{props.percentage + '%'}</p>
        </div>
        
        <div className="progress-bar-track my-auto">
        
            <div className="progress-bar-thumb" style={{ width: props.percentage + '%'}}>
                
            </div>

        </div>
    
    </React.Fragment>
  );
};

export default ProgressBar;
