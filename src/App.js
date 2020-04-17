import React, { Component } from 'react'
import Spinner from './components/spinner';
import MoviePage from './page/movie-page';
import './App.css';

export default class App extends Component {

  state = {
    isLoading: true
  }

  componentDidMount() {
    setTimeout(
      () => {
        this.setState({
          isLoading: !this.state.isLoading
        })
      }, 3000
    )
  }

  render() {
    return (
      <div className="App" >
        **My Movie App**
        {this.state.isLoading ? <Spinner /> : <MoviePage />}
      </div>
    )
  }
}