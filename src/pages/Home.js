import React, { Component } from "react";
import { Layout } from "./layout";
import { DatePicker } from "../components/DatePicker";
import { Error } from '../components/Error';
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      end: 0,
      error: "",
      result: null
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
 

  calculateDifference = (date1, date2) => {
    this.setState({
        result: Math.abs((date1-date2)/ (1000 * 3600 * 24))
    }) 
  }

  handleClick = () => {
    const { start, end } = this.state;
    const dateFrom1stInput = new Date(start);
    const dateFrom2stInput = new Date(end);
    if(dateFrom1stInput.toString() === "Invalid Date" ||
      dateFrom2stInput.toString() === "Invalid Date") 
       this.setState({
        start: 0,
        end: 0,
        error: 'You have supplied invalid dates',
        result: null
      }) 
      else{
          this.setState({
        error: ''
      });
      this.calculateDifference(dateFrom1stInput,dateFrom2stInput);
      } 

  };

  render = () => {
    return (
      <Layout>
          {
            this.state.error && <Error message={this.state.error}/>
          }
        <DatePicker change={this.handleChange} name="start" val={this.state.start} /> <br />
        <DatePicker change={this.handleChange} name="end" val={this.state.end}/> <br />
        <button className="space" onClick={this.handleClick}>
          Calculate
        </button>
        <br />
          {
            this.state.result && <span> {this.state.result} </span>
          }
      </Layout>
    );
  };
}
