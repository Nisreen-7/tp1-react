import { useState } from "react";

function WelcomeFc (props){
    
        console.log(props);
       let [counter, setCounter] = useState(0);
        return (
            <>
                 <h1> hello ,{props.name}</h1>
                 <p> mon age est : {props.age}</p>
                 <p> mon travail est : {props.carieer}</p>
                 <h4>{counter}</h4>
                 <button 
                 onClick={()=>
                 setCounter(counter + 1)
                 }>
                     +
                 </button>
            </>
        )
       
    
}
export default WelcomeFc;