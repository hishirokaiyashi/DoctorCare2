// styles
import './App.css';
// components
import ContatoSection from './components/ContatoSection';
import Nav from "../src/components/Nav"
import Footer from "./components/Footer"
// others
import "@fontsource/dm-sans"

function App() {
  return (
    <div className="App">
      <ContatoSection/>
      <Nav/>
      <Footer/>
    </div>
  );
}

export default App;
