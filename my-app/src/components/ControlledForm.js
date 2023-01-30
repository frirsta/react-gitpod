import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: '',
        category: '',
        textarea: '',
      }
    }

    handleNameChange = (event) => {
        this.setState({
            name:   event.target.value
        })
    }
    handleCategoryChange = (event) => {
        this.setState({
            category: event.target.value
        }, () => {
            console.log(this.state.category)
        })
    }

    handleTextareaChange = (event) => {
        this.setState({
            textarea: event.target.value
        }, () => {
            console.log(this.state.textarea)
        })
    } 

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    // handleChange = (event) => {
    //     const {name, value} = event.target
    //     this.setState({
    //         [name]: value
    //     })
    // }

  render() {
    return (
      <div>
        <h2>Fill out the form</h2>
        <form onSubmit={this.handleSubmit}>
            <div>
            <label htmlFor='id-name'>Your Name:</label>
            <input value={this.state.name}
            onChange={this.handleNameChange}
            id='id-name' 
            name='name' 
            type='text'
             />
        </div>
        <div>
             <label htmlFor='id-category'>Query category:</label>
             <select value={this.state.category} 
             onChange={this.handleCategoryChange}
             id='id-category' 
             name='category'>
                <option value='selected' defaultValue={this}>Choose category</option>
                <option value='website'>Website Issues</option>
                <option value='order'>Order Issues</option>
                <option value='general'>General inquiry</option>
             </select>
             </div>
             <div>
                <label htmlFor='id-comments'>Comments:</label>
                <textarea value={this.state.textarea}
                onChange={this.handleTextareaChange}
                id='id-comments' 
                name='comments' />
             </div>
            <input type='submit' value='Submit'/>
        </form>
      </div>
    )
  }
}

export default ControlledForm