import logo from './logo.svg';
import './App.css';
import {React} from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {Container} from 'react-bootstrap'
import HomeScreen from './screens/homescreen'
import { render } from "react-dom";

const  App = ()=> {
  console.log("hello")
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </div>
  );


  );
}

export default App;
