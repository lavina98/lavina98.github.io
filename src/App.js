import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import AboutMe from './pages/AboutMe/AboutMe';
import ContactMe from './pages/ContactMe/ContactMe';
import  Experience from './pages/Experience/Experience';
import Projects from './pages/Projects/Projects';
import EducationAndCertification from './pages/EducationAndCertification/EducationAndCertification';
class App extends React.Component {
  render() {
    return (
      <div className="App">
          
        <EducationAndCertification/>
      </div>
    );
  }
  
}

export default App;
