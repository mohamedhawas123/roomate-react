import logo from './logo.svg';
import './App.css';
import {React} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'


const  App = ()=> {
  return (
    
    <React.Fragment>
    <Router>
       {/* <Header /> */}
    <main className="py-3">
      <Container>
      <Route exact path="/" component={HomeScreen} />

    </Container>
    </main>
    
    

  
    </Router>
   
  </React.Fragment>

  );
}

export default App;
