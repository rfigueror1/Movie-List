var Search = (props) => {
  return(
  <div className="search-bar form-inline">
    <input className="form-control" type="text"/>
    <button className="btn hidden-sm-down" onClick ={() => { props.chooseMovies(($('.form-control').val())); }}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>);

};

window.Search = Search;
