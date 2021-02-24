import './App.scss';
import pokemons from '../data/data.json';
import PokeList from './PokeList';

function App() {

  return (
    <PokeList pokemons={pokemons} />
  );
}

export default App;
