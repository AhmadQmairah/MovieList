import React from "react";
import { connect } from "tls";

class MovieList extends React.Component {
  render() {
    return (
      <li class="list-group-item">
        {movie}
        <button type="button" class="btn btn-primary">
          watch
        </button>
        <button type="button" class="btn btn-danger">
          Delete
        </button>
      </li>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(MovieList);
