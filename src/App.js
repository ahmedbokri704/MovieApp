import React, { useState } from 'react';
import { movies } from "./constant/data"
import Movielist from './component/movielist';

const App = () => {
  const [listmovies, setListmovies] = useState(movies)
  const [star, setStar] = useState(0)

  const Addmovieparent = (newmovie) => {
    setListmovies([...listmovies, newmovie])
  }
  const Starsearchparent = (star) => {
    setStar(star)
  }
  return (
    <div>
      <Movielist listmovies={listmovies} Addmovieparent={Addmovieparent} Starsearchparent={Starsearchparent} starnumber={star}/>
    </div>
  )
}

export default App