import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

function PlantDetailsDialog({ showStatus, onDialogHide, list }) {
    var plant = JSON.parse(localStorage.getItem('selectedPlant'));

    React.state = {
        name: '',
        image: '',
        description: '',
        category: '',
        wateringFrequently: '',
        preferences: '',
    };

    let addButton;
    let saveButton;
    let deleteButton;
    let catalogId;

    if (plant.id === "-1") {
        addButton = <Button variant="primary" onClick={() => {
            var catalogId = JSON.parse(localStorage.getItem('catalogId'));
            if (catalogId == null) catalogId = 0;

            catalogId = catalogId + 1;

            const item = {
                "id": catalogId,
                "name": React.state.name,
                "image": React.state.image,
                "description": React.state.description,
                "category": React.state.category,
                "wateringFrequently": React.state.wateringFrequently,
                "preferences": React.state.preferences,
            }

            list.push(item);
            localStorage.setItem('plants', JSON.stringify(list));
            localStorage.setItem('catalogId', JSON.stringify(catalogId));
            onDialogHide();
        }}>
            Add
        </Button>;
    } else {
        catalogId = <Form.Label>Catalog id: {plant.id}</Form.Label>

        saveButton = <Button variant="primary" onClick={() => {
            const item = {
                "id": plant.id,
                "name": React.state.name === '' ? plant.name : React.state.name,
                "image": React.state.image === '' ? plant.image : React.state.image,
                "description": React.state.description === '' ? plant.description : React.state.description,
                "category": React.state.category === '' ? plant.category : React.state.category,
                "wateringFrequently": React.state.wateringFrequently === '' ? plant.wateringFrequently : React.state.wateringFrequently,
                "preferences": React.state.preferences === '' ? plant.preferences : React.state.preferences,
            }

            var index = list.findIndex(obj => obj.id === item.id);
            list[index] = item;
            localStorage.setItem('plants', JSON.stringify(list));
            onDialogHide();
        }}>
            Save
        </Button>;

        deleteButton = <Button variant="danger" onClick={() => {
            list.pop(plant);
            localStorage.setItem('plants', JSON.stringify(list));
            onDialogHide();
        }}>
            Delete
        </Button>;
    }

    return (
        <Modal show={showStatus} onHide={onDialogHide}>
            <Modal.Header closeButton>
                <Modal.Title>Plant details</Modal.Title>
            </Modal.Header>
            <Form>
                <Modal.Body>
                    {catalogId}
                    <Form.Group className="mb-3" controlId="nameForm">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" onChange={e => React.state.name = e.target.value} defaultValue={plant.name} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="imageForm">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="text" placeholder="Image" onChange={e => React.state.image = e.target.value} defaultValue={plant.image} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="descriptionForm">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Description" onChange={e => React.state.description = e.target.value} defaultValue={plant.description} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="categoryForm">
                        <Form.Label>Category</Form.Label>
                        <Form.Control type="text" placeholder="Category" onChange={e => React.state.category = e.target.value} defaultValue={plant.category} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="wateringFrequentlyForm">
                        <Form.Label>Watering frequently</Form.Label>
                        <Form.Control type="text" placeholder="Watering frequently" onChange={e => React.state.wateringFrequently = e.target.value} defaultValue={plant.wateringFrequently} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="preferencesForm">
                        <Form.Label>Preferences</Form.Label>
                        <Form.Control type="text" placeholder="Preferences" onChange={e => React.state.preferences = e.target.value} defaultValue={plant.preferences} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    {addButton}
                    {saveButton}
                    {deleteButton}
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default PlantDetailsDialog;