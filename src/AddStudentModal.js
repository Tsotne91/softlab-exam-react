import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";

export default function AddStudentModal(props) {
    const initialValues = {
        firstName: "",
        lastName: "",
        personalNumber: "",
        email: "",
        date: ""
    }

    const [formValue, setFormValue] = useState(initialValues);

    const submitForm = async (e) =>{
        e.preventDefault();
        await axios.post('/students', formValue);
        props.onHide();
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton />
                <Form className="mx-3" onSubmit={submitForm}>
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name"/>
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name"/>
                    <Form.Label>Personal Number:</Form.Label>
                    <Form.Control type="number" placeholder="Enter Personal Number"/>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.label>Birth date</Form.label>
                    <Form.Control type="date" placeholder="Enter birth date"/>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            <Modal.Footer>
                <Button onClick={props.onHide}
                variant="secondary">Close</Button>
            </Modal.Footer>
        </Modal>
    )
}