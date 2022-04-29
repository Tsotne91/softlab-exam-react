import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";

export default function AddStudentModal(props) {

    const initialValues = {
        firstName: "",
        lastName: "",
        personalNumber: "",
        email: "",
        birthDate: ""
    }
    const [formValues, setFormValues] = useState(initialValues);
    const submitForm = async (e) =>{
        e.preventDefault();
        await axios.post('/students', formValues);
        props.onHide();
        window.parent.location.reload();
    }
    const changeHandler = (field) => {
        return (e) => {
        setFormValues({...formValues, [field]: e.target.value});
        }
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
                    <Form.Control type="text" placeholder="Enter First Name" value={formValues.firstName} onChange={changeHandler("firstName")}/>
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name" value={formValues.lastName} onChange={changeHandler("lastName")}/>
                    <Form.Label>Personal Number:</Form.Label>
                    <Form.Control type="number" placeholder="Enter Personal Number" value={formValues.personalNumber} onChange={changeHandler("personalNumber")}/>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={formValues.email} onChange={changeHandler("email")} />
                    <Form.Label>Birth Date</Form.Label>
                    <Form.Control type="date" value={formValues.birthDate} onChange={changeHandler("birthDate")}/>
                    <Button variant="primary" type="submit"  className="my-md-3">
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