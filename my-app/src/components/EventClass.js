import React, { Component } from 'react'


export class EventsClass extends Component {
  clickHandler(){
    console.log("class button")
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me - class component</button>
      </div>
    )
  }
}

export default EventsClass