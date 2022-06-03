import Toggle from "./Toggle";
import AddStudentModal from "./AddStudentModal";
import React, {useState} from "react";
import {Button} from "react-bootstrap";
import SearchStudent from "./SearchStudent";

export default function App(){
    const [studentModalShow, setStudentModalShow] = useState(false);




    return (
    <>
        <Toggle/>
        <SearchStudent/>

        <AddStudentModal
        show={studentModalShow}
        onHide={() => setStudentModalShow(false)}/>
        <Button onClick={()=> setStudentModalShow(true)} className="mx-2">Add Student</Button>
    </>
    )
}