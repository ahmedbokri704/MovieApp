import React from 'react';
import Moviecard from './moviecard';
import Addmovie from './addmovie';
import Search from './search';

const Movielist = (props) => {
    return (
        <div>
            <Search Starsearchparent={props.Starsearchparent} star={props.starnumber} />
            {props.listmovies.filter((movie) => movie.movierate >= props.starnumber)
                .map((movie, index) => (
                    <div key={index}>
                        <Moviecard movie={movie} />
                    </div>
                ))}
            <Addmovie Addmovieparent={props.Addmovieparent} />
        </div>
    )
}

export default Movielist;