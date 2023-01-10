
import './App.css';
import Header from './components/header/header' ;
import Navbar from './components/navbar/navbar' ;
import About from './components/about/about' ;
import Experience from './components/experience/experience' ;
import Services from './components/services/services' ;
import Portfolio from './components/portfolio/portfolio' ;
import Testimonials from './components/testimonials/testimonials' ;
import Contact from './components/contact/contact' ;
import Footer from './components/footer/footer' ;

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
