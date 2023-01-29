import React from 'react'

function UserMessage(props) {
  return (
    <div>
        {
        props.isLoggedIn ? (
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
    )}</div>
  )
}

export default UserMessage