import React, {useState}  from 'react'
import Avangers_endgame from './avangers_endgame.jpg'
import Dark_knight from './dark_knight.jpg'
import Mad_max from './mad_max.jpg'
import Matrix from './matrix.jpg'
import Star_wars from './star_wars.jpg'

export default function Main_movie() {
    const [background, setBackground]=useState('white')

    const [rating, setRating]=useState(0)

    return (
        <div className="main-movie">
        <p>movie name</p>
        <button>
          <img
            className="main-movie-img"
            src={Avangers_endgame}
            alt="Avangers_endgame"
          />
        </button>
        <br />
        <button className="rating" style={{background}} onClick={()=> setRating(1)}>1</button>
        <button className="rating" style={{background}} onClick={()=> setRating(2)}>2</button>
        <button className="rating" style={{background}} onClick={()=> setRating(3)}>3</button>
        <button className="rating" style={{background}} onClick={()=> setRating(4)}>4</button>
        <button className="rating" style={{background}} onClick={()=> setRating(5)}>5</button>
        <p>description: </p>
      </div>
    )
}

