import React , {useState} from 'react'

const Counter = () => {
    const[count , setCount] = useState(0)
    const[factor , setFactor] = useState(1)

function increment(){
    setCount(count + factor);

}

function decreament(){
    setCount(count - factor);
}


function increamentFactor(){
    setFactor(factor + 1);
}

function decreamentFactor(){
    setFactor(factor - 1);
}

  return (

    <div>

        <h3>This is my counter : {count}</h3>

        <button onClick={increment}>Increment</button>

        <button onClick={decreament}>Decrement</button>


        <h3> Set my Factor : {factor}</h3>

        <button onClick={increamentFactor}>IncreamentFactor</button>

        <button onClick={decreamentFactor}>DecreamentFactor</button>
    </div>
  )
}

export default Counter