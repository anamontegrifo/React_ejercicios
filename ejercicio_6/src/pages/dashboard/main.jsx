import React from "react";
import TaskListComponent from "../../components/container/task_list";
import Loginformik from "../login/loginFormik";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const Main = ({logged}) => {
  return (
    <div>
    <h1>Main</h1>
    {logged ? 
           (<Navigate from='/' to='/tasks'  />)
        
           :
           (<Navigate from='/' to='/login'  /> )
          }
  
    </div>
  );
};

export default Main;
