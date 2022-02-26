import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";

export default function AddStudentModal(props) {
    const initialValues = {
        firstName: "",
        lastName: "",
        personalNumber: "",
        email: ""
    }

    const [formValue, setFormValue] = useState(initialValues);

    const submitForm = async (e) =>{
        e.preventDefault();

    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton />
                <Form className="mx-3">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name"/>
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name"/>
                    <Form.Label>Personal Number:</Form.Label>
                    <Form.Control type="number" placeholder="Enter Personal Number"/>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
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