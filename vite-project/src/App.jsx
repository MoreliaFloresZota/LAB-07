import './App.css';
import { Button } from './components/Button';
import RandomComponent from './components/RandomComponent'; // Importa el nuevo componente

function App() {
  return (
    <>
      <h1>HOLA DESDE VITE</h1>
      <Button />
      <RandomComponent />  {/* Llama al nuevo componente aquí */}
    </>
  );
}

export default App;
