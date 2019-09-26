import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div class="md-form mt-0">
        <input
          class="form-control"
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
