import React, { useState, useEffect } from "react";

//import { render } from "enzyme";
import Card from 'react-bootstrap/Card'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

//function starts here
export default function DataCards() {
    const [stats, handleStats] = useState([]);
    useEffect(() => {
        FetchData()
      }, [])

        //data fetching from the api
  const FetchData = async () => {
    const data = await fetch('https://corona.lmao.ninja/all'); //data source
    const stats = await data.json();
    
    
    handleStats(stats)
  }
//    const greeting = "Hey Functional Component!";

  return (
    <React.Fragment>
      <Container className="d-inline-flex">
          <Row className="dataCardsRow">
          <Col>
        <Card className="dataCards">
            {/*<CardHeader>CoronaVirus Statistics</CardHeader>*/}
            <Card.Img top width="100%" src="https://cdn.pixabay.com/photo/2020/03/09/14/11/virus-4915859_1280.png" alt='' />
                <Card.Body className="dataCardBody">
                    <Card.Title>Latest Recoveries</Card.Title>
                    <Card.Text>
                     {stats.recovered}
                    </Card.Text>
                </Card.Body>
        </Card>
        </Col>
        <br />
        <Col>
        <Card className="dataCards">
            {/*<CardHeader>CoronaVirus Statistics</CardHeader>*/}
            <Card.Img top width="100%" src="https://cdn.pixabay.com/photo/2020/03/09/14/11/virus-4915859_1280.png" alt='' />
                <Card.Body className="dataCardBody">
                    <Card.Title>Latest Cases</Card.Title>
                    <Card.Text>
                     {stats.cases}
                    </Card.Text>
                </Card.Body>
        </Card>
        </Col>
        <br />
        <Col>
        <Card className="dataCards">
         {/* <CardHeader>CoronaVirus Statistics</CardHeader>*/}
            <Card.Img top width="100%" src="https://cdn.pixabay.com/photo/2020/03/09/14/11/virus-4915859_1280.png" alt='' />
                <Card.Body className="dataCardBody">
                    <Card.Title>Latest Deaths</Card.Title>
                    <Card.Text>
                     {stats.deaths}
                    </Card.Text>
                </Card.Body>
        </Card>
        </Col>
        <br />
        {/*<Col>
        <Card>
            <CardHeader>CoronaVirus Statistics</CardHeader>
            <CardImg top width="100%" src="https://cdn.pixabay.com/photo/2020/03/09/14/11/virus-4915859_1280.png" alt='' />
                <CardBody>
                    <CardTitle>Latest Coordinates</CardTitle>
                    <CardText>
                     {stats.coordinates}
                    </CardText>
                </CardBody>
        </Card>
        </Col>*/}
        
        </Row>
      </Container>
    </React.Fragment>
  );
}



