import React from 'react'
import Rating from './rating'

const movieCardComponent = ({ movie}) => {
    return (
      
            <div className="card col-md-4" style={{ width: '20rem' }}>
                <Rating count={movie.star}/>
                <img className="card-img-top" src={movie.img} alt="IMG URL" />
                <div className="card-body">
                    <h5 className="card-title">{movie.name}</h5>
                    <p> Year : {movie.year}</p>
                    <p className="card-text">Duration :  {movie.duration}</p>
                    <p className="descrption">Description : {movie.description}</p>
                </div>
            </div>
        
    )
}

export default movieCardComponent;