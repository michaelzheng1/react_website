// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Header from './components/header/header';
// import About from './components/about/about';
// import Resume from './components/resume/resume';
// import Portfolio from './components/portfolio/portfolio';
// import Testimonials from  './components/testimonials/testimonials';
// import ContactUs from './components/contactus/contactus';
// import Footer from './components/footer/footer';

// // function App() {
//   return (
//     <div className="App">
//     <Header/>
//       hello world
//     </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Michael Zheng
    //     </a>
    //   </header>
    // </div>
    
      // <div className="App">
      //   <Header />
      //   <About />
      //   <Resume />
      //   <Portfolio />
      //   <Testimonials />
      //   <ContactUs />
      //   <Footer />
      // </div>
//   );
// } 


// export default App;
import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from  './components/testimonials/testimonials';
import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';
import resumeData from './resumeData';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/> 
      </div>
    );
  }
}

export default App;
