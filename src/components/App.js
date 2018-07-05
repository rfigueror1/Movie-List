class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: window.movieData,
      currentMovie: window.movieData[0]
    };

  }

  chooseMovies (movie) {
    //perform query
    var result = [];
    var data = window.movieData;
    console.log(data);

    for(var i = 0; i<data.length; i++){
      if(data[i].title.indexOf(movie)>=0){
        result.push(data[i]);
      }
    }
    this.setState({'movies': result});
  }

  render() {
    return(
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em></em><Search chooseMovies={this.chooseMovies.bind(this)}/></h5></div>
        </div>
      </nav>
        <div className="col-md-5">
          <div><h5><em></em><MovieTable movies = {this.state.movies}/></h5></div>
        </div>
      </div>
    );
  }
}

window.App = App;
