import React, { Component } from "react";

export class Sum extends Component {
    constructor(props){
        super(props);

        this.state={
            number1: 0,
            number2: 0,
            sum: null,
        }
    }

    handleNum1Update(e){
        this.setState({
            number1: e.target.value,
        })
    }

    handleNum2Update(e) {
        this.setState({
            number2: e.target.value,
        })
    }

    handleSum(){
        let total = Number(this.state.number1)+Number(this.state.number2);
        this.setState({
            sum: total,
            number1: 0,
            number2: 0,
        })
    }


    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={(e)=>this.handleNum1Update(e)} onClick={()=>this.resetLine1()}/>
                <input className="inputLine" onChange={(e) => this.handleNum2Update(e)} onClick={() => this.resetLine2()} />
                <button className="confirmationButton" onClick={()=>this.handleSum()}>Add</button>
                <span className="resultsBox" >Sum: {this.state.sum}</span>
            </div>
        )
    }
}
