import React, { Component } from "react";

export class DatePicker extends Component {
  handleChange = e => {
    this.props.change(e);
  };

  render = () => {
    return (
        // date picker input 
      <input
        type="date"
        name={this.props.name}
        className="space"
        onChange={this.handleChange}
        value={this.props.val}
      />
    );
  };
}
