import React, { Component } from 'react'

class MovieDetail extends Component {
    render() {
        let movieID = this.props.match.params.id
        let movies = this.props.state.movies
        let movie = movies.find(movie=> movie.id == movieID)
    
        return (
            <div className="movie-details">
        <h2>{`${movie.title} (${movie.year})`}</h2>

            <img src={movie.img} alt={movie.title} />

            <p>{movie.descrShort}</p> 
            
            </div>
        )
    }
}

export default MovieDetail