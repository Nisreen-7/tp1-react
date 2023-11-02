// import { useState } from "react";
import React from "react";
// components, state, props, handling events
// function Form(){
//     const [prenom,setPrenom]=useState('');
//     const [motPass,setMotPass]=useState('');
//     const [sexe,setSexe]=useState('');
// // // function pour name
// //     const prenomHandler=(value)=>
// //         {
// //             setPrenom(value);
// //         }
// //      // function pour password
   
// //     const motPassHandler=(value)=>
// //     {
// //         setMotPass(value);
// //     }
// // // function pour gender

// //     const sexeHandler=(value)=>
// //     {
// //         setSexe(value);
// //     }
//     let Handler = (set, value) => {
//         set(value);
//       };
    
//     return(
//         <form onSubmit={(e)=>{
//             e.preventDefault();
//             console.log('from submit');

//             console.log({
//                 prenom,
//                 motPass,
//                 sexe});
           
//         }}>
//             <label>Prenom:</label>
//             <input type="text" placeholder="Prenom" onChange={(event)=>
//             Handler(setPrenom,event.target.value)} />
//             <br />
//             <label>Mot de Pass:</label>
//             <input type="password" placeholder="Mot de Pass" onChange={(event)=>
//             Handler(setMotPass,event.target.value)} />
//             <br />
//             <label>Sexe</label>
// <select onChange={(event)=>
//             Handler(setSexe,event.target.value)}>
//     <option value="masculin">M </option>
//     <option value="feminin">F</option>

// </select>
// <br />
// <button type="submit">Envoyer</button>
//         </form>
//     )
// }


// le code avec le class
class Form extends React.Component{

constructor (props){
    super(props);
    this.state={
        prenom:'',
        motPass:'',
        sexe:''
    }
}

// function pour name
 prenomHandler = (value)=>
      {
          this.setState({prenom:value});
      }
   // function pour passw
   motPassHandler = (value)=>
  {
    this.setState({motPass:value});
  }
 //function pour ge
   sexeHandler = (value)=>
  {
    this.setState({sexe:value});
  }

render(){
    return(
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    console.log('from submit');
        
                    console.log(this.state);
                   
                }}>
                    <label>Prenom:</label>
                    <input type="text" placeholder="Prenom" 
                    onChange={(event)=>
                    this.prenomHandler(event.target.value)} />
                    <br />
                    <label>Mot de Pass:</label>
                    <input type="password" placeholder="Mot de Pass" 
                    onChange={(event)=>
                    this.motPassHandler(event.target.value)} />
                    <br />
                    <label>Sexe</label>
        <select 
        onChange={(event)=>
                    this.sexeHandler(event.target.value)}>
            <option value="masculin"> M </option>
            <option value="feminin"> F </option>
        
        </select>
        <br />
        <button type="submit">Envoyer</button>
                </form>
            )
}
}
export default Form;