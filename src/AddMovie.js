import React from "react";
import { connect } from "react-redux";
import addmovie, { setInput } from "./redux/actions";
class AddMovie extends React.Component {
  render() {
    return (
      <div className="input-group mb-3 container w-25 mt-5">
        <input
          type="text"
          className="form-control"
          placeholder="Movie"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={event => this.props.setInput(event.target.value)}
        />

        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => this.props.addMovie(this.props.input)}
          >
            Add Movie
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addMovie: movie => dispatch(addmovie(movie)),
    setInput: input => dispatch(setInput(input))
  };
};

const mapStateToProps = state => {
  return {
    input: state.input
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMovie);
