import React,{useState}from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import './App.css';

import {Container, Row, Col} from "reactstrap"
import {ToastContainer,toast} from "react-toastify"
import BuyPage from "./Components/BuyPage";
import Cart from "./Components/Cart";


function App() {
  const [cartItem, setCartItem]= useState([])
    
    const addincart = item => {
      const isalreadyadded = cartItem.findIndex(element=>
element.id === item.id
      )
      

    if(isalreadyadded!==-1)
    return toast("already added in cart", {type:"error"})
      
    

    setCartItem([...cartItem, item])
  }

  const buynow=()=>{
    setCartItem([])
    toast("Purchase Complete",{type:"success"})
  }

  const removeItem=item=>{
    setCartItem(cartItem.filter(singleitem=>singleitem.id!==item.id))
    console.log(item.id)
  }

  return (
    <Container fluid>
      <ToastContainer/>
      <Row>
        <Col md="8">
          <BuyPage addincart={addincart}/>
        </Col>
        <Col md="4">
         <Cart cartItem={cartItem} removeItem={removeItem} buynow={buynow}/>

        </Col>
      </Row>

    </Container>
  );
}

export default App;
