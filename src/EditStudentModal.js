import {Button, Form, Modal} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";

export default function EditStudentModal(props){
    let initialValues = {
        firstName: null,
        lastName: null,
        personalNumber: null,
        email: null,
        birthDate: null
    }

    const [formValues, setFormValues] = useState(initialValues);

    useEffect(()=> {
        setFormValues(props.person)
    }, [props.person])

    const submitForm = async (e) =>{
        e.preventDefault();
        await axios.put(`edit-student/${props.person.id}`, formValues);
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
                <Form.Control type="text"  value={formValues.firstName} onChange={changeHandler("firstName")}/>
                <Form.Label>Last Name:</Form.Label>
                <Form.Control type="text"  value={formValues.lastName} onChange={changeHandler("lastName")}/>
                <Form.Label>Personal Number:</Form.Label>
                <Form.Control type="number" value={formValues.personalNumber} onChange={changeHandler("personalNumber")}/>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" value={formValues.email} onChange={changeHandler("email")} />
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