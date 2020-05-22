import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import AboutMe from './pages/AboutMe/AboutMe';
import ContactMe from './pages/ContactMe/ContactMe';
import  Experience from './pages/Experience/Experience';
class App extends React.Component {
  render() {
    return (
      <div className="App">
          
        <ContactMe></ContactMe>
      </div>
    );
  }
  
}

export default App;
