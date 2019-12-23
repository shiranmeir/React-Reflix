import React, { Component } from "react";
import Movie from "./Movie";

class Catalog extends Component {

  handleSearch = (event) => {
    this.props.handleSearch(event)
  }

  render() {
    let movies = this.props.state.movies

    let searchInput = this.props.state.searchInput.toLowerCase()

    const userName = this.props.match.params.user
    
    return (
      <div className="catalog">
        <div className="search-container">
          <div>
          <input name="searchInput" type="text" placeholder="Search..." value={this.props.state.searchInput} onChange={this.handleSearch} />
          </div>
          <div>
          <span className="budget">Budget: {this.props.state.budget} $</span>
              {userName ? <span className="hello-user">User: {userName}</span> : null }
          </div>
        </div>
        <div className="movies">
          {movies.some(movie => movie.isRented) ?
            <div>
              <h2>Rented: </h2>
              <div className="movies-container">
                {movies.filter(movie => movie.isRented && movie.title.toLowerCase().includes(searchInput))
                  .map(movie => <Movie movie={movie} isRented={this.props.isRented} />)}
              </div>
            </div> : ""
          }

          <h2>Catalog:</h2>
          <div className="movies-container">
            {movies.filter(movie => movie.title.toLowerCase().includes(searchInput)).map(movie => <Movie key={movie.id} movie={movie} isRented={this.props.isRented} />)}
          </div>

        </div>
      </div>
    );
  }
}

export default Catalog;