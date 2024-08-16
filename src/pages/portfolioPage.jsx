import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages and getting the current param variable's value from URL
import { useParams, Link } from 'react-router-dom';
import Profile from '../components/UI/ProfileSections/ProfileDetailed';
import Container from '../components/UI/ListItem';

import projects from "./projects.json"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function ProfilePage() {
 

  return (
    <>
      <Container>
        {/* this container will render the project.json data */}
      
        <h1>Profile</h1>
        {projects.map((project, key) => (
          <Card className="text-center"  key={key}>
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>
              Explore my wonderful portfolio.
            </Card.Text>
            <Button href={project.live} variant="primary"> Go To website</Button>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
        ))}
      </Container>
      <footer className="profile-footer">
        {/* Link the user back to the homepage. The to prop is used in place of an href */}
        <Link to="/">← Go Back</Link>
      </footer>
    </>
  );
}
