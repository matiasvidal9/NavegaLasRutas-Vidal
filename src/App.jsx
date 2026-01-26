import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; // Asegúrate de importar tu Hero
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route 
            path="/" 
            element={
                <>
                    <Hero /> 
                    <ItemListContainer greeting="Bienvenidos a LOOk" />
                </>
            } 
        />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>404 - No encontrado</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;