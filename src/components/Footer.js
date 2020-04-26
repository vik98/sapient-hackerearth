import React from "react";
import { Icon } from "semantic-ui-react";

const Footer = (props) => {
  return (
    <div className="ui inverted vertical footer segment">
      <div className="ui center aligned container">
        <Icon name="chess king" className="ui centered mini image" size="big" />
      </div>
      <br />
      <div className="ui center aligned container">
        <div className="ui horizontal inverted small divided link list">
          <a className="item" href="https://github.com/vik98">
            Developed by Vikramsingh
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
