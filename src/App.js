import React from 'react';

import Navbar from './components/navbar/navbar.component';
import Hero from './components/hero/hero.component';
import Projects from './components/projects/projects.component';
import AboutMe from './components/about-me/about-me.component';
import ContactMe from './components/contact-me/contact-me.component';
//import Footer from './components/footer/footer.component';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Navbar />
        <Hero /> 
        <AboutMe />
        <Projects />
        <ContactMe />
        {/*<Footer />*/}
      </div>
    );
  }
  
}

export default App;
