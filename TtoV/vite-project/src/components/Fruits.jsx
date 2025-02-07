import React from "react";

import Fruit from "./Fruit";

function Fruits() {
    let fruits = [{name : "apple", price : 100}, 
        {name : "banana", price : 70}, 
        {name : "grapes", price : 120},
        {name : "mango", price : 150},
        {name : "orange", price : 80}
    ];
    return(
        <div>
            {fruits.map(fruit =>(  
                <Fruit name={fruit.name} price={fruit.price}/>
            ))}
        </div>
    );
    
}

export default Fruits;