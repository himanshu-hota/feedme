
import './App.css';
import './index.css';
import Banner from './components/Banner/Banner';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Menu from './components/menu/Menu';
import Expert from './components/Expert/Expert';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {

  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
  })

  return (

    <div>


      <Navigation />
      <Banner />
      <About />
      <Menu />
      <Expert />
      <Testimonials />
      <Contact />
      <Footer />



    </div>


  );
}

export default App;

