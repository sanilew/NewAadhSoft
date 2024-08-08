// App.js
import React from 'react';
import  Header  from './components/Header';          // Correct import for named export
import HeroSection  from './components/HeroSection';
import  ProcessSection  from './components/ProcessSection';
import  Testimonial  from './components/Testimonial';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ProcessSection />

      <Testimonial />
      <Footer/>
    </div>
  );
}

export default App;
