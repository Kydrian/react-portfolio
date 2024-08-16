// This is a static page mocking an "About Us" section for our fake user data
import React from 'react';
import { Container, Row, Col, Card, ProgressBar, Image } from 'react-bootstrap';
export default function AboutPage() {
  return (
    <Container className="my-5">
    {/* Introduction Section */}
    <Row className="mb-4">
      <Col>
        <h1>About Me</h1>
        <p>
          Hi, I'm Kydrian Green, a passionate student at the University of North Carolina at Charlotte. I am passionate about technology and I am always looking for new challenges.
        </p>
      </Col>
    </Row>

    {/* Personal Details Section */}
    <Row className="mb-4">
      <Col md={4}>
        <Image src="c:\Users\Kydri\OneDrive\Pictures\kydrian.jpg" roundedCircle fluid />
      </Col>
      <Col md={8}>
        <Card>
          <Card.Body>
            <Card.Title>Personal Details</Card.Title>
            <p><strong>Name:</strong> Kydrian Green</p>
            <p><strong>Email:</strong> Kydrian.green@yahoo.com</p>
            <p><strong>Location:</strong> Charlotte, NC</p>
            <p><strong>GitHub:</strong> <a href="https://github.com/Kydrian" target="_blank" rel="noopener noreferrer">github.com/Kydrian</a></p>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    {/* Skills Section */}
    <Row className="mb-4">
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>Skills</Card.Title>
            <p>JavaScript</p>
            <ProgressBar now={60} label="60%" className="mb-3" />
            <p>React</p>
            <ProgressBar now={75} label="75%" className="mb-3" />
            <p>Node.js</p>
            <ProgressBar now={70} label="70%" className="mb-3" />
            <p>SQL</p>
            <ProgressBar now={80} label="80%" />
          </Card.Body>
        </Card>
      </Col>
    </Row>

  </Container>
);
}
