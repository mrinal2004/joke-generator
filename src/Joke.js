import React, { useEffect, useState } from "react";
const Joke=()=>
{
    const[Joke, setJoke]=useState("")
    function fetchAPI()
    {
         fetch('https://v2.jokeapi.dev/joke/Dark?blacklistFlags=nsfw&type=single')
      .then(response=>response.json())
 
      .then(data =>setJoke(data.joke));
    }
    useEffect(()=>{
        fetchAPI();
    }, [])
        return(
            <div>
            <button className="comic-button"onClick={fetchAPI}>Give me another</button>
           <br></br><p>{Joke}</p>
           </div>
        )
}

export default Joke
// fetch('https://v2.jokeapi.dev/joke/Dark?blacklistFlags=nsfw&type=single')
//     // .then(response=>response.json())
//     // .then(data => console.log(data.joke));