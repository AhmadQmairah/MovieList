import React from "react";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";

function App() {
  return (
    <div className="container">
      <AddMovie />
      <div className="row ">
        <div className="col-6">
          <h6 className="text-center">WatchList</h6>
          <MovieList watched={false} key="WishList" />
        </div>

        <div className="col-6">
          <h6 className="text-center">Watched</h6>
          <MovieList watched={true} key="WatchList" />
        </div>
      </div>
    </div>
  );
}

export default App;
