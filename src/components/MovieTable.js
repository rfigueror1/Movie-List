var MovieTable = ({movies}) => (
  <table className='movie-table-main'>
    <caption className='movie-list-caption'>MovieList</caption>
    <tr>
      <td>
        <table className='movie-table'>
          <tbody>
            {movies.map((i) =>
              <MovieTableRow  movie={i} key={i.title}/>
            )}
          </tbody>
        </table>
      </td>
    </tr>
  </table>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
MovieTable.propTypes = {
  movies: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.MovieTable = MovieTable;
