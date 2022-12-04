import "./App.css";
import React from "react";
import TaskListComponent from "./components/container/task_list";
import Loginformik from "./pages/login/loginFormik";
import Registerformik from "./pages/login/registerFormik";
import Notfoundpage from "./pages/404/NotFoundPage";
import Button from '@mui/material/Button';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Navigate,
  redirect,
} from "react-router-dom";
import Main from "./pages/dashboard/main";

function App() {
  let loggedIn = true;

  return (
    <div className="App">

      <header>
        <h1>Tasks app</h1>
        <Button variant="outlined"><Link to='/register'>Register</Link></Button>
        <Button variant="outlined"><Link to='/login'>Login</Link></Button>
        <Button variant="outlined"><Link to='/tasks'>Tasks</Link></Button>
        
      
      </header>
  
<Routes>
<Route path='/' element={<Main logged={loggedIn}/>}/>
  <Route path='/login' element={<Loginformik/>}/>
  <Route path='/register' element={<Registerformik/>}/>
  <Route path='/tasks' element={<TaskListComponent logged={loggedIn}/>}/>
  <Route path='*' element={<Notfoundpage/>}/>
</Routes>
    </div>
  );
  }
export default App;
