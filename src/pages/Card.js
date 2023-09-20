import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>this is a demo item</Card.Text>
        <Button variant="warning">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
