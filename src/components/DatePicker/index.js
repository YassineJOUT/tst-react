import React, { Component } from "react";

export class DatePicker extends Component {
  handleChange = e => {
    this.props.change(e);
  };

  render = () => {
    return (
        // date picker input 
        <div>
          <label>
            {this.props.name} date
            </label>
       
      <input
        type="date"
        name={this.props.name}
        className="space"
        onChange={this.handleChange}
        value={this.props.val}
      />
       </div>
    );
  };
}
