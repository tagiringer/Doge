import logo from "./logo.svg";
import "./App.css";
//import { Button, Image, Grid, FormInput, Card, Modal } from "semantic-ui-react";
//import { ReactComponent as Logo } from "./images/embark.svg";
//import embark from "./images/embark.svg";
//import ResultsCard from "./components/ResultsCard";
//import Process from "./components/Process";
import { Route, Switch } from "react-router-dom";
import React from "react";
//import ResultsDetails from "./components/ResultsDetails";
//import AppRoutes from "./AppRoutes";
//import bernardresults from "./images/BernardResults.png";
//import supermutt from "./components/Supermutt";

function App() {
  return (
    <div class="ui grid container">
      <div class="row">
        {/* <Grid columns={3}>
          <Grid.Row>
            <Grid.Column></Grid.Column>
            <Grid.Column stretched={true}>
              <Image src={embark} size="medium" />
            </Grid.Column>
            <Grid.Column></Grid.Column>
          </Grid.Row>
        </Grid> */}

        test
      </div>

      <div class="row">
        {/* <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={2}></Grid.Column>
            <Grid.Column width={12}>
              <Card fluid={true} rasied={true}>
                <Card.Header textAlign="center">
                  <h1>Genetic Breed Results</h1>
                </Card.Header>
                <Grid columns={1}>
                  <Grid.Row>
                    <Grid.Column>
                      <div className="left-card">
                        
                        <Image
                          src={bernardresults}
                          size="big"
                          fluid={true}
                          verticalAlign="middle"
                        />
                      </div>
                      <div className="left-card">
                        <Process />
                      </div>
                    </Grid.Column>

                    <Grid.Column fluid={true}>
                      <div className="left-card">
                        <ResultsCard />
                      </div>

                      <div className="left-card">
                        <Supermutt />
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row></Grid.Row>
                </Grid>
              </Card>
            </Grid.Column>
            <Grid.Column width={2}></Grid.Column>
          </Grid.Row>
        </Grid> */}
        test
      </div>
    </div>
  );
}

export default App;
