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
  render (
    <BrowserRouter>

<Routes>
       {/* <Header /> */}
    <main className="py-3">
      <Container>
      <Route exact path="/" component={HomeScreen} />

    </Container>
    </main>
    
    

  
    </Routes>
    </BrowserRouter>,


  );
}

export default App;
