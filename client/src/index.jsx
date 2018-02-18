import React from 'react';
import ReactDOM  from 'react-dom';


class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
    	movies : [
		  {title: 'Mean Girls'},
		  {title: 'Hackers'},
		  {title: 'The Grey'},
		  {title: 'Sunshine'},
		  {title: 'Ex Machina'},
		]
    }
  }

  render() {
    return (
      <div className="movielist">
      	<div className="header">
      	<h1>Movie List</h1>
      	</div>
      	<div className="movies">
      	{this.state.movies.map((movie, index)=><div className="movie"key={index}><p>{movie.title}</p></div>)}
      	</div>
      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
