class MovieTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: this.props.movie
    };
  }

  // Currently, the image being displayed is hardcoded from tinyurl.com
  render() {
    return (
      <tr>
        <td className="movie-name" width='200px'>{this.state.movieData.title}</td>
      </tr>
    )
  }
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
MovieTableRow.propTypes = {
  movie: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.MovieTableRow = MovieTableRow;
