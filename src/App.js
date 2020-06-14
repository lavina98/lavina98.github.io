import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import logo from './images/logo.png';
import AboutMe from './pages/AboutMe/AboutMe';
import  Experience from './pages/Experience/Experience';
import Projects from './pages/Projects/Projects';
import EducationAndCertification from './pages/EducationAndCertification/EducationAndCertification';
import Achievement from './pages/Achievement/Achievement';
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="main" >
            <div id="nav">
                  <div className="nav_item">
                      <img id= "img_logo" src={logo}></img>
                  </div>
                  <div className="nav_item">
                    <ul className="nav_list">
                        <li>
                          <Link  to="/">About Me</Link>
                        </li>
                        <li>
                          <Link to="/experience">Experience</Link>
                        </li>
                        <li>
                          <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                          <Link to="/educationandcertification">Education & Certifications</Link>
                        </li>
                        <li>
                          <Link to="/achievements">Achievements</Link>
                        </li>
                    </ul>
                  </div>
             </div>
             <div className="page_content">
                <Switch>
                      <Route path="/experience" component={Experience}>
                      </Route>
                      <Route path="/projects" component={Projects}>
                      </Route>
                      <Route path="/educationandcertification" component={EducationAndCertification}>   
                      </Route>
                      <Route path="/achievements" component={Achievement}>
                      </Route>
                      <Route  path="/" component={AboutMe}>
                      </Route>
                </Switch>
             </div>
        </div>
      </Router>
    );
  }
  
}

export default App;
