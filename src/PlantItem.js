import React from 'react';
import {Col, Card, ListGroup } from 'react-bootstrap';

function PlantItem({ item, onPlantClick}) {
    return (
        <Col key={item}>
            <Card style={{ width: '18rem', marginBottom: '44px', cursor: "pointer" }} onClick={onPlantClick}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item>Category: {item.category}</ListGroup.Item>
                    <ListGroup.Item>Watering frequently: {item.wateringFrequently}</ListGroup.Item>
                    <ListGroup.Item>Preferences: {item.preferences}</ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    );
}

export default PlantItem;