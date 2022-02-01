import "../App.css";
import "../index.css";
//import { Modal } from "semantic-ui-react";
import { Card, Image, Icon } from "semantic-ui-react";
//import { ReactComponent as Bernard } from "../images/Bernard.jpg";
import bernard from "../images/Bernard.jpg";

function ResultsCard() {
  return (
    <Card fluid={true}>
      {/* <Image src={bernard} wrapped ui={false} /> */}
      {/* <img className="img-responsive" src={bernard} /> */}

      <Card.Content>
        <Card.Header textAlign="center">Test: Canine Oral Swab</Card.Header>
        <Card.Meta textAlign="center">
          <span className="date">Result: Mixed Breed</span>
        </Card.Meta>
        <Card.Description>
          Canine lab results (RF-077109) have been concluded and have determined
          Bernard to be of Mixed Breed.
        </Card.Description>
      </Card.Content>
      <Card.Content extra></Card.Content>
    </Card>
  );
}

export default ResultsCard;
