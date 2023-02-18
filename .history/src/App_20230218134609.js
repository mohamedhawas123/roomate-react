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
import Navbarr from './components/navbar'
import Footer from './components/footer';

const  App = ()=> {
  console.log("hello")
  return (
    <div>
      <Navbarr />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </div>
  );


  
}

export default App;
