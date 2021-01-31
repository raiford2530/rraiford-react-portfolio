import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './containers/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './containers/About/About';
import Portfolio from './containers/Portfolio/Portfolio'
import Contact from './containers/Contact/Contact'
import ProjectDetails from './containers/ProjectDetails/ProjectDetails'
import Footer from './components/Footer/Footer';
import './app.css';

function App() {
  return (
    <Router basename="/">
    <div className="root-container d-flex flex-column h-100">
      <Navbar/>   
      <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/about">
        <About/>
      </Route>
      <Route exact path="/portfolio">
        <Portfolio/>
      </Route> 
      <Route exact path="/contact">
        <Contact/>
      </Route> 
      <Route  path="/projects/:name">
        <ProjectDetails/>
      </Route>    
      </Switch>     
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
