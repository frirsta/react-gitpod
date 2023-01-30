import React, { Component } from 'react'

export class UncontrolledForm extends Component {
    constructor(props) {
      super(props)
      this.inputName = React.createRef();
      this.categorySelect = React.createRef();
      this.textarea = React.createRef();
    }



    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.inputName.current.value)
        console.log(this.categorySelect.current.value)
        console.log(this.textarea.current.value)

    }


  render() {
    return (
      <div>
        <h2>Fill out the form</h2>
        <form onSubmit={this.handleSubmit}>
            <div>
            <label htmlFor='id-name'>Your Name:</label>
            <input id='id-name' 
            name='name' 
            type='text'
            ref={this.inputName}
             />
        </div>
        <div>
             <label htmlFor='id-category'>Query category:</label>
             <select id='id-category' 
             name='category'
             ref={this.categorySelect}>
                <option value='website'>Website Issues</option>
                <option value='order'>Order Issues</option>
                <option value='general'>General inquiry</option>
             </select>
             </div>
             <div>
                <label htmlFor='id-comments'>Comments:</label>
                <textarea 
                ref={this.textarea}
                id='id-comments' 
                name='comments' />
             </div>
            <input type='submit' value='Submit'/>
        </form>
      </div>
    )
  }
}

export default UncontrolledForm