import React, { Component } from "react";

export class FilterString extends Component {
    constructor(props){
        super(props);

        this.state={
            unFilteredArray: ['this','is','a','test','for'],
            userInput: '',
            filteredArray: [],
        }
    }

    handleUserInput(e){
        this.setState({
            userInput: e.target.value,
        })
    }

    handleUpdateArray(){
        console.log(this.state.userInput)
        let filtering = this.state.unFilteredArray.filter((val)=>val.includes(this.state.userInput))
        console.log(filtering);
        this.setState({
            filteredArray: filtering,
            userInput: '',
        })
        
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4 >Filter String</h4>
                <span className="puzzleText" >All words: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={(e)=>this.handleUserInput(e)} value={this.state.userInput}/>
                <button className="confirmationButton" onClick={()=>this.handleUpdateArray()} ></button>
                <span className="resultsBox filterStringRB">Filtered Words: {JSON.stringify(this.state.filteredArray,null,10)}</span>
            </div>
        )
    }
}
