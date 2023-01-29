import React from "react";

class StatefulGreetingWithPrevState extends React.Component{

    constructor(props) {
        super(props);
        this.state = { //Initial state
        introduction: "Hello",
        buttonText: "Exit",
        count: 0,
        };
    }
    // that is, setState is an asynchronous function  - the first new concept we’re exploring in  
    // this video. This means that, effectively,  setState is executing in the background  
    // while the rest of the code continues  executing.
    handleClick() {
        this.setState((prevState, prevProps) => {
          console.log("Previous State: ", prevState);
          console.log("Previous Props: ", prevProps);
          return {
            // Use prevState or prevProps to call on state
            introduction: prevState.introduction === "Hello" ? "Goodbye" : "Hello",
            buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
          }
        })
       }
       

    increment() {
        this.setState((prevState, prevProps) => {
            console.log("Previous State:", prevState)
            console.log("Previous Props:", prevProps)
            return {
                count: prevState.count + 1
            }
        })
  
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <br />
                <button onClick={() => this.increment()}>{this.state.count}</button>
            </div>
        )
    }
}

export default StatefulGreetingWithPrevState;