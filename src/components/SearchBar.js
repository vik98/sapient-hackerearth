import React from "react";
import { Icon } from "semantic-ui-react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currTerm: "",
      sortOrder: "",
      currGenre: "",
      currPlatform: "",
    };
  }

  onTermSubmit = (event) => {
    this.props.onTermSubmit(event.target.value);
  };

  inputChange = (event) => {
    this.setState({ currTerm: event.target.value }, this.onTermSubmit(event));
  };

  onGenreSubmit = (event) => {
    this.props.onGenreSubmit(event.target.value);
  };

  selectGenreChange = (event) => {
    this.setState({ currGenre: event.target.value }, this.onGenreSubmit(event));
  };

  onPlatformSubmit = (event) => {
    this.props.onPlatformSubmit(event.target.value);
  };

  selectPlatformChange = (event) => {
    this.setState(
      { currPlatform: event.target.value },
      this.onPlatformSubmit(event)
    );
  };

  sortAscending = (event) => {
    this.props.onSortSubmit("A");
  };

  sortDescending = (event) => {
    this.props.onSortSubmit("D");
  };

  removeSort = (event) => {
    this.props.onSortSubmit("N");
  };

  render() {
    console.log(this.props.genreList);

    const renderOptions = this.props.genreList.map((genre) => {
      return <option value={genre}>{genre}</option>;
    });

    const renderPlatforms = this.props.platformList.map((platform) => {
      return <option value={platform}>{platform}</option>;
    });

    return (
      <div className="ui inverted segment">
        <div className="ui form">
          <div className="field">
            <label style={{ color: "white" }}>
              <center>
                <h2 style={{ paddingBottom: 10 }}>Search for a Game</h2>
              </center>
            </label>
            <div className="ui one column stackable center aligned page grid">
              <div className="column fourteen wide">
                <input
                  style={{
                    marginBottom: 10,
                    border: 0,
                    borderRadius: 2.5,
                  }}
                  type="text"
                  value={this.state.currTerm}
                  onChange={this.inputChange}
                />{" "}
              </div>
            </div>
            <center>
              <h4 style={{ paddingBottom: 10 }}>Sort by score</h4>
            </center>
            <div className=" ui one column center aligned page grid ">
              <div className="column fourteen wide">
                <button
                  className="ui inverted white button"
                  onClick={this.sortAscending}
                >
                  Ascending
                </button>
                <button
                  className="ui inverted white button"
                  onClick={this.sortDescending}
                >
                  Descending
                </button>
                <button
                  className="ui inverted white button"
                  onClick={this.removeSort}
                >
                  Remove Sort
                </button>
              </div>
            </div>
            <div className="ui four column center aligned page grid">
              <div className="seven wide field">
                <label style={{ color: "white" }}>
                  <center>Select Genre</center>
                </label>
                <select
                  style={{ border: 0, borderRadius: 2.5 }}
                  className="ui search dropdown"
                  value={this.state.currGenre}
                  onChange={this.selectGenreChange}
                >
                  {renderOptions}
                </select>
              </div>
              <div className="seven wide field">
                <label style={{ color: "white" }}>
                  <center>Select Platform</center>
                </label>
                <select
                  style={{ border: 0, borderRadius: 2.5 }}
                  className="ui search dropdown"
                  value={this.state.currPlatform}
                  onChange={this.selectPlatformChange}
                >
                  {renderPlatforms}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
