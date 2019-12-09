import React, { Component } from 'react';


export class DatePicker extends Component{
    
    handleChange = (e) =>
    {
        this.props.change(e.target.value);
    }

    render = () => {
        return (<input type="date" name="date" className="space" onChange={this.handleChange} />);
    }

}