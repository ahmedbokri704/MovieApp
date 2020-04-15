import React from 'react'
import MovieCard from './Movie-card-components'

const MovieCardContainer = ({movies}) => {
    return (
        <div className="cards row">
            {movies.map(movie => <MovieCard movie={movie} />)}
        </div>
    )
}

export default MovieCardContainer;