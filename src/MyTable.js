import React, {useState, useEffect} from "react";
import {Table} from "react-bootstrap";
import axios from "axios";

export default function MyTable (){

const [personsData, setPersonsData] = useState([]);

    useEffect(()=> {
        axios.get('/students')
            .then(res => setPersonsData(res.data))
            .catch(console.error);
    }, [])

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
            </tr>
            </thead>
            <tbody>
            {
                personsData.map( personData => (
                    <tr key={personData.id}>
                        <td>{personData.id}</td>
                        <td>{personData.firstName}</td>
                        <td>{personData.lastName}</td>
                        <td>{personData.personalNumber}</td>
                        <td>{personData.email}</td>
                        <td>{personData.birthDate}</td>
                    </tr>
                ))
            }



            {/*<tr>*/}
            {/*    <td>1</td>*/}
            {/*    <td>Mark</td>*/}
            {/*    <td>Otto</td>*/}
            {/*    <td>234</td>*/}
            {/*    <th>mail@example.com</th>*/}
            {/*    <th>12/12/2012</th>*/}
            {/*</tr>*/}
            </tbody>
        </Table>
        </>
    )
}