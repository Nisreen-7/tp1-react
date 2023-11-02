function Welcome (props){
    
        console.log(props);
       
        return (
            <>
                 <h1> hello ,{props.name}</h1>
                 <p> mon age est : {props.age}</p>
                 <p> mon travail est : {props.carieer}</p>

            </>
        )
       
    
}
export default Welcome;