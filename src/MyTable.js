import React, {useState, useEffect} from "react";
import {Table} from "react-bootstrap";
import schoolApi from "./schoolApi";

export default function MyTable (){

const [personsData, setPersonsData] = useState([]);

    useEffect(()=> {
        schoolApi.get('/students')
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
                        <td>{personData.first_name}</td>
                        <td>{personData.last_name}</td>
                        <td>{personData.personal_no}</td>
                        <td>{personData.email}</td>
                        <td>{personData.birth_date}</td>
                    </tr>
                ))
            }


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