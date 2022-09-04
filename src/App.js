import './App.css';

import { About } from './components/about.jsx';
import { Contact } from './components/contact.jsx';
import { Experience } from './components/experience.jsx';
import { Footer } from './components/footer.jsx';
import { Header } from './components/header/header.jsx';
import { Navbar } from './components/navbar.jsx';
import { Portfolio } from './components/portfolio.jsx';
import { Services } from './components/services.jsx';
import { Testimonials } from './components/testimonials.jsx';





function App() {
  return (

    <div className='App'>
      <Header />
      <Navbar />
      <About />
      <Experience />
      {/*<Services />*/}
      <Portfolio />
      {/*<Testimonials />*/}
      <Contact />
      <Footer />
    </div>

  );
}

export default App;
