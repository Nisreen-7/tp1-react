import Button from "./Button";
function Product(props){
    return(
        <div className="product-card">
         <h1>{props.title}</h1>
        <p>{props.description}</p>
        <span>{props.price}</span>
        <Button title="Details" />
        </div>
       
    )
}
export default Product;