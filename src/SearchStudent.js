import Form from 'react-bootstrap/Form'
import {Button, FloatingLabel} from "react-bootstrap";
import React, {useState} from "react";
import MyTable from "./MyTable";
import axios from "axios";

export default function SearchStudent(){

    const initialValues = {
        firstName: "",
        lastName: ""
    }

    const [personSearchData, setPersonSearchData] = useState({initialValues});

    const changeHandler = (field) => {
        return (e) => {
            setPersonSearchData({...personSearchData, [field]: e.target.value});
        }
    }


   const submitSearch = async (personSearchData) => {
        if (!personSearchData) return null;
        else if (!personSearchData.firstName) await axios.get(`/students/?lastName=${personSearchData.lastName}`)
        else if (!personSearchData.lastName) await axios.get(`/students/?firstName=${personSearchData.firstName}`)
        else await axios.get(`/students/?firstName=${personSearchData.firstName}&lasName=${personSearchData.lastName}`)
   }


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
                    value={personSearchData.firstName}
                    onChange={changeHandler("firstName")}/>
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Last Name"
                    className="col d-inline-block m-2"
                >
                    <Form.Control
                        type="text"
                        value={personSearchData.lastName}
                        onChange={changeHandler("lastName")}
                    />
                </FloatingLabel>

            </Form>
            <Button
                className="col d-inline-block m-2"
                onClick={submitSearch}
            >search</Button>
            <MyTable peoplesdata={personSearchData}/>
        </>
    )
}