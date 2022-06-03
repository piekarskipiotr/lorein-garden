import React, { useState } from 'react';
import './App.css';
import PlantItem from './PlantItem.js';
import PlantDetailsDialog from './PlantDetailsDialog';
import { Navbar, Container, Nav, Row, Button } from 'react-bootstrap';

// const addPlant = (item) => {
//   plants.push(item);
//   localStorage.setItem('plants', JSON.stringify(plants));
// }

// const deletePlant = (item) => {
//   plants.pop(item);
//   localStorage.setItem('plants', JSON.stringify(plants));
// }

// const editPlant = (index, item) => {
//   plants[index] = item;
//   localStorage.setItem('plants', JSON.stringify(plants));
// }

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  var emptyPlant = {
    "id": '-1',
    "name": '',
    "image": '',
    "description": '',
    "category": '',
    "wateringFrequently": '',
    "preferences": '',
  };

  const setSelectedPlant = (item) => {
    localStorage.setItem('selectedPlant', JSON.stringify(item));
  };

  var plant = JSON.parse(localStorage.getItem('selectedPlant'));
  if (plant == null) setSelectedPlant(emptyPlant);
  
  var plants = JSON.parse(localStorage.getItem('plants'));
  if (plants == null) plants = [];

  return (
    <div className="App">
      <br></br>
      <Container>
        <Navbar bg="transparent" >
          <Nav className="navbar-brand mx-auto">
            <h2>Lórien garden</h2>
          </Nav>
        </Navbar>
      </Container>
      <br></br>
      <Container style={{ width: "200vh" }}>
        <Row xs={1} md={3} className="g-3">
          {plants.map((_, index) => (
            <PlantItem item={plants[index]} onPlantClick={() => {
              setSelectedPlant(plants[index]);
              handleShow();
            }} />
          ))}
        </Row>
      </Container>
      <Container>
        <Button variant="primary" size="lg" style={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          margin: '26px',
          background: '#E4B7E5',
          border: '2px solid #E4B7E5',
        }} onClick={() => {
          setSelectedPlant(emptyPlant);
          handleShow();
        }
        }>
          Add new plant
        </Button>
      </Container>
      <PlantDetailsDialog showStatus={show} onDialogHide={handleClose} list={plants} />;
    </div>
  );
}

export default App;
