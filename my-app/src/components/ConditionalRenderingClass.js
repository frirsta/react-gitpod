import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: true,
         isLoggedIn: true,
      }
    }
  render() {
    return (
      <div>
        <h1>{this.state.isLoaded ? "Data Loaded!" : "Loading..."}</h1>
        {this.state.isLoggedIn ? (
            <div>
                <p>Welcome to the site! Please complete the steps below:</p>
                <ol>
                    <li>Confirm your email</li>
                    <li>Complete Profile</li>
                    <li>Subscribe</li>
                </ol>
            </div>
        ) : (
            <div>
                <p>Please sign in</p>
            </div>
        )}
      </div>
    )
  }
}

export default ConditionalRenderingClass