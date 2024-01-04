import React from "react"
import {
    Card,
    CardImg,
    CardText,
    CardTitle,
    CardBody,
    Button
} from "reactstrap"

const CartItem=({product, addincart})=>{
return(
    <Card className="mt-2 mb-1">
       <CardImg 
       top
       height="280"
       
       src={product.smallimage}
       />
       <CardBody className="text-center">
        <CardTitle>{product.productname}</CardTitle>
        <CardText className="primary">
             {product.productprice} Rupees</CardText>
            <Button color="success" onClick={()=>addincart(product)}>Buy Now</Button>
       </CardBody>
    </Card>
)
}

export default CartItem