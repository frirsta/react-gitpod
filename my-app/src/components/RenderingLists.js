import React from 'react'
import Book from './Book'

function RenderingLists() {
    const bookList = [
        'Book 1',
        'Book 2',
        'Book 3',
    ]

    const books = [
     {
        title: 'Book 1',
        author: 'author 1',
        pages: 300,
     },
     {
        title: 'Book 2',
        author: 'author 2',
        pages: 300,
     },
     {
        title: 'Book 3',
        author: 'author 3',
        pages: 300,
     }
    ]

  return (
    <div>
        {
            bookList.map(book => {
                return <h2>{book}</h2>
            })}
            <hr />
           
         
            {
            books.map(books => {
                return <div><h5>{books.title}</h5>
                <p>{books.author}</p>
                <p>{books.pages}</p>
                </div>
            })
            }
            <hr />
            {
              books.map(book => {
                return <Book book={book} />
              })
            }
         

    </div>
  )
}

export default RenderingLists