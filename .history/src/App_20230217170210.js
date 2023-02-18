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
import Navbar from './components/navbar'


const  App = ()=> {
  console.log("hello")
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </div>
  );


  
}

export default App;
