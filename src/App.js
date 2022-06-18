import './App.css';
import About from './Components/About';
import Banner from './Components/Banner';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
}

export default App;
