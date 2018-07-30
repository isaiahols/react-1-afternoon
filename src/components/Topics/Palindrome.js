import React, { Component } from "react";

export class Palindrome extends Component {
    constructor(props){
        super(props);

        this.state={
            userInput: '',
            palindrome: '',
        }
    }

    handleUserInput(e){
        this.setState({
            userInput: e.target.value,
        })
    }

    checkForPalindrome(){
        let backwords = this.state.userInput.split('').reverse().join('');
        let checker = backwords===this.state.userInput?"true":"false";
        this.setState({
            palindrome: checker,
            userInput: ''
        })
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e)=>this.handleUserInput(e)} value={this.state.userInput}/>
                <button className="confirmationButton" onClick={()=>this.checkForPalindrome()} >Test Me</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}
