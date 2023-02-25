import React, { useState } from "react";

const Counter = function() {
    const [likes, setLikes] = useState(0);
    function increment(){
        setLikes(likes + 1);
      }
      function descrement(){
        setLikes(likes - 1);
      }
    
      return (
        <div>
        <h1>{likes}</h1>
        <button onClick = {increment}>Increment</button>
        <button onClick = {descrement}>Descrement</button>
        </div>
        
      )

}

export default Counter;

