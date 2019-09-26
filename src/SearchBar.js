import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="md-form mt-0">
        <input
          className="form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={event => this.props.filter(event.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;
