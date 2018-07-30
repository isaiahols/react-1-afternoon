import React, { Component } from "react";

export class FilterObject extends Component {
    constructor(props){
        super(props)

        this.state={
            unFilteredArray: [
                {
                     "name": "Jimmy Joe", 
                     "title": "Hack0r", 
                     "age": 12 
                }, 
                {
                     "name": "Jeremy Schrader", 
                     "age": 24,
                     "hairColor": "brown" 
                }, 
                { 
                    "name": "CarlyArmstrong", 
                    "title": "CEO" 
                }],
            userInput: '',
            filteredArray: [],
        }
    }

    updateUserInput(e){
        this.setState({
            userInput: e.target.value,
        })
    }

    filterArray(){
        let filtered = this.state.unFilteredArray.filter((obj)=>{
            for(let key in obj){
                if(key===this.state.userInput){
                    console.log(obj[key]);
                    return obj;
                }
            }
            return false;
        });
        
        this.setState({
            filteredArray: filtered,
            userInput: '',
        })
        
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <span className="puzzleText" >Original: {JSON.stringify(this.state.unFilterArray, null, 10)}</span>
                {/* I am not able to display the objects */}
                <h4>Filter Object</h4>
                <input className="inputLine" onChange={(e)=>this.updateUserInput(e)} value={this.state.userInput}/>
                <button className="confirmationButton" onClick={()=>this.filterArray()} >Test Me!</button>
                <span className="resultsBox filterObjectRB" >Filtered: {JSON.stringify(this.state.filterArray, null, 10)}</span>
                {/* I am not able to display the objects */}
            </div>
        )
    }
}
