// styles
import './App.css';
// components
import SobreSection from './components/SobreSection';
import Nav from "../src/components/Nav"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <SobreSection/>
      <Nav/>
      <Footer/>
    </div>
  );
}

export default App;
