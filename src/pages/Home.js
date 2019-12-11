import React, { Component } from "react";
import { Layout } from "./layout";
import { DatePicker } from "../components/DatePicker";
import { Error } from "../components/Error";
export class Home extends Component {
  constructor(props) {
    super(props);
    //  APP state
    this.state = {
      start: 0,
      end: 0,
      error: "",
      result: null
    };
  }
  // Handle datepicker change
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  // given to dates, this function returns the difference in days
  calculateDifference = (date1, date2) => {
    this.setState({
      result: Math.abs((date1 - date2) / (1000 * 3600 * 24))
    });
  };
  // Handleclick on calculate button
  handleClick = () => {
    // get start and end dates from states
    const { start, end } = this.state;
    const dateFrom1stInput = new Date(start);
    const dateFrom2stInput = new Date(end);
    // check in dates are invalid
    if (
      dateFrom1stInput.toString() === "Invalid Date" ||
      dateFrom2stInput.toString() === "Invalid Date" || 
      start === 0 || end === 0
    )
      this.setState({
        start: 0,
        end: 0,
        error: "You have supplied invalid dates",
        result: null
      });
    else {
      // remove error if there was one
      this.setState({
        error: ""
      });
      // caclulate the difference with the typed dates
      this.calculateDifference(dateFrom1stInput, dateFrom2stInput);
    }
  };
  // render function
  render = () => {
    return (
      <Layout>
     
       <h2 className="result"> Nimble Ways technical test</h2>

       
        {
          //display error if there is one
        this.state.error && <Error message={this.state.error} />
        }
        {
        // start date datepicker
        }
        <DatePicker
          change={this.handleChange}
          name="start"
          val={this.state.start}
        />{" "}
        
        {
          // end date datepicker
        }
        <DatePicker
          change={this.handleChange}
          name="end"
          val={this.state.end}
        />
       
        {
          //button the triggers the calculus
        }
        <input type="submit" onClick={this.handleClick}  value="Submit"/>
          
        
        <br />
        {
          //display the calculus result
        this.state.result && <div className="result">Result:  {this.state.result}  days</div>
        }
      
      </Layout>
    );
  };
}
