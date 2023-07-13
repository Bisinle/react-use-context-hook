import React from 'react'
import { userContext } from '../App'


function ComponentF() {
  return (
    <div>
        <userContext.Consumer>
            {
                user => {
                    return <h1>User: {user}</h1>
                }
            }
        </userContext.Consumer>
        
        
        </div>
  )
}

export default ComponentF