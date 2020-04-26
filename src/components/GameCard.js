import React from "react";

class GameCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className=" column">
        <div
          className="ui fluid card"
          style={{
            border: "1px solid black",
            borderRadius: "2.5px",
          }}
        >
          <div className="image">
            <img
              src={
                "https://picsum.photos/id/" +
                Math.floor(Math.random() * 100 + 1) +
                "/200/200"
              }
              style={{ height: "200px" }}
            />
          </div>
          <div className="content">
            <div className="header">{this.props.game.title}</div>
            <div className="meta">{this.props.game.release_year}</div>
            <br></br>
            <div className="header">
              <p style={{ display: "inline", color: "#9f9fa1" }}>Platform: </p>
              <kbd>{this.props.game.platform}</kbd>
            </div>
            <div className="header">
              <p style={{ display: "inline", color: "#9f9fa1" }}>Genre: </p>
              <kbd>{this.props.game.genre}</kbd>
            </div>
          </div>

          <div className="extra content">
            <span className="right floated">
              {this.props.game.editors_choice == "Y" ? "Editors Choice" : ""}
            </span>
            <span>
              <i className="check icon"></i>
              Score : {this.props.game.score}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default GameCard;
