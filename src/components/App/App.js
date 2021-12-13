import React from "react";
import ColorPicker from "../ColorPicker/ColorPicker";

import "./App.css";

export default class App extends React.Component {
  state = {
    red: 127,
    green: 127,
    blue: 127
  };

  change = (childValue) => {
    this.setState(childValue);
  };

  cancel = (childState) => {
    this.setState({
      ...childState
    });
  };

  render() {
    return (
      <div className="color-picker-app">
        <ColorPicker
          value={this.state}
          onChange={this.change}
          onCancel={this.cancel} />
      </div>
    );
  }
}
