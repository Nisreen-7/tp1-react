import React from "react";

class Welcome extends React.Component{
    state = {
        firstName:"Sami",
        lastName:"Kh"
    }
render(){
    return(
        <>
        <h1>hello from class component,{this.props.name}</h1>
        <button onClick={()=>
        this.setState({
            lastName:"hhhhh"
        })

        }>
change my last name
        </button>
        <h6>created by : {this.state.firstName} {this.state.lastName}</h6>

        </>
         )
     
}
}
export default Welcome;