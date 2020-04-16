import React from 'react';
import Star from './star';

const Moviecard = (props) => {
    return (
        <div>
            <p>{props.movie.name}</p>
            <Star star={props.movie.movierate} />
        </div>
    )
}

export default Moviecard;