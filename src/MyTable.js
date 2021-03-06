import React, {useState} from "react";
import {Table, Button} from "react-bootstrap";
import {XSquareFill, PencilSquare} from 'react-bootstrap-icons'
import axios from "axios";
import EditStudentModal from "./EditStudentModal";

export default function MyTable ({data}){


const [personDataForModal, setPersonDataForModal] = useState({});
const [modalShow, setModalShow] = useState(false);

    return (
        <>
        <Table striped bordered hover variant="dark">
            <thead>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Personal No</th>
                <th>email</th>
                <th>Birth Date</th>
                <th></th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {
                data.map( personData => (
                    <tr key={personData.id}>
                        <td>{personData.id}</td>
                        <td>{personData.firstName}</td>
                        <td>{personData.lastName}</td>
                        <td>{personData.personalNumber}</td>
                        <td>{personData.email}</td>
                        <td>{personData.birthDate}</td>
                        <td>
                            <Button
                                size="sm"
                                variant="danger"
                                onClick={() =>{
                                    const Id = personData.id;
                                    axios.post(`students/delete-student/${Id}`).then(() => window.location.reload())}}>
                                <XSquareFill/> Delete
                            </Button>
                        </td>
                        <td>
                            <Button size="sm"
                                    variant="secondary"
                                    onClick={()=>{
                                        setPersonDataForModal(personData);
                                        setModalShow(true);
                                    }}>
                                <PencilSquare/> Edit
                            </Button>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </Table>
            <EditStudentModal
                show={modalShow}
                person={personDataForModal}
                onHide={()=>setModalShow(false)}
            />
        </>
    )
}