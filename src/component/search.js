import React from 'react';
import Star from './star';

const Search = (props) => {
    return (
        <div>
            <input type="text" placeholder="Search movie" />
            <Star star={props.star} Starsearchparent={props.Starsearchparent} />
        </div>
    )
}
export default Search;