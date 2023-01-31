import React, {useState} from 'react'

function ControlledFormHooks() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('website');
    const [comments, setComments] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, category, comments)
    }

  return (
    <div>
        <h2>Fill out the form</h2>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor='id-name'>Your Name:</label>
            <input value={name}
            onChange={(e) => setName(e.target.value)}
            id='id-name' 
            name='name' 
            type='text'
             />
        </div>
        <div>
             <label htmlFor='id-category'>Query category:</label>
             <select value={category} 
             onChange={(e) => setCategory(e.target.value)}
             id='id-category' 
             name='category'>
                <option value='selected'>Choose category</option>
                <option value='website'>Website Issues</option>
                <option value='order'>Order Issues</option>
                <option value='general'>General inquiry</option>
             </select>
             </div>
             <div>
                <label htmlFor='id-comments'>Comments:</label>
                <textarea value={comments}
                onChange={(e) => setComments(e.target.value)}
                id='id-comments' 
                name='comments' />
             </div>
            <input type='submit' value='Submit'/>
        </form>
      </div>
  )
}

export default ControlledFormHooks