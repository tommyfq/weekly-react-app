import React, { useState } from 'react';
import {Modal, Button, Form} from 'react-bootstrap';

const FormAdd = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = (event) => {
        event.preventDefault();
        var newMovie = {
            Title:event.target.Title.value,
            Year:event.target.Year.value,
            Director:event.target.Director.value,
            imdbRating:event.target.imdbRating.value,
            imdbVotes:event.target.imdbVotes.value,
            Images:[event.target.Image.value]
        }
        props.addMovie(newMovie);
        setShow(false);
    }

    return(
        <>
            <div className='col-xs-12 mb-2 float-right'>
                <Button className="secondaryBtn" onClick={handleShow}>
                    Add Movie
                </Button>
            </div>
            <Modal size="lg" show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                <Modal.Title>Add Movie</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control name="Title" type="text" placeholder="Title" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Year</Form.Label>
                            <Form.Control name="Year" type="text" placeholder="Year" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Director</Form.Label>
                            <Form.Control name="Director" type="text" placeholder="Director" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Rating</Form.Label>
                            <Form.Control name="imdbRating" type="text" placeholder="Rating" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Number of Votes</Form.Label>
                            <Form.Control name="imdbVotes" type="text" placeholder="Number of Votes" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Image</Form.Label>
                            <Form.Control name="Image" type="text" placeholder="Image Url" />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Add Movie
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}
export default FormAdd;