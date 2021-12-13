import React from "react";
import Sliders from "../Sliders/Sliders";
import "./ColorPicker.css"

export default class ColorPicker extends React.Component {
  state = {
    ...this.props.value
  };

  onChange = (e) => {
    this.props.onChange({
      [e.target.name]: e.target.valueAsNumber
    });
  };

  onSubmit = () => {
    this.setState({
      ...this.props.value
    });
  };

  onCancel = () => {
    this.props.onCancel(this.state);
  };

  render() {
    const {red, green, blue} = this.props.value;
    console.log('Current:');
    console.log(this.state);
    console.log('Parent:');
    console.log(this.props.value);

    const squareStyle = {
      backgroundColor: `rgb(${red}, ${green}, ${blue})`
    };
    
    return (
        <div className="color-picker-app-wrapper">
          <div className="color-square" style={squareStyle} />
          <Sliders
            value={this.props.value}
            onChange={this.onChange}
            onCancel={this.onCancel}
            onSubmit={this.onSubmit} />
        </div>
    );
  }
}