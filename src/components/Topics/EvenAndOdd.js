import React, { Component } from "react";

export class EvenAndOdd extends Component {
    constructor(props){
        super(props)

        this.state={
            evenArray: [],
            oddArray: [],
            userInput: '',
        };

    }

    handleUserInput(e){
        this.setState({
            userInput: e.target.value,
        })
        // console.log(this.state.userInput);
    }

    handleSaveUserInput(){
        // let evens = JSON.parse("["+this.state.userInput+"]");
        // console.log(evens);
        let arr = Array.from(this.state.userInput);
        let evens = arr.filter(val=>val%2===0);
        let odds = arr.filter(val=>val%2);
        console.log(odds);
        
        this.setState({
            evenArray: evens,
            oddArray: odds,
            userInput: '',
        })
         
    }

    // startOver(){
    //     this.setState({
    //         userInput: '',
    //     })
    // }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={(e)=>this.handleUserInput(e)} value={this.state.userInput}></input>
                <button className="confirmationButton" onClick={()=>this.handleSaveUserInput()} >Try Me Out</button>
                <span className="resultsBox">These are the evens: {this.state.evenArray}</span>
                <span className="resultsBox">These are the odds: {this.state.oddArray}</span>
            </div>
        )
    }
}
