// import logo from './logo.svg';
// import './App.css';
import Header from "./MovieComponents/Header";
import Movie from "./MovieComponents/Movie";
import movies from "./Movie.json";
function App() {
  let login = false;
  return (
    <div className="App  ">

{/* 
    {
      (()=>{
        if(login==true){
          return <h1 className="text-center">true</h1>

        }else{
          return <h1 className="text-center">false</h1>
        }
      })()
    } */}



      <Header></Header>

      <div className="main flex justify-center flex-wrap p-3">
        {movies.map((element, index) => {
          console.log(element, index);
          return (
            <Movie
              id={index}
              title={element.Title}
              year={element.Year}
              img={element.Poster}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
