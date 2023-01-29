import React from "react";

class StatefulComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = { //Initial state
        introduction: "Hello!",
        buttonText: "Exit",
        };
    }
    // that is, setState is an asynchronous function  - the first new concept we’re exploring in  
    // this video. This means that, effectively,  setState is executing in the background  
    // while the rest of the code continues  executing.
    handleClick() {
        this.setState({
            introduction: "Goodbye",
            buttonText: "Enter",
        }, ()=>{
            console.log("New state,", this.state.introduction);
            console.log("New state,", this.state.buttonText);
        });
        console.log(this.state.introduction);
        console.log(this.state.buttonText);
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.name} {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default StatefulComponent;