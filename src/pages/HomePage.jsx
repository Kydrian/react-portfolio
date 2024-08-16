import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages
import { Link } from 'react-router-dom';
// import Profile from '../components/UI/ProfileSections/ProfileTeaser';
// import ListItem from '../components/UI/ListItem';
import Alert from 'react-bootstrap/Alert';



export default function HomePage() {
  
  return (
    <div className="container pt-4">
      <Alert variant="success">
        {/* <img src={} /> */}
        <h1>Kydrian Green</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ut adipisci ea ipsa vitae laboriosam, atque natus tempore cumque aliquam, eos nesciunt aut obcaecati accusamus consequuntur totam! Voluptas, eligendi ea!</p>
        </Alert>
    </div>
  );
}
