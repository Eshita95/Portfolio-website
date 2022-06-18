import './App.css';
import About from './Components/About';
import Banner from './Components/Banner';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Education></Education>
      <Skills></Skills>
      <Blogs></Blogs>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
