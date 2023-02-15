import MovieList from "./MovieList";
import NavScrollExample from "./NavScrollExample";
import './list.css';
import MovieCard from "./MovieCard";

function App() {
  
  return (
    <div className="App">
     <header>
      <NavScrollExample/>
     </header>
   
      <div className="film">
       <MovieCard/>

       </div>
    </div>
  );
}

export default App;
