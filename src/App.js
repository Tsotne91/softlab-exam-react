import Toggle from "./Toggle";
import AddStudentModal from "./AddStudentModal";
import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import SearchStudent from "./SearchStudent";
import MyTable from "./MyTable";
import axios from "axios";

export default function App(){
    const [studentModalShow, setStudentModalShow] = useState(false);
    const [peoplesData, setPeoplesData] = useState([]);

    useEffect(()=> {
        searchStudents().catch(console.error)
    }, [])

    const searchStudents = async (params) => {
     const response = await axios.get('/students', {params});
     setPeoplesData(response.data);
    }

    return (
    <>
        <Toggle/>
        <SearchStudent onSubmit={searchStudents}/>
        <MyTable data={peoplesData}/>
        <AddStudentModal
        show={studentModalShow}
        onHide={() => setStudentModalShow(false)}/>
        <Button onClick={()=> setStudentModalShow(true)} className="mx-2">Add Student</Button>
    </>
    )
}