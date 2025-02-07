import React from "react";

function Array() {
    let animals = ["cat", "dog", "rabbit", "hamster"];
    return(
        <div>
             {animals.map((animal, index) => (
                <h3>{animal}</h3>
             ))}
        </div>
    )
}


export default Array;