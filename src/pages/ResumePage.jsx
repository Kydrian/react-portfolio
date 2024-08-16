import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

export default function ResumePage() {
  return (
    <Container className="my-5">
      {/* Header Section */}
      <Row className="mb-4">
        <Col>
          <h1>Kydrian Green</h1>
          <h5>Full Stack Developer</h5>
          <p>Email: Kydrian.green@yahoo.com | Phone: (980) 213-8359 | Github: https://github.com/Kydrian</p>
        </Col>
      </Row>

      {/* Summary Section */}
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Summary</Card.Title>
              <Card.Text>
                I am a student at the University of North Carolina at Charlotte. I am passionate about technology and I am always looking for new challenges. 
              </Card.Text>
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
              <ListGroup variant="flush">
                <ListGroup.Item>JavaScript, React, Node.js, Express</ListGroup.Item>
                <ListGroup.Item>HTML, CSS, Bootstrap</ListGroup.Item>
                <ListGroup.Item>MongoDB, MySQL</ListGroup.Item>
                <ListGroup.Item>Python, Django</ListGroup.Item>
                <ListGroup.Item>Git, GitHub, CI/CD</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Experience Section */}
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Experience</Card.Title>
              <Card.Text>
                <strong>Physical Education Teacher</strong> | Charlotte Mecklenburg Schools | January 2020 - Present
                <br />
                - Developed lesson plans and provided personalized instruction to students.
                <br />
                - Taught physical education classes to 1000+ students.
              </Card.Text>
              <Card.Text>
                <strong>Full Stack Devlopment BootCamp</strong> | UNCC fullstack development Bootcamp | June 2024 - Present
                <br />
                - Developed full-stack web applications using React, Node.js, and MongoDB.
                <br />
                - Implemented responsive design and improved user interface components.
                <br />
                - Participated in coding challenges and project-based learning.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Education Section */}
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Education</Card.Title>
              <Card.Text>
                <strong>Bachelor of Sports Science Fitness Management</strong> | University of North Carolina A&T State University | 2014 - 2018
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
