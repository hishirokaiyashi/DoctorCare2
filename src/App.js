// styles
import './App.css';
// components
import HeroSection from './components/HeroSection';
import Nav from "../src/components/Nav"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <Nav/>
      <Footer/>
    </div>
  );
}

export default App;
