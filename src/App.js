import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Team from './Pages/Team';
import Career from './Pages/Career';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import { useState } from 'react';
import Testimonials from './Pages/Testimonials';
import { Toaster } from 'react-hot-toast';

function App() {

  const [darkMode, setDarkMode] = useState(false)  

  return (
    <div className={`font-nunito ${darkMode ? "dark" : ""} text-[120%] md:text-[100%]`}>
      <Toaster/>
       <Home darkMode={darkMode} setDarkMode={setDarkMode} />
       <About />
       <Services />
       <Team />
       <Career />
       <Contact />
       <Testimonials />
      <Footer />
    </div>
        
  );
}

export default App;
