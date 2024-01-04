import React, { useEffect, useState } from "react"
import Axios from "axios"
import CartItem from "./CartItem"
import {faker} from "@faker-js/faker"
import {Container,Col, Row} from "reactstrap"



const apiKey="INSERT_YOUR KEY"
const url="https://ap.pexels.com/v1search?query=laptop&per_page=6&page=1"

//http://myjson.dit.upm.es/api/bins/2m30

const localurl="http://myjson.dit.upm.es/api/bins/g1sw"

const BuyPage= ({addincart})=>{
    const [product, setProduct]=useState([])

    // const fetchPhotos=async()=>{
    //     const response= await Axios.get(url,{
    //         header:{
    //             Authorization: apiKey
    //         }
    //     })
    // }
    //we come outside the async function to get the local url 
    const fetchPhotos=async()=>{
        const {data}= await Axios.get(localurl,{})
        

const {photos}=data


//while mapping we need not return anything and we fire a callback in which we assign object set of values

const allproduct= photos.map(photo=> ({
    
    smallimage: photo.src.medium,
    tinyimage: photo.src.tiny,
    productname: faker.random.locale(),
    productprice: faker.commerce.price(),
    id: faker.datatype.uuid()
}))
   setProduct(allproduct)
    }
    console.log(product)

//the below use effect is used to preload the page wtih the laptop photos
useEffect(()=>{
    fetchPhotos()
},[])
    
return( 
    <Container fluid>
        <h1 className="text-success text-center">
            Buy Page
        </h1>
            <Row>
                {product.map(prod=>(
                    
            <Col md={4} key={prod.id}>
                <CartItem product={prod} addincart={addincart}/>
            </Col>
                    
                ))}
            </Row>
        
    </Container>
)

}
export default BuyPage

