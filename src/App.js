// styles
import './App.css';
// components
import SobreSection from './components/SobreSection';
import HeroSection from './components/HeroSection';
import Nav from "../src/components/Nav"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Nav/>
      <HeroSection/>
      <SobreSection/>
      <Footer/>
    </div>
  );
}

export default App;
