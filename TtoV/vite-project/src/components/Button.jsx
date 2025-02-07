import React from 'react'

function Button() {

    function sayHello() {
        console.log('Hello')
    }
  return (
     <button onClick = {sayHello}>Click me</button>
)
}

export default Button