import React from 'react';
import starfilled from "../constant/filedstar.svg";
import emptystar from "../constant/EmptyStar.svg";

const Star = (props) => {
    const addstar = () => {
        let arr = []
        for (let i = 0; i < 5; i++) {
            i < (props.star) ?
                (arr.push(<p onClick={() => props.Starsearchparent(i + 1)}><img src={starfilled} alt="filled img" style={{ height: "25px", width: "25px" }} /></p>)) :
                (arr.push(<p onClick={() => props.Starsearchparent(i + 1)}><img src={emptystar} alt="empty img" style={{ height: "25px", width: "25px" }} /></p>))
        }
        return arr
    }
    return (
        <div>
            {addstar()}
        </div>
    )
}
export default Star;