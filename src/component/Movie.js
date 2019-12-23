import React, { Component } from 'react'
import { Link } from "react-router-dom";


class Movie extends Component {

  isRented = (event) => {
    event.preventDefault()
    this.props.isRented(this.props.movie.id)
  }

  render() {
    let movie = this.props.movie

    return (
        <Link to={`/catalog/movie/${movie.id}`}> 
      <div className="movie" id={movie.id} style={{ backgroundImage: `url(${movie.img})` }}>
        {movie.isRented ?
          <i className="fas fa-minus-circle" onClick={this.isRented}></i> :
          <i className="fas fa-plus-circle" onClick={this.isRented}></i>}
      </div>
          </Link>

    )
  }
}

export default Movie