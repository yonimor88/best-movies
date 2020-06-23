import React, {useState} from 'react';
import Avangers_endgame from './avangers_endgame.jpg'
import Dark_knight from './dark_knight.jpg'
import Mad_max from './mad_max.jpg'
import Matrix from './matrix.jpg'
import Star_wars from './star_wars.jpg'
import Main_movie from './components/Main_movie.js'
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";


function App() {
const movies = 
[{ name: 'Avangers_endgame', desc: 'the story of superheros fighting evil', img: Avangers_endgame ,rating: 0 },
{ name: 'Dark_knight', desc: 'the story of a superhero with no powers',img: Dark_knight , rating: 0 },
{ name: 'Mad_max', desc: 'a story about a post-apocalyptic world',img: Mad_max , rating: 0 },
{ name: 'Matrix', desc: 'what if our world is not real?',img: Matrix , rating: 0 },
{ name: 'Star_wars', desc: 'in a galaxy far far away....',img: Star_wars , rating: 0 }];

const [shownMovie, setShownMovie]=useState(movies)
const [background, setBackground]=useState('white')
const [rating, setRating]=useState(0)

console.log(rating);

  return (
    <div className="App">
      <div className="title">BM</div>
      <div className="top-movie">
        <button>
          <img
            className="top-movie-img"
            src={Avangers_endgame}
            alt="Avangers_endgame"
          />
        </button>
        <button>
          <img className="top-movie-img" src={Dark_knight} alt="Dark_knight" />
        </button>
        <button>
          <img className="top-movie-img" src={Matrix} alt="Matrix" />
        </button>
      </div>
      <div className="side-movie">
        <button>
          <img
            className="side-movie-img"
            src={Avangers_endgame}
            alt="Avangers_endgame"
          />
        </button>
        <br />
        <button>
          <img className="side-movie-img" src={Dark_knight} alt="Dark_knight" />
        </button>
        <br />
        <button>
          <img className="side-movie-img" src={Mad_max} alt="Mad_max" />
        </button>
        <br />
        <button>
          <img className="side-movie-img" src={Matrix} alt="Matrix" />
        </button>
        <br />
        <button>
          <img className="side-movie-img" src={Star_wars} alt="Star_wars" />
        </button>
      </div>
      <Main_movie rating={rating}
      />
    </div>
  );
}

export default App;
