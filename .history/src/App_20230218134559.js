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
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
      <Footer />
    </div>
  );


  
}

export default App;
