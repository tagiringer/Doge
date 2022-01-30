import "../App.css";
import "../index.css";
import { Card } from "semantic-ui-react";

const Supermutt = () => {
  return (
    <Card fluid={true}>
      <Card.Content>
        <Card.Header textAlign="center">
          My results say Supermutt. What does that mean?
        </Card.Header>
        <Card.Content>
          Supermutt means your dog shares DNA with certain breeds of an unknown
          quantity. Your dog's supermutt breeds are:
          <ul>
            <li>Beagle</li>
            <li>Basset Hound</li>
          </ul>
        </Card.Content>
      </Card.Content>
    </Card>
  );
};

export default Supermutt;
