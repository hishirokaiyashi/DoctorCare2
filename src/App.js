// styles
import './App.css';
// components
import ContatoSection from './components/ContatoSection';
import HeroSection from './components/HeroSection';
import Nav from "../src/components/Nav"
import Footer from "./components/Footer"
// others
import "@fontsource/dm-sans"

function App() {
  return (
    <div className="App">
      <Nav/>
      <HeroSection/>
      <ContatoSection/>
      <Footer/>
    </div>
  );
}

export default App;
