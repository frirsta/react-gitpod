import React from 'react'

function EventFunctional() {
    function clickHandler() {
        console.log("clicked, functional button")
    }
  return (
    <div>
        <button onClick={clickHandler}>
            Click me - functional component
        </button>
    </div>
  )
}

export default EventFunctional