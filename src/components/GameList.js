import React from "react";
import _ from "lodash";
import { Icon, Pagination } from "semantic-ui-react";

import GameCard from "./GameCard";

class GameList extends React.Component {
  constructor(props) {
    super(props);
    _.forEach(this.props.games, function (e, i) {
      e.originalIndex = i;
    });
    this.state = {
      games: this.props.games,
      currPage: 1,
      gamesPerPage: 8,
    };
  }
  onNextPageClick = (event, data) => {
    this.setState({ currPage: Number(data.activePage) });
  };
  render() {
    const { currPage, gamesPerPage } = this.state;

    // console.log(typeof this.props.games[0]);
    // console.log(typeof Object.entries(this.props.games));
    // this.props.games.map((game) => console.log(Object.values(game)));
    // const renderedList = this.props.games.map((game) => {
    //   return <GameCard game={Object.values(game)} />;
    // });

    // console.log(this.props.sortOrder);
    let gamesArray = [];
    if (this.props.sortOrder === "N") {
      gamesArray = _.sortBy(this.props.games, "originalIndex");
    } else if (this.props.sortOrder === "A") {
      gamesArray = _.sortBy(this.props.games, "score");
    } else if (this.props.sortOrder === "D") {
      gamesArray = _.sortBy(this.props.games, "score").reverse();
    } else {
      gamesArray = this.props.games;
    }
    const renderedGamesArray = gamesArray
      .filter((game) => {
        // console.log(game);
        //const gamei = Object.values(game);
        //console.log(typeof gamei[0].toString());
        if (this.props.currTerm == null) {
          return game;
        } else if (
          game.title
            .toString()
            .toLowerCase()
            .includes(this.props.currTerm.toLowerCase())
        ) {
          //console.log(game.title);
          return game;
        }
      })
      .filter((game) => {
        if (this.props.currGenre == "") {
          return game;
        } else if (
          game.genre.toString().toLowerCase() ==
          this.props.currGenre.toLowerCase()
        ) {
          return game;
        }
      })
      .filter((game) => {
        if (this.props.currPlatform == "") {
          return game;
        } else if (
          game.platform.toString().toLowerCase() ==
          this.props.currPlatform.toLowerCase()
        ) {
          return game;
        }
      })
      .map((game) => {
        //console.log(game.title);
        //return <GameCard game={game} key={game.originalIndex} />;
        return game;
      });

    console.log(renderedGamesArray);

    const indexOfLastGame = currPage * gamesPerPage;
    const indexOfFirstGame =
      indexOfLastGame - gamesPerPage < 0 ? 0 : indexOfLastGame - gamesPerPage;
    const currGames = renderedGamesArray.slice(
      indexOfFirstGame,
      indexOfLastGame
    );

    const renderedList = currGames.map((game) => {
      return <GameCard game={game} key={game.originalIndex} />;
    });

    const pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(renderedGamesArray.length / gamesPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }

    const renderedPageNumbers = pageNumbers.map((number) => {
      return (
        <a
          className="item"
          key={number}
          id={number}
          onClick={this.onNextPageClick}
        >
          {number}
        </a>
      );
    });

    return (
      <div className="ui segment" style={{ border: "0" }}>
        <h1>
          <center>Games:</center>
        </h1>
        <div
          className="ui segment"
          style={{ textAlign: "center", border: "none" }}
        >
          <Pagination
            style={{ margin: "0 auto", border: "1px solid  black" }}
            activePage={this.state.currPage}
            onPageChange={this.onNextPageClick}
            totalPages={pageNumbers.length}
            ellipsisItem={{
              content: <Icon name="ellipsis horizontal" />,
              icon: true,
            }}
            firstItem={{
              content: <Icon name="angle double left" />,
              icon: true,
            }}
            lastItem={{
              content: <Icon name="angle double right" />,
              icon: true,
            }}
            prevItem={{ content: <Icon name="angle left" />, icon: true }}
            nextItem={{ content: <Icon name="angle right" />, icon: true }}
          />
        </div>
        <div className="ui four column grid">{renderedList}</div>
      </div>
    );
  }
}

export default GameList;
