import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero /> 
      <ItemListContainer greeting="Nuestras piezas más populares de esta temporada" />
    </div>
  );
}

export default App;