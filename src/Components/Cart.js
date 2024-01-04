import React from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  CardHeader,
  CardBody,
  Card,
  CardFooter,
  Col,
  Row,
  CardText
} from "reactstrap";

const Cart = ({ cartItem, removeItem, buynow }) => {
  let amount = 0;

  cartItem.forEach(item => {
    amount = parseFloat(amount) + parseFloat(item.productprice);
  });

  return (
    <Container fluid>
      <h1 className="text-success">Your Cart</h1>
      <ListGroup>
        {cartItem.map(item => (
          
          <ListGroupItem key={item.id}>
            <Row>
              <Col>
                <img height={80} src={item.tinyimage} />
              </Col>
              <Col className="text-center">
                <div className="text-primary">{item.productname}</div>
                <span>price :- Rs {item.productprice}</span>
                <Button color="danger" onClick={() => removeItem(item)}>
                  Remove
                </Button>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
      {/* If everything is empty */}
      {cartItem.length >= 1 ? (
        <Card className="text-center mt-3">
          <CardHeader>Grand Total</CardHeader>
          <CardBody>
            Your amount for {cartItem.length>1 ? (<CardText>{cartItem.length} products are</CardText>):(<CardText>{cartItem.length} product is</CardText>)} {amount} Rupees
          </CardBody>
          <CardFooter>
            <Button color="success" onClick={buynow}>
              pay here
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <h1 className="text-warning">Cart is empty</h1>
      )}
    </Container>
  );
};

export default Cart;
