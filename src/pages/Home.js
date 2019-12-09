import React, { Component } from "react";
import { Layout } from "./layout";
import { DatePicker } from "../components/DatePicker"


export class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            date1: '',
            date2: '',
            error: '',
            result: null
        }
    }
    handleChangeDate1 = (date) => {
        this.setState({
            date1: date
        })
        
    }
    handleChangeDate2 = (date) => {
        this.setState({
            date2: date
        })
        
    }
    handleClick = () => {
        const {date1 , date2} = this.state;
        const dateFrom1stInput = new Date(date1);
        const dateFrom2stInput = new Date(date2);
        console.log((dateFrom2stInput-dateFrom1stInput)/ (1000 * 3600 * 24));
    }

    render = () => {
        return (
            <Layout>
                
                <DatePicker change={ this.handleChangeDate1 } /> <br/>
                <DatePicker change={ this.handleChangeDate2 }/> <br/>
                <button className="space" onClick={this.handleClick}>
                    Calculate
                </button><br/>
            </Layout>
        );
    }
}