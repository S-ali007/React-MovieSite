// import logo from './logo.svg';
// import './App.css';
import Header from "./MovieComponents/Header";
import Movie from  "./MovieComponents/Movie";
import movies from "./Movie.json"
function App() {
  return (
    <div className="App  ">
      <Header></Header>

      <div className="main flex justify-center flex-wrap p-3">
        {
          movies.map((element,index) => {
            console.log(element,index)
            return(
            < Movie
            id={index}
            title={element.Title}
            year={element.Year}
            img={element.Poster}
            />
            )
          })
        }
           </div>
    </div>
  );
}

export default App;
