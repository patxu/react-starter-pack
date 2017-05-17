import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchterm: '' };
    this.onInputChanged = this.onInputChanged.bind(this);
  }

  onInputChanged(event) {
    this.setState({ searchterm: event.target.value });
    this.props.onSearchChange(event.target.value);
  }

  render() {
    return (
      <div id="search-bar">
        <input onChange={this.onInputChanged} value={this.state.searchterm} />
      </div>
    );
  }
}

export default SearchBar;
