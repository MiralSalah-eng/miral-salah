import './App.css';
import NabvBar from './components/NabvBar';
import SocialIcons from './components/SocialIcons';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <NabvBar/>    
      <Home />
      <About/>
      <Skills/>
      <Contact/>
      <SocialIcons/>

      
    </div>
  );
}

export default App;
