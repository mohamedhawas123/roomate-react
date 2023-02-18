import logo from './logo.svg';
import './App.css';
import {React} from 'react'
import { Route } from 'routes';


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
    
    

  
  <Footer />
    </Router>
   
  </React.Fragment>

  );
}

export default App;
