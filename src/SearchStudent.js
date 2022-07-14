import Form from 'react-bootstrap/Form'
import {Button, FloatingLabel} from "react-bootstrap";
import React, {useState} from "react";

export default function SearchStudent({onSubmit}){

    const initialValues = {
        firstName: "",
        lastName: "",
    }

    const [values, setValues] = useState(initialValues);

    const changeHandler = (field) => {
        return (e) => {
            setValues({...values, [field]: e.target.value});
        }
    }

   const submitSearch = (e) => {
        e.preventDefault();
        if (!values) return null;
        onSubmit(values);
   }

   // const displayAll = (e) => {
   //      e.preventDefault();
   //      setValues(initialValues);
   //      window.location.reload();
   // }

    return (
        <>
            <Form>
                <FloatingLabel
                controlId="floatingInput"
                label="First Name"
                className="col d-inline-block m-2"
            >
                <Form.Control
                    type="text"
                    value={values.firstName}
                    onChange={changeHandler("firstName")}/>
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Last Name"
                    className="col d-inline-block m-2"
                >
                    <Form.Control
                        type="text"
                        value={values.lastName}
                        onChange={changeHandler("lastName")}
                    />
                </FloatingLabel>

            </Form>
            <Button
                className="col d-inline-block m-2"
                onClick={submitSearch}
            >search</Button>
            {/*<Button*/}
            {/*    className="col d-inline-block m-2"*/}
            {/*    variant="secondary"*/}
            {/*    onClick={displayAll}*/}
            {/*>display all</Button>*/}
        </>
    )
}