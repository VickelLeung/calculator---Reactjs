import React, { Component } from 'react';

import Control from './Control/Control'
import NumberPad from './Control/NumberPad'
import './Calculator.css'

class Calculator extends Component {

    state = {
        userInput: null,
        number: "",
        totalStr: "",
        total: 0,
        clickedNumb: false
    }

    receiveNum = (props) => {
        console.log('clcied');
    }

    userInput = (props) => {
        // console.log(props.target.value);
        if (isNaN(props.target.value)) {
            console.log("is not a number");
        }
        // set state to number
        else {
            let numberUser = props.target.value;

            // if (this.state.number != null) {
            //     console.log("not null");
            //     numberUser += this.state.number;
            // }

            this.setState({ userInput: numberUser });

        }
        console.log("state:" + this.state.number);

        // this.setState(this.userInput = props.target.value);

    }

    addNumber(e) {

        // console.log(e);
        // this.userInput(e)

        //get previous state to add
        let prevNumb = this.state.number;
        // let userNumb = this.state.userInput;

        //add the previous state to current
        prevNumb = prevNumb + "" + e;

        if (this.state.userInput != null) {
            console.log("this is not empty");
            prevNumb += this.state.userInput;
        }

        //set the state
        this.setState({
            number: prevNumb
            // userInput: userNumb
        });

        this.toggleNumber();
        // console.log("prevNumb:" + prevNumb);

    }

    addition = () => {
        let newStr = "";
        if (this.state.clickedNumb) {
            if (this.state.totalStr === "")
                newStr = this.state.number;
            else
                newStr = this.state.totalStr + " + " + this.state.number;

            console.log(newStr);

            let sum = eval(newStr);
            // sum = eval(newStr);
            // sum += this.state.number;

            //reset number
            this.setState({
                totalStr: newStr,
                total: sum,
                number: "",
                clickedNumb: false
            });

            //reset input screen

        }

        // console.log(eval('1+2'));
        // console.log(this.state.total);
    }

    substract = () => {
        let newStr = "";
        if (this.state.clickedNumb) {
            if (this.state.totalStr === "")
                newStr = this.state.number;
            else
                newStr = this.state.totalStr + " - " + this.state.number;

            console.log(newStr);

            let sum = eval(newStr);

            //reset number, reset input screen
            this.setState({
                totalStr: newStr,
                total: sum,
                number: "",
                clickedNumb: false
            });
        }
    }

    displayTotal = () => {

    }

    toggleNumber = () => {
        this.setState({ clickedNumb: true });
    }

    automateCalculation = () => {

    }

    render() {
        return (
            <div className="Calculator">
                {/* defaultValue="" */}
                {/* value={this.state.number} */}
                <input input='number' defaultValue={this.state.number || ""} onChange={(e) => this.userInput(e)} />
                <div className="control">
                    <Control name="+" clickOperation={this.addition} />
                    <Control name="-" clickOperation={this.substract} />
                    <Control name="*" />
                    <Control name="/" />
                </div>
                <div>
                    <NumberPad number='0' clicked={(e) => this.addNumber(0)} />
                    <NumberPad number='1' clicked={(e) => this.addNumber(1)} />
                    <NumberPad number='2' clicked={(e) => this.addNumber(2)} />
                    <NumberPad number='3' clicked={(e) => this.addNumber(3)} />
                    <br />
                    <NumberPad number='4' clicked={(e) => this.addNumber(4)} />
                    <NumberPad number='5' clicked={(e) => this.addNumber(5)} />
                    <NumberPad number='6' clicked={(e) => this.addNumber(6)} />
                    <NumberPad number='7' clicked={(e) => this.addNumber(7)} />
                    <br />
                    <NumberPad number='8' clicked={(e) => this.addNumber(8)} />
                    <NumberPad number='9' clicked={(e) => this.addNumber(9)} />
                    <NumberPad number='.' />
                    <NumberPad number='=' />
                    <NumberPad number='C' clicked={this.cancel} />

                </div>
                <div>
                    {/* display calculation */}
                    <p>Calculation: {this.state.totalStr} </p>
                    <h2>Total: {this.state.total}</h2>
                </div>

                <div>
                    <p>totalStr: {this.state.totalStr}</p>
                    <p>number: {this.state.number}</p>
                    <p>total: {this.state.total}</p>
                    <p>clickNumb: {this.state.clickedNumb}</p>
                </div>

            </div >
        )
    }
};

export default Calculator;