// styles
import './App.css';
// components
import Nav from "../src/components/Nav"
import ServicosSection from './components/ServicosSection';
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <ServicosSection/>
      <Nav/>
      <Footer/>
    </div>
  );
}

export default App;
