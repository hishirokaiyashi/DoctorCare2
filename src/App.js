// styles
import './App.css';
// components
import HeroSection from './components/HeroSection';
import Nav from "../src/components/Nav"
import ServicosSection from './components/ServicosSection';
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Nav/>
      <HeroSection/>
      <ServicosSection/>
      <Footer/>
    </div>
  );
}

export default App;
