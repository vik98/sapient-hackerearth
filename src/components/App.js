import React from "react";

import hackerearth from "../apis/hackerearth";
import SearchBar from "./SearchBar";
import GameList from "./GameList";
import Footer from "./Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      currTerm: "",
      sortOrder: "",
      currGenre: "",
      currPlatform: "",
    };
  }

  onTermSubmit = (currTerm) => {
    this.setState({ currTerm });
  };

  onSortSubmit = (sortOrder) => {
    this.setState({ sortOrder });
  };

  onGenreSubmit = (currGenre) => {
    this.setState({ currGenre });
  };

  onPlatformSubmit = (currPlatform) => {
    this.setState({ currPlatform });
  };

  setInitialState = async () => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Origin": "*",
      server: "cloudflare-nginx",
    };
    const response = await hackerearth.get("/gamesext", {
      headers,
    });

    //console.log(Object.values(response.data));
    this.setState({ games: Object.values(response.data) });
  };

  componentDidMount() {
    this.setInitialState();
  }

  render() {
    console.log(this.state);

    return (
      <div className="ui container">
        <SearchBar
          onTermSubmit={this.onTermSubmit}
          onSortSubmit={this.onSortSubmit}
          onGenreSubmit={this.onGenreSubmit}
          onPlatformSubmit={this.onPlatformSubmit}
          genreList={Array.from(
            new Set(
              this.state.games.map((game) => {
                return game.genre;
              })
            )
          ).sort()}
          platformList={Array.from(
            new Set(
              this.state.games.map((game) => {
                return game.platform;
              })
            ).add("")
          ).sort()}
        />
        <div className="ui">
          <GameList
            games={this.state.games}
            currTerm={this.state.currTerm}
            sortOrder={this.state.sortOrder}
            currGenre={this.state.currGenre}
            currPlatform={this.state.currPlatform}
          />
        </div>
        <div className="ui inverted segment" style={{ border: "0" }}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
