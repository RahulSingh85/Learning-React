import React from 'react'

function Fruit({name , price}) {
  return (
    // <li>The colour of {name} is {price} </li>
    <li>{price >= 100 ?  <h3>The price of {name} is {price}</h3> : ""}</li>
  )
}
// ? is the if statemant and : is the else statement
export default Fruit